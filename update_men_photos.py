import os
import shutil
import subprocess
import re

pics_dir = "/Users/ammarmustafa/Downloads/PICS"
dest_dir = "/Users/ammarmustafa/Rishtaroom/rishta-room-explorer/src/assets"

# 1. Collect all images in PICS
cropped_images = []
for f in sorted(os.listdir(pics_dir)):
    if f.lower().endswith((".jpeg", ".jpg", ".png")):
        path = os.path.join(pics_dir, f)
        cropped_images.append(path)

# 2. We have 12 men
names = [
    ("ahmedRaza", "ahmed-raza"),
    ("aliKhan", "ali-khan"),
    ("hamzaTariq", "hamza-tariq"),
    ("usmanSheikh", "usman-sheikh"),
    ("saadQureshi", "saad-qureshi"),
    ("bilalAhmed", "bilal-ahmed"),
    ("fahadIqbal", "fahad-iqbal"),
    ("danishAli", "danish-ali"),
    ("talhaNoor", "talha-noor"),
    ("ahsanJaved", "ahsan-javed"),
    ("zainMalik", "zain-malik"),
    ("hamidRaza", "hamid-raza")
]

# 3. Clean existing men photos in src/assets
for var_name, file_name in names:
    for ext in ['.jpg', '.jpeg', '.png']:
        try:
            os.remove(os.path.join(dest_dir, f"{file_name}-passport{ext}"))
        except: pass
        try:
            os.remove(os.path.join(dest_dir, f"{file_name}-full{ext}"))
        except: pass
        try:
            os.remove(os.path.join(dest_dir, f"{file_name}{ext}"))
        except: pass

# 4. Copy new files
img_idx = 0
for var_name, file_name in names:
    if img_idx < len(cropped_images):
        passport_src = cropped_images[img_idx]
        ext1 = os.path.splitext(passport_src)[1]
        shutil.copy(passport_src, os.path.join(dest_dir, f"{file_name}-passport{ext1}"))
    else:
        # Fallback if we run out of images: just reuse the first one to avoid broken links
        passport_src = cropped_images[0]
        ext1 = os.path.splitext(passport_src)[1]
        shutil.copy(passport_src, os.path.join(dest_dir, f"{file_name}-passport{ext1}"))
        
    if img_idx + 1 < len(cropped_images):
        full_src = cropped_images[img_idx + 1]
        ext2 = os.path.splitext(full_src)[1]
        shutil.copy(full_src, os.path.join(dest_dir, f"{file_name}-full{ext2}"))
    else:
        # Fallback if no full image
        full_src = passport_src
        ext2 = ext1
        shutil.copy(full_src, os.path.join(dest_dir, f"{file_name}-full{ext2}"))
        
    img_idx += 2

# 5. Update index.tsx imports
file_path = "/Users/ammarmustafa/Rishtaroom/rishta-room-explorer/src/routes/index.tsx"
with open(file_path, "r") as f:
    content = f.read()

import_statements = ""
img_idx = 0
for var_name, file_name in names:
    ext1 = os.path.splitext(cropped_images[img_idx])[1] if img_idx < len(cropped_images) else os.path.splitext(cropped_images[0])[1]
    ext2 = os.path.splitext(cropped_images[img_idx+1])[1] if img_idx+1 < len(cropped_images) else ext1
    
    import_statements += f'import {var_name}Passport from "@/assets/{file_name}-passport{ext1}";\n'
    import_statements += f'import {var_name}Full from "@/assets/{file_name}-full{ext2}";\n'
    img_idx += 2

for var_name, file_name in names:
    content = re.sub(rf'import {var_name}Passport from .*\n', '', content)
    content = re.sub(rf'import {var_name}Full from .*\n', '', content)
    content = re.sub(rf'import {var_name} from .*\n', '', content)

last_import_idx = content.rfind('import ')
if last_import_idx != -1:
    end_of_line = content.find('\n', last_import_idx)
    content = content[:end_of_line+1] + import_statements + content[end_of_line+1:]

with open(file_path, "w") as f:
    f.write(content)

print("Images copied and index.tsx imports updated!")
