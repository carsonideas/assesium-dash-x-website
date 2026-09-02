from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/assesium-work/Assesium.com-unified/client/public/assesium-a-favicon.webp')
output = Path('/home/ubuntu/assesium-work/Assesium.com-unified/client/public/favicon.ico')
image = Image.open(source).convert('RGBA')
image.save(output, sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
print(output)
