import sys, zipfile, re, html, os
for p in sys.argv[1:-1]:
    x = zipfile.ZipFile(p).read('word/document.xml').decode('utf-8')
    paras = re.findall(r'<w:p[ >].*?</w:p>', x, re.S)
    out = [html.unescape(''.join(re.findall(r'<w:t[^>]*>(.*?)</w:t>', q))) for q in paras]
    open(sys.argv[-1] + '/' + os.path.basename(p) + '.txt', 'w', encoding='utf-8').write('\n'.join(l for l in out if l.strip()))
