import os
import pytesseract
from PIL import Image
import json

pics_dir = "/Users/ammarmustafa/Downloads/PICS"
out_data = {}

for f in sorted(os.listdir(pics_dir)):
    if f.lower().endswith((".jpeg", ".jpg", ".png")):
        path = os.path.join(pics_dir, f)
        try:
            with Image.open(path) as img:
                text = pytesseract.image_to_string(img)
                out_data[f] = text
        except Exception as e:
            out_data[f] = f"ERROR: {e}"

with open("ocr_results.json", "w") as f:
    json.dump(out_data, f, indent=2)

print("OCR complete. Results saved to ocr_results.json")
