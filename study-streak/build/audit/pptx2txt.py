import sys, zipfile, re, html
for path in sys.argv[1:-1]:
    out = sys.argv[-1] + '/' + __import__('os').path.basename(path).rsplit('.',1)[0] + '.txt'
    z = zipfile.ZipFile(path)
    slides = sorted([n for n in z.namelist() if re.match(r'ppt/slides/slide\d+\.xml$', n)], key=lambda n:int(re.findall(r'\d+',n)[0]))
    with open(out,'w',encoding='utf-8') as f:
        for n in slides:
            x = z.read(n).decode('utf-8')
            paras = re.findall(r'<a:p>(.*?)</a:p>', x, re.S)
            lines = [html.unescape(''.join(re.findall(r'<a:t>(.*?)</a:t>', p))).strip() for p in paras]
            lines = [l for l in lines if l]
            f.write('## ' + n.split('/')[-1] + '\n' + '\n'.join(lines) + '\n')
