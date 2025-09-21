import cv2
import numpy as np
from lwcc import LWCC
import matplotlib.pyplot as plt

def overlay_density_map(img_bgr, density, alpha=0.5):
    dm = density.copy()
    dm -= dm.min()
    if dm.max() > 0:
        dm = dm / dm.max()
    dm_uint8 = (dm * 255).astype('uint8')
    dm_resized = cv2.resize(dm_uint8, (img_bgr.shape[1], img_bgr.shape[0]))
    dm_color = cv2.applyColorMap(dm_resized, cv2.COLORMAP_JET)
    overlay = cv2.addWeighted(dm_color, alpha, img_bgr, 1 - alpha, 0)
    return overlay

if __name__ == "__main__":
    image_path = "yourimage.jpg"   # <-- replace with your image

    # Pick weights based on density:
    # - SHB for sparse crowds
    # - SHA or QNRF for dense crowds
    model_name = "DM-Count"
    model_weights = "QNRF"   # try "SHA", "QNRF", or "SHB" and compare

    # Get count + density (LWCC returns float count and a 2D density array)
    count, density_map = LWCC.get_count(image_path, model_name=model_name,
                                       model_weights=model_weights,
                                       return_density=True)

    print(f"Estimated people (DM-Count, weights={model_weights}): {count:.1f}")

    # visualization
    img = cv2.imread(image_path)
    overlay = overlay_density_map(img, density_map)
    cv2.imshow("Overlay", overlay)
    cv2.imshow("Original", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

