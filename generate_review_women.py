import os
import base64

pics_dir = "/Users/ammarmustafa/Downloads/PICS"
files = [f for f in os.listdir(pics_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
files.sort()

html = "<html><body style='background: white;'>"
html += "<h1>Women PICS Directory</h1>"
html += "<div style='display: flex; flex-wrap: wrap; gap: 20px;'>"

for i, f in enumerate(files):
    path = os.path.join(pics_dir, f)
    with open(path, "rb") as img_file:
        b64 = base64.b64encode(img_file.read()).decode('utf-8')
    ext = os.path.splitext(f)[1][1:].lower()
    if ext == 'jpg': ext = 'jpeg'
    
    html += f"<div style='border: 1px solid black; padding: 10px; width: 300px;'>"
    html += f"<p><strong>[{i}]</strong> {f}</p>"
    html += f"<img src='data:image/{ext};base64,{b64}' style='max-width: 100%; max-height: 400px; object-fit: contain;'>"
    html += "</div>"

html += "</div></body></html>"

with open("/Users/ammarmustafa/Rishtaroom/rishta-room-explorer/review_women.html", "w") as out:
    out.write(html)

print("Generated review_women.html")
