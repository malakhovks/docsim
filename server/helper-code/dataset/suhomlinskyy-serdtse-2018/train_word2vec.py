from __future__ import unicode_literals

import multiprocessing, time
from gensim.models import Word2Vec
from gensim.models import Word2Vec as WV_model
from gensim.models.word2vec import LineSentence

from gensim import utils

class MyCorpus(object):
    """An interator that yields sentences (lists of str)."""

    def __iter__(self):
        corpus_path = './extracted_lemmatized.txt'
        for line in open(corpus_path):
            # assume there's one document per line, tokens separated by whitespace
            yield utils.simple_preprocess(line)

# inp = "extracted.txt"

sentences = MyCorpus()

out_model = "../../../models/suhomlinskyy.lowercased.lemmatized.word2vec.500d"

size = 500 # size is the dimensionality of the feature vectors.

window = 4 # window is the maximum distance between the current and predicted word within a sentence.

sg = 1 # By default (sg=0), CBOW is used. Otherwise (sg=1), skip-gram is employed.

# cbow_mean = 1 # cbow_mean = if 0, use the sum of the context word vectors. If 1 (default), use the mean. Only applies when cbow is used.

sample = 1e-5 # sample = threshold for configuring which higher-frequency words are randomly downsampled; default is 1e-3, useful range is (0, 1e-5).

negativeSampling = 7 # negative = if > 0, negative sampling will be used, the int for negative specifies how many “noise words” should be drawn (usually between 5-20). Default is 5. If set to 0, no negative samping is used.

hs = 0 # hs = if 1, hierarchical softmax will be used for model training. If set to 0 (default), and negative is non-zero, negative sampling will be used.

iter = 10

min_count = 10

workers = multiprocessing.cpu_count()

start = time.time()

# model = Word2Vec(LineSentence(inp), sg = sg, size = size, window = window, workers = workers, negative = negativeSampling, iter = iter, min_count = min_count, hs = hs, sample = sample)
model = Word2Vec(sentences = sentences, sg = sg, size = size, window = window, workers = workers, negative = negativeSampling, iter = iter, min_count = min_count, hs = hs, sample = sample)

# trim unneeded model memory = use (much) less RAM
model.init_sims(replace=True)

print(time.time()-start)

sim = model.wv.similarity('сухомлинський', 'комуністичний')
print(sim)
s = model.wv.most_similar('сухомлинський')
print(s)
m = model.wv.most_similar('василь')
print(m)
lc = model.wv.most_similar(positive=['сухомлинський', 'комуністичний'])
print(lc)

model.save(out_model)

# model500 = WV_model.load('../models/honchar.lowercased.lemmatized.word2vec.FINAL.500d')
# model500.init_sims(replace=True)
# print(model500.wv.most_similar('гончар'))