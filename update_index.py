import re

file_path = "src/routes/index.tsx"
with open(file_path, "r") as f:
    content = f.read()

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

import_statements = ""
for var_name, file_name in names:
    import_statements += f'import {var_name}Passport from "@/assets/{file_name}-passport.jpg";\n'
    import_statements += f'import {var_name}Full from "@/assets/{file_name}-full.jpg";\n'

last_import_idx = content.rfind('.jpg";')
if last_import_idx != -1:
    end_of_line = content.find('\n', last_import_idx)
    content = content[:end_of_line+1] + import_statements + content[end_of_line+1:]

for var_name, file_name in names:
    pattern = re.compile(r'image:\s*' + var_name + r'\s*,')
    replacement = f'image: {var_name}Passport, detailImage: {var_name}Full,'
    content = pattern.sub(replacement, content)

with open(file_path, "w") as f:
    f.write(content)

print("Updated index.tsx")
