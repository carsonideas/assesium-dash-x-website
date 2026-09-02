from pathlib import Path
from PIL import Image

root = Path('/home/ubuntu/assesium-work/Assesium.com-unified')
source = root / 'client/public/assesium-logo.png'
out_png = root / 'client/public/assesium-a-favicon.png'
out_ico = root / 'client/public/favicon.ico'

logo = Image.open(source).convert('RGBA')
# The orange A is the leftmost mark in the supplied Assesium wordmark.
mark = logo.crop((0, 35, 225, 270))
alpha = mark.getchannel('A')
bbox = alpha.getbbox()
if bbox:
    mark = mark.crop(bbox)

canvas_size = 64
padding = 7
scale = min((canvas_size - 2 * padding) / mark.width, (canvas_size - 2 * padding) / mark.height)
new_size = (max(1, round(mark.width * scale)), max(1, round(mark.height * scale)))
mark = mark.resize(new_size, Image.Resampling.LANCZOS)
canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
position = ((canvas_size - mark.width) // 2, (canvas_size - mark.height) // 2)
canvas.alpha_composite(mark, position)
canvas.save(out_png, optimize=True)
canvas.save(out_ico, sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print(out_png)
print(out_ico)
