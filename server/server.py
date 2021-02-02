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
from flask import Flask, jsonify, flash, request, Response, redirect, url_for, abort, render_template, send_from_directory

# A Flask extension for handling Cross Origin Resource Sharing (CORS), making cross-origin AJAX possible.
from flask_cors import CORS

import gensim

__author__ = "Kyrylo Malakhov <malakhovks@nas.gov.ua> and Vitalii Velychko <aduisukr@gmail.com> and Alexander Shchurov <alexandershchurov@gmail.com>"
__copyright__ = "Copyright (C) 2020 Kyrylo Malakhov <malakhovks@nas.gov.ua> and Vitalii Velychko <aduisukr@gmail.com> and Alexander Shchurov <alexandershchurov@gmail.com>"

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

config_flag = 'ua'

# * Load models from config file to memory
# ! Caution: Loading a large number of models requires a significant amount of RAM
try:
    with open('./config.models.simple.json') as config_file:
        models = json.load(config_file)
except IOError as e:
    logging.error(e, exc_info=True)
if 'word2vec' not in models["models"]:
    raise ValueError("No word2vec models in given config file (config.models.simple.json)")
else:
    models_array = []
    models_word2vec = models["models"]["word2vec"]
    for model_index, model in enumerate(models_word2vec):
        # Load and init word2vec model
        word_vectors = gensim.models.KeyedVectors.load_word2vec_format(model['link'])
        word_vectors.init_sims(replace=True)
        models_array.append(word_vectors)
    del word_vectors

# * Load models-en from config file to memory
try:
    with open('./config.models.simple.en.json') as config_file_en:
        models_en = json.load(config_file_en)
except IOError as e:
    logging.error(e, exc_info=True)

"""
from gensim.models import Word2Vec as WV_model
model = WV_model.load('./models/suhomlinskyy.lowercased.lemmatized.word2vec.500d')
* For word2vec2tensor, the model should be in "word2vec_format" (this isn't same as result of .save())
* You need to call model.wv.save_word2vec_format(...), and after this, use word2vec2tensor on result file.
model.wv.save_word2vec_format('suhomlinskyy.lowercased.lemmatized.word2vec.500d')
# * switch to the KeyedVectors instance
word_vectors_suhomlinskyy = model.wv
word_vectors_suhomlinskyy.init_sims(replace=True)
del model
"""

def getExistsWordsInModel(words, keyed_vectors):
    exists = []
    for word in words:
        if word in keyed_vectors.vocab:
            exists.append(word)
    return exists

@app.route('/')
def index():
    return Response(render_template('index-ukr.html'), mimetype='text/html')

# let's Angular do the routs job
@app.route('/<path:page>')
def fallback(page):
    global config_flag
    if 'ua' in page:
        config_flag = 'ua'
        return render_template('index-ukr.html')
    if 'en' in page:
        config_flag = 'en'
        return render_template('index-eng.html')

# special file handlers
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

# serve static images about-developers
@app.route('/assets/img/<path:path>')
def send_img(path):
    if request.args.get('lang') == 'ukr':
        return send_from_directory('static/ukr/img', path)
    if request.args.get('lang') == 'eng':
        return send_from_directory('static/eng/img', path)
    return send_from_directory('static/ukr/img', path)

# serve static images about-sources
@app.route('/assets/sources-logos/<path:path>')
def send_logos(path):
    if request.args.get('lang') == 'ukr':
        return send_from_directory('static/ukr/sources-logos', path)
    if request.args.get('lang') == 'eng':
        return send_from_directory('static/eng/sources-logos', path)
    return send_from_directory('static/ukr/sources-logos', path)

# * models list
@app.route('/api/models')
def get_models_list():
    if config_flag == 'ua':
        return jsonify(models)
    if config_flag == 'en':
        return jsonify(models_en)
    # return jsonify(models)

# * computational endpoints
@app.route('/api/word2vec/similarity', methods=['POST'])
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

@app.route('/api/word2vec/similar', methods=['POST'])
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

@app.route('/api/word2vec/center', methods=['POST'])
def find_lexical_cluster_center():
    if not request.json or not 'words' in request.json:
        abort(400)
    n = 100
    try:
        if request.args.get('model', type = int):
            cosine_center = models_array[request.args.get('model', type = int)].most_similar(positive=getExistsWordsInModel(request.json['words'], models_array[request.args.get('model', type = int)]), topn=n)
        else:
            cosine_center = models_array[0].most_similar(positive=getExistsWordsInModel(request.json['words'], models_array[0]), topn=n)
        return jsonify({"center" : cosine_center})
    except KeyError:
        return jsonify({"Error": {"KeyError": "Some words does not exist in the word2vec model" , "Words": request.json['words']}})

if __name__ == '__main__':
    # default port = 5000
    app.run(host = '0.0.0.0')
    # app.run(host = '0.0.0.0', port=3000)