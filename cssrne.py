import torch
import torch.nn as nn
import torchvision.transforms as transforms
import cv2
import numpy as np
from urllib.request import urlretrieve

# Download a pretrained CSRNet model (if not already available)
MODEL_URL = "https://github.com/CommissarMa/CSRNet-pytorch/releases/download/v1.0/CSRNet.pth"
MODEL_PATH = "CSRNet.pth"

try:
    open(MODEL_PATH)
except:
    print("Downloading pre-trained CSRNet model...")
    urlretrieve(MODEL_URL, MODEL_PATH)

# Define CSRNet model (simplified)
class CSRNet(nn.Module):
    def __init__(self, load_weights=False):
        super(CSRNet, self).__init__()
        self.frontend_feat = [64, 64, 'M', 128, 128, 'M',
                              256, 256, 256, 'M', 512, 512, 512]
        self.backend_feat = [512, 512, 512,256,128,64]
        self.frontend = self._make_layers(self.frontend_feat)
        self.backend = self._make_layers(self.backend_feat, in_channels=512, batch_norm=False, dilation=True)
        self.output_layer = nn.Conv2d(64, 1, kernel_size=1)

    def forward(self, x):
        x = self.frontend(x)
        x = self.backend(x)
        x = self.output_layer(x)
        return x

    def _make_layers(self, cfg, in_channels=3, batch_norm=False, dilation=False):
        layers = []
        d_rate = 2 if dilation else 1
        for v in cfg:
            if v == 'M':
                layers += [nn.MaxPool2d(kernel_size=2, stride=2)]
            else:
                conv2d = nn.Conv2d(in_channels, v, kernel_size=3, padding=d_rate, dilation=d_rate)
                if batch_norm:
                    layers += [conv2d, nn.BatchNorm2d(v), nn.ReLU(inplace=True)]
                else:
                    layers += [conv2d, nn.ReLU(inplace=True)]
                in_channels = v
        return nn.Sequential(*layers)

# Load model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = CSRNet().to(device)
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model.eval()

# Image preprocessing
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485,0.456,0.406], std=[0.229,0.224,0.225])
])

# Load crowd image
image_path = "yourimage.jpg"  # Replace with your image
img = cv2.imread(image_path)
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img_resized = cv2.resize(img_rgb, (512, 512))  # resize for consistency

tensor_img = transform(img_resized).unsqueeze(0).to(device)

# Run inference
with torch.no_grad():
    density_map = model(tensor_img).cpu().numpy()[0,0]

# Estimate crowd count
crowd_count = int(density_map.sum())
print(f"Estimated number of people: {crowd_count}")

# Show density map
density_map_norm = (density_map / density_map.max() * 255).astype(np.uint8)
density_map_color = cv2.applyColorMap(density_map_norm, cv2.COLORMAP_JET)

cv2.imshow("Crowd Image", img)
cv2.imshow("Density Map", density_map_color)
cv2.waitKey(0)
cv2.destroyAllWindows()