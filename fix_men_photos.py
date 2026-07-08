import os
import shutil
import re

pics_dir = "/Users/ammarmustafa/Downloads/PICS"
dest_dir = "/Users/ammarmustafa/Rishtaroom/rishta-room-explorer/src/assets"

files = [
    "Screenshot 2026-07-09 at 1.10.46 AM.png",
    "Screenshot 2026-07-09 at 1.11.59 AM.png",
    "Screenshot 2026-07-09 at 1.12.44 AM.png",
    "Screenshot 2026-07-09 at 1.13.55 AM.png",
    "Screenshot 2026-07-09 at 1.15.20 AM.png",
    "Screenshot 2026-07-09 at 1.16.39 AM.png",
    "Screenshot 2026-07-09 at 1.17.57 AM.png",
    "Screenshot 2026-07-09 at 1.18.19 AM.png",
    "Screenshot 2026-07-09 at 1.20.06 AM.png",
    "Screenshot 2026-07-09 at 1.20.29 AM.png",
    "Screenshot 2026-07-09 at 1.20.58 AM.png",
    "WhatsApp Image 2026-07-09 at 00.04.53 (1).jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.53 (2).jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.54 (1).jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.54 (2).jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.54.jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.55 (1).jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.55.jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.56 (1).jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.56 (2).jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.56.jpeg"
]

# Accurate groups discovered by subagent
groups = [
    [0, 1],       # Person 1 (Blue shirt)
    [2, 3],       # Person 2 (Black kurta)
    [4, 5],       # Person 3 (Bearded black kurta)
    [8, 9],       # Person 4 (Striped shirt)
    [10, 10],     # Person 5 (Smiling man)
    [11, 12],     # Person 6 (Army officer)
    [13, 15],     # Person 7 (Young man black shirt)
    [14, 17],     # Person 8 (Man in white shirt/vest)
    [18, 19],     # Person 9 (Bald man)
    [16, 20],     # Person 10 (Man with mustache)
    [6, 7],       # Person 11 (Other crop of bearded man)
    [0, 1]        # Person 12 (Re-use blue shirt for last one to fill)
]

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

# Clean up again
for var_name, file_name in names:
    for ext in ['.jpg', '.jpeg', '.png']:
        try: os.remove(os.path.join(dest_dir, f"{file_name}-passport{ext}"))
        except: pass
        try: os.remove(os.path.join(dest_dir, f"{file_name}-full{ext}"))
        except: pass

import_statements = ""

for i, (var_name, file_name) in enumerate(names):
    passport_idx = groups[i][0]
    full_idx = groups[i][1]
    
    passport_src = os.path.join(pics_dir, files[passport_idx])
    full_src = os.path.join(pics_dir, files[full_idx])
    
    ext1 = os.path.splitext(passport_src)[1]
    ext2 = os.path.splitext(full_src)[1]
    
    shutil.copy(passport_src, os.path.join(dest_dir, f"{file_name}-passport{ext1}"))
    shutil.copy(full_src, os.path.join(dest_dir, f"{file_name}-full{ext2}"))
    
    import_statements += f'import {var_name}Passport from "@/assets/{file_name}-passport{ext1}";\n'
    import_statements += f'import {var_name}Full from "@/assets/{file_name}-full{ext2}";\n'

file_path = "/Users/ammarmustafa/Rishtaroom/rishta-room-explorer/src/routes/index.tsx"
with open(file_path, "r") as f:
    content = f.read()

for var_name, file_name in names:
    content = re.sub(rf'import {var_name}Passport from .*\n', '', content)
    content = re.sub(rf'import {var_name}Full from .*\n', '', content)

last_import_idx = content.rfind('import ')
if last_import_idx != -1:
    end_of_line = content.find('\n', last_import_idx)
    content = content[:end_of_line+1] + import_statements + content[end_of_line+1:]

with open(file_path, "w") as f:
    f.write(content)

print("Images cleanly matched and paired!")
