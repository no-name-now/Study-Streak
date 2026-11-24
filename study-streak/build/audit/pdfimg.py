import sys, re, os, zlib, struct
pdf = open(sys.argv[1], 'rb').read(); out = sys.argv[2]; os.makedirs(out, exist_ok=True)
n = 0
for m in re.finditer(rb'(\d+) 0 obj\s*<<(.*?)>>\s*stream\r?\n', pdf, re.S):
    d = m.group(2)
    if b'/Subtype/Image' not in d.replace(b' ',b''): continue
    ln = re.search(rb'/Length (\d+)(?! 0 R)', d); start = m.end()
    if ln: data = pdf[start:start+int(ln.group(1))]
    else: data = pdf[start:pdf.index(b'endstream', start)]
    w = int(re.search(rb'/Width (\d+)', d).group(1)); h = int(re.search(rb'/Height (\d+)', d).group(1))
    n += 1; name = f'{out}/img{n:03d}_obj{m.group(1).decode()}_{w}x{h}'
    if b'DCTDecode' in d: open(name + '.jpg', 'wb').write(data)
    elif b'FlateDecode' in d:
        raw = zlib.decompress(data); cs = b'RGB' if b'DeviceRGB' in d else b'G'
        ch = 3 if cs == b'RGB' else 1
        if len(raw) != w*h*ch: print('skip', name, len(raw), w*h*ch); continue
        rows = b''.join(b'\x00' + raw[i*w*ch:(i+1)*w*ch] for i in range(h))
        def chunk(t, b): return struct.pack('>I', len(b)) + t + b + struct.pack('>I', zlib.crc32(t + b) & 0xffffffff)
        png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 2 if ch == 3 else 0, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(rows)) + chunk(b'IEND', b'')
        open(name + '.png', 'wb').write(png)
    else: print('other filter', name, d[:80])
print(n, 'images')
