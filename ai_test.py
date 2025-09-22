# Load the image using OpenCV
'''
from inference_sdk import InferenceHTTPClient
import cv2
import matplotlib.pyplot as plt
import os

file_name = os.path.join(os.path.dirname(__file__), r'C:\Users\srija\OneDrive\Desktop\web3\test1\yourimage.jpg')
assert os.path.exists(file_name)
import os
os.chdir(r"C:\Users\srija\OneDrive\Desktop\web3\test1")

CLIENT = InferenceHTTPClient(
    api_url="https://serverless.roboflow.com",
    api_key="NySbEeiMAkcNqEehUUzu"
)

result = CLIENT.infer(file_name, model_id="crowd-density-estimation/3")
num_predictions = len(result['predictions'])
print(num_predictions)
image = cv2.imread("b.jpg")
height, width, _ = image.shape

# Extract prediction details and draw bounding boxes
for prediction in result['predictions']:
    x = int(prediction['x'] - prediction['width'] / 2)
    y = int(prediction['y'] - prediction['height'] / 2)
    w = int(prediction['width'])
    h = int(prediction['height'])
    
    # Draw the bounding box on the image
    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
    label = f"{prediction['class']}:{prediction['confidence']:.2f}"
    cv2.putText(image, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

# Convert the image from BGR to RGB (OpenCV uses BGR by default)
image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# Set the size of the output image
plt.figure(figsize=(12, 8))

# Display the image using matplotlib
plt.imshow(image)
plt.axis('off')  # Hide the axis
plt.title(f"Number of predictions: {num_predictions}")
plt.show()
'''

import cv2
import numpy as np

# Load YOLO
yolo_cfg = "yolov3.cfg"         # Path to the YOLO config file
yolo_weights = "yolov3.weights" # Path to the YOLO weights file
coco_names = "coco.names"       # Path to the class labels file

# Load the names of the classes
with open(coco_names, "r") as f:
    classes = [line.strip() for line in f.readlines()]

# Load YOLO
net = cv2.dnn.readNet(yolo_weights, yolo_cfg)

# Set the model to be in inference mode
layer_names = net.getLayerNames()
output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers()]

# Load the image
image_path = r"C:\Users\srija\OneDrive\Desktop\web3\test1\yourimage.jpg"  # Replace with the path to your image
image = cv2.imread(image_path)
height, width, channels = image.shape

# Prepare the image for YOLO
blob = cv2.dnn.blobFromImage(image, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
net.setInput(blob)
outs = net.forward(output_layers)

# Process YOLO's output to count people
class_ids = []
confidences = []
boxes = []

for out in outs:
    for detection in out:
        scores = detection[5:]
        class_id = np.argmax(scores)
        confidence = scores[class_id]
        
        # If the object is a person (class_id == 0 corresponds to "person")
        if confidence > 0.5 and class_id == 0:
            # Get bounding box coordinates
            center_x = int(detection[0] * width)
            center_y = int(detection[1] * height)
            w = int(detection[2] * width)
            h = int(detection[3] * height)
            
            # Rectangle coordinates
            x = int(center_x - w / 2)
            y = int(center_y - h / 2)
            
            boxes.append([x, y, w, h])
            confidences.append(float(confidence))
            class_ids.append(class_id)

# Apply Non-Maximum Suppression to reduce overlapping boxes
indices = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

# Draw bounding boxes for people
if len(indices) > 0:
    for i in indices.flatten():
        x, y, w, h = boxes[i]
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
        label = f"{classes[class_ids[i]]} {confidences[i]:.2f}"
        cv2.putText(image, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

# Show the resulting image
cv2.imshow("People Detection", image)
cv2.waitKey(0)
cv2.destroyAllWindows()

# Print number of people detected
print(f"Number of people detected: {len(indices)}")