from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
public = root / 'client' / 'public'
source = Image.open(public / 'assesium-a-favicon.png').convert('RGBA')
source.thumbnail((64, 64), Image.Resampling.LANCZOS)
canvas = Image.new('RGBA', (64, 64), (0, 0, 0, 0))
left = (64 - source.width) // 2
top = (64 - source.height) // 2
canvas.alpha_composite(source, (left, top))
canvas.save(public / 'assesium-a-favicon.png', optimize=True)
canvas.save(public / 'apple-touch-icon.png', optimize=True)
