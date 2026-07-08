#!/bin/bash
PICS_DIR="/Users/ammarmustafa/Downloads/PICS"
OUT_FILE="ocr_results.txt"

> "$OUT_FILE"

for img in "$PICS_DIR"/*.jpeg; do
    echo "Processing $img" >> "$OUT_FILE"
    tesseract "$img" stdout >> "$OUT_FILE" 2>/dev/null
    echo -e "\n---END---\n" >> "$OUT_FILE"
done

echo "OCR complete. Check $OUT_FILE"
