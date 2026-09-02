from pathlib import Path
from PIL import Image
import numpy as np

source = Path('/home/ubuntu/upload/pasted_file_DdxniL_image.png')
out_png = Path('/home/ubuntu/assesium-work/Assesium.com-unified/client/public/assesium-a-favicon.png')
out_webp = Path('/home/ubuntu/assesium-work/Assesium.com-unified/client/public/assesium-a-favicon.webp')
out_ico = Path('/home/ubuntu/assesium-work/Assesium.com-unified/client/public/favicon.ico')

image = Image.open(source).convert('RGBA')
rgb = np.asarray(image, dtype=np.int16)[:, :, :3]
r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
# The supplied image has a baked gray/white checkerboard. The logo is saturated orange.
orange = (r > 185) & ((r - g) > 35) & ((g - b) > 35) & (g < 205)
ys, xs = np.where(orange)
if len(xs) == 0:
    raise RuntimeError('Could not isolate orange logo pixels')

# Preserve a small antialiased edge while making all checkerboard pixels transparent.
x0, x1 = max(0, xs.min() - 3), min(rgb.shape[1], xs.max() + 4)
y0, y1 = max(0, ys.min() - 3), min(rgb.shape[0], ys.max() + 4)
crop_rgb = rgb[y0:y1, x0:x1]
crop_mask = orange[y0:y1, x0:x1]
alpha = np.where(crop_mask, 255, 0).astype(np.uint8)
rgba = np.dstack([np.clip(crop_rgb, 0, 255).astype(np.uint8), alpha])
result = Image.fromarray(rgba, 'RGBA')
result.save(out_png, optimize=True)
result.save(out_webp, lossless=True, method=6)
result.save(out_ico, sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
print('saved', out_png, result.size)
print('saved', out_webp)
print('saved', out_ico)
