import re, string, codecs

destination = './dataset/honchar/konspekt-results/honchar_sentences.xml'
with codecs.open(destination, encoding='cp1251') as f:
    cp1251_text = f.read()

path_to_utf8 = './dataset/honchar/honchar_sentences_utf8.xml'

with open(path_to_utf8, 'w+', errors='ignore') as f:
    f.write(cp1251_text)