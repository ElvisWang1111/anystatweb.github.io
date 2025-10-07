from PIL import Image
img = Image.open(r'E:\Desktop\Anystat_doc_web.github.io\docs1\_static\logo.png')
# 裁剪空白（粗糙方法：先自动裁切透明边）
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)
# img = img.resize((int(img.width * 128 / img.height), 128), Image.LANCZOS)  # 目标高度 48
img.save('icon.png')
