#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# load tempfile for temporary dir creation
import sys, os, tempfile
# load misc utils
import json
# import uuid
from werkzeug.utils import secure_filename
import logging
# logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
# logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.DEBUG)
logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.ERROR)

# load libraries for string proccessing
import re, string

# load libraries for API proccessing
from flask import Flask, jsonify, flash, request, Response, redirect, url_for, abort, render_template

# A Flask extension for handling Cross Origin Resource Sharing (CORS), making cross-origin AJAX possible.
from flask_cors import CORS

import gensim
from gensim.models import Word2Vec as WV_model

__author__ = "Kyrylo Malakhov <malakhovks@nas.gov.ua> and Vitalii Velychko <aduisukr@gmail.com>"
__copyright__ = "Copyright (C) 2020 Kyrylo Malakhov <malakhovks@nas.gov.ua> and Vitalii Velychko <aduisukr@gmail.com>"

app = Flask(__name__)
CORS(app)

"""
Limited the maximum allowed payload to 16 megabytes.
If a larger file is transmitted, Flask will raise an RequestEntityTooLarge exception.
"""
# app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

"""
Set the secret key to some random bytes. Keep this really secret!
How to generate good secret keys.
A secret key should be as random as possible. Your operating system has ways to generate pretty random data based on a cryptographic random generator. Use the following command to quickly generate a value for Flask.secret_key (or SECRET_KEY):
$ python -c 'import os; print(os.urandom(16))'
b'_5#y2L"F4Q8z\n\xec]/'
"""
# app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
app.secret_key = os.urandom(42)

# Load and init word2vec model
word_vectors_fiction = gensim.models.KeyedVectors.load_word2vec_format('./models/fiction.lowercased.lemmatized.word2vec.300d')
word_vectors_fiction.init_sims(replace=True)

model = WV_model.load('./models/honchar.lowercased.lemmatized.word2vec.FINAL.500d')
# model.wv.save_word2vec_format('./models/honchar.lowercased.lemmatized.word2vec.GOOD.500d')
# switch to the KeyedVectors instance
word_vectors_honchar = model.wv
word_vectors_honchar.init_sims(replace=True)
del model

models_array = []
models_array.append(word_vectors_honchar)
models_array.append(word_vectors_fiction)

models = {
    "models": {
        "word2vec":[
            {
                "description":"Використовується нейронна векторна модель представлення слів Гончар (алгоритм word2vec word embeddings) розмірністю 500d. Сутність - слово, лематизовано, приведено до нижнього регистру. Параметри word2vec: -size 500 -negative 5 -window 5 -threads 24 -min_count 10 -iter 20.",
                "name":"honchar.lowercased.lemmatized.word2vec.FINAL.500d",
                "link":"",
                "language": "ua",
                "index": 0
            },
            {
                "description":"Використовується нейронна векторна модель представлення слів Художня література (алгоритм word2vec word embeddings) розмірністю 300d. Сутність - слово, лематизовано, приведено до нижнього регистру. Параметри word2vec: -size 300 -negative 7 -window 4 -threads 6 -min_count 10 -iter 5 -alpha 0.030",
                "default": False,
                "name":"fiction.lowercased.lemmatized.word2vec.300d",
                "link":"https://lang.org.ua/static/downloads/models/fiction.lowercased.lemmatized.word2vec.300d.bz2",
                "language": "ua",
                "index": 1
            }
        ]
    }
}

def getExistsWordsInModel(words, keyed_vectors):
    exists = []
    for word in words:
        if word in keyed_vectors.vocab:
            exists.append(word)
    return exists

@app.route('/')
def index():
    return Response(render_template('index.html'), mimetype='text/html')

# * models list
@app.route('/models')
def get_models_list():
    return jsonify(models)

# * computational endpoints
@app.route('/word2vec/similarity', methods=['POST'])
def similarity():
    if not request.json or not 'word_1' in request.json or not 'word_2' in request.json:
        abort(400)
    try:
        if request.args.get('model', type = int):
            cosine_similarity = models_array[request.args.get('model', type = int)].similarity(request.json['word_1'], request.json['word_2'])
        else:
            cosine_similarity = models_array[0].similarity(request.json['word_1'], request.json['word_2'])
        return jsonify({"similarity": cosine_similarity.item()})
    except KeyError:
        return jsonify({"Error": {"KeyError": "One of the words is missing in the word2vec model"}})

@app.route('/word2vec/similar', methods=['POST'])
def find_similar():
    if not request.json or not 'word' in request.json:
        abort(400)
    n = 100
    try:
        if request.args.get('model', type = int):
            cosine_similar = models_array[request.args.get('model', type = int)].most_similar(request.json['word'], topn=n)
        else:
            cosine_similar = models_array[0].most_similar(request.json['word'], topn=n)
        return jsonify({"similar": cosine_similar})
    except KeyError:
        return jsonify({"Error": {"KeyError": "Word " + request.json['word'] + " does not exist in the word2vec model" , "Word": request.json['word']}})

@app.route('/word2vec/center', methods=['POST'])
def find_lexical_cluster_center():
    if not request.json or not 'words' in request.json:
        abort(400)
    n = 100
    try:
        if request.args.get('model', type = int):
            cosine_center = models_array[request.args.get('model', type = int)].most_similar(positive=getExistsWordsInModel(request.json['words'], word_vectors_honchar), topn=n)
        else:
            cosine_center = models_array[0].most_similar(positive=getExistsWordsInModel(request.json['words'], word_vectors_honchar), topn=n)
        return jsonify({"center" : cosine_center})
    except KeyError:
        return jsonify({"Error": {"KeyError": "Some words does not exist in the word2vec model" , "Words": request.json['words']}})

if __name__ == '__main__':
    # default port = 5000
    app.run(host = '0.0.0.0')
    # app.run(host = '0.0.0.0', port=3000)