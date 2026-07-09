import os
import shutil
import re

pics_dir = "/Users/ammarmustafa/Downloads/PICS"
dest_dir = "/Users/ammarmustafa/Rishtaroom/rishta-room-explorer/src/assets"

files = [
    "Screenshot 2026-07-09 at 11.05.29 AM.png",
    "Screenshot 2026-07-09 at 11.05.42 AM.png",
    "Screenshot 2026-07-09 at 11.08.38 AM.png",
    "Screenshot 2026-07-09 at 11.08.44 AM.png",
    "Screenshot 2026-07-09 at 11.09.02 AM.png",
    "Screenshot 2026-07-09 at 11.09.12 AM.png",
    "Screenshot 2026-07-09 at 11.09.42 AM.png",
    "Screenshot 2026-07-09 at 11.09.48 AM.png",
    "WhatsApp Image 2026-07-09 at 00.04.59 (1).jpeg",
    "WhatsApp Image 2026-07-09 at 00.04.59 (2).jpeg",
    "WhatsApp Image 2026-07-09 at 00.05.00 (1).jpeg",
    "WhatsApp Image 2026-07-09 at 00.05.00.jpeg",
    "WhatsApp Image 2026-07-09 at 00.05.03 (1).jpeg",
    "WhatsApp Image 2026-07-09 at 00.05.04 (1).jpeg",
    "WhatsApp Image 2026-07-09 at 00.05.04.jpeg",
    "WhatsApp Image 2026-07-09 at 00.05.05.jpeg",
    "download-1.jpg",
    "download.jpg"
]

groups = [
    [0, 1],       # Person 1 (Black dress, red dupatta)
    [2, 3],       # Person 2 (Brown shirt)
    [4, 5],       # Person 3 (Light blue dress)
    [6, 7],       # Person 4 (Beige/brown shirt)
    [8, 9],       # Person 5 (Green shirt)
    [11, 10],     # Person 6 (Black abaya) -> 11 is passport, 10 is full
    [12, 14],     # Person 7 (Pink shirt) -> 12 is passport, 14 is full
    [13, 15],     # Person 8 (Mustard shirt) -> 13 is passport, 15 is full
    [17, 16],     # Person 9 (Purple shirt) -> 17 is passport, 16 is full
    [0, 1],       # Person 10 (Reuse 1)
    [2, 3],       # Person 11 (Reuse 2)
    [4, 5]        # Person 12 (Reuse 3)
]

names = [
    ("ayeshaNoor", "ayesha-noor"),
    ("hiraKhan", "hira-khan"),
    ("fatimaAli", "fatima-ali"),
    ("mahnoorAhmed", "mahnoor-ahmed"),
    ("sanaQureshi", "sana-qureshi"),
    ("iqraJaved", "iqra-javed"),
    ("laibaHassan", "laiba-hassan"),
    ("zoyaMalik", "zoya-malik"),
    ("emanRaza", "eman-raza"),
    ("alinaSheikh", "alina-sheikh"),
    ("maryamAslam", "maryam-aslam"),
    ("areebaTariq", "areeba-tariq")
]

# Delete existing images for women to avoid duplicates with different extensions
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

last_import_idx = content.rfind('import logo')
if last_import_idx != -1:
    end_of_line = content.find('\n', last_import_idx)
    content = content[:end_of_line+1] + import_statements + content[end_of_line+1:]

with open(file_path, "w") as f:
    f.write(content)

print("Updated women photos and index.tsx successfully!")
