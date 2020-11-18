import multiprocessing, time
from gensim.models.fasttext import FastText as FT_gensim

workers = multiprocessing.cpu_count()

corpus_file = 'extracted.txt'

model = FT_gensim(size = 300)

# build the vocabulary
model.build_vocab(corpus_file = corpus_file)

# train the model
model.train(corpus_file = corpus_file, size = 300, window = 5, min_count = 10, iter = 20, threads = workers, min_n = 5, max_n = 8, total_examples=model.corpus_count, total_words=model.corpus_total_words, epochs=model.epochs)

print(model.similarity("гончар", "герої"))
print(model.most_similar('гончар'))