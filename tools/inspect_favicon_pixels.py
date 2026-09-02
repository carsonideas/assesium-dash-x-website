from collections import Counter
from pathlib import Path
from PIL import Image

paths = [
    Path('/home/ubuntu/upload/pasted_file_DdxniL_image.png'),
    Path('/home/ubuntu/upload/jCpY5YqU6cLk8wEg3BKxPQ_1787047328553_na1fn_L2hvbWUvdWJ1bnR1L3RyYW5zcGFyZW50X3Byb2R1Y3RfbG9nbw.webp'),
]
for path in paths:
    image = Image.open(path).convert('RGBA')
    pixels = list(image.getdata())
    alpha = [p[3] for p in pixels]
    print(path.name, image.size, 'alpha_min', min(alpha), 'alpha_max', max(alpha), 'transparent', sum(a == 0 for a in alpha), 'opaque', sum(a == 255 for a in alpha))
    print('top_colors', Counter(pixels).most_common(12))
