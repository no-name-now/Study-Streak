"""Extract text from every PDF in a folder into <outdir>/<name>.txt using pypdf.
Usage: python pdf2txt.py <pdf-folder> <outdir>
Prints chars per file so image-only PDFs (near 0 chars) are easy to spot; use pdfimg.py for those.
"""
import sys, os
from pypdf import PdfReader

src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
for f in sorted(os.listdir(src)):
    if not f.lower().endswith('.pdf'):
        continue
    try:
        r = PdfReader(os.path.join(src, f))
        parts = []
        for i, p in enumerate(r.pages, 1):
            parts.append(f'\n--- page {i} ---\n' + (p.extract_text() or ''))
        txt = ''.join(parts)
    except Exception as e:
        txt = ''
        print('ERR', f, e)
    open(os.path.join(out, f[:-4] + '.txt'), 'w', encoding='utf-8').write(txt)
    print(f'{f}: pages={len(r.pages)} chars={len(txt)}')
