#!/usr/bin/env python
# -*- coding: utf-8 -*-

# load tempfile for temporary dir creation
import sys, os, time, tempfile, shutil, traceback

import pandas as pd

# load libraries for string proccessing
import re, string, codecs
from chardet.universaldetector import UniversalDetector

# for displacy
import json

# load libraries for XML proccessing
import xml.etree.ElementTree as ET

import logging
# logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
# logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.DEBUG)
logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.ERROR)

stopwords_ua = pd.read_csv("stopwords_ua.txt", header=None, names=['stopwords'])
stop_words_ua = list(stopwords_ua.stopwords)
print(len(stop_words_ua))

def clean_text(text):
    # text = "".join([word for word in text if word not in string.punctuation])
    tokens = re.split('\W+', text)
    text = [word for word in tokens if word not in stop_words_ua and len(word) > 3]
    text = ' '.join(text)
    return text

# print(clean_text("видавців виготівників сс розповсюджувачів видавничої а продукції серія ві від відколи вище"))

# default text normalization
def normalization_default(raw_text):
    raw_text_list = []
    for line in raw_text.splitlines(True):
        # if line contains letters
        if re.search(r'[а-яА-Я0-9]+', line):
            """
            remove \n \r \r\n new lines and insert spaces
            \r = CR (Carriage Return) → Used as a new line character in Mac OS before X
            \n = LF (Line Feed) → Used as a new line character in Unix/Mac OS X
            \r\n = CR + LF → Used as a new line character in Windows
            """
            """
            \W pattern: When the LOCALE and UNICODE flags are not specified, matches any non-alphanumeric character;
            this is equivalent to the set [^a-zA-Z0-9_]. With LOCALE, it will match any character not in the set [0-9_], and not defined as alphanumeric for the current locale.
            If UNICODE is set, this will match anything other than [0-9_] plus characters classified as not alphanumeric in the Unicode character properties database.
            To remove all the non-word characters, the \W pattern can be used as follows:
            """
            # line = re.sub(r'\W', ' ', line, flags=re.I)
            # remove all non-words except punctuation
            # line = re.sub('[^\w.,;!?-]', ' ', line)
            # remove all words which contains number
            # line = re.sub(r'\w*\d\w*', ' ', line)
            # remove % symbol
            line = re.sub('%', ' ', line)
            # remove ° symbol
            line = re.sub('[°]', ' ', line)
            # 
            line = re.sub('[\n]', ' ', line)
            line = re.sub('[\r\n]', ' ', line)
            line = re.sub('[\r]', ' ', line)
            # 
            # remove tabs and insert spaces
            line = re.sub('[\t]', ' ', line)
            # remove all numbers
            line = re.sub(r'\d+','',line)
            # Replace multiple dots with space
            line = re.sub('\.\.+', ' ', line)
            # remove multiple spaces
            line = re.sub('\s\s+', ' ', line)
            # remove leading and ending spaces
            line = line.strip()
            # lowercase a string
            line = line.lower()
            line = clean_text(line)
            if re.search(r'[а-я]+', line):
                # line = clean_text(line)
                raw_text_list.append(line)
    # yet_raw_text = '\n'.join(raw_text_list)
    yet_raw_text = ' '.join(raw_text_list)
    return yet_raw_text

# remove XML predefined entities from text
def remove_xml_predefined_entities(raw_text):
    # remove all words which contains number
    raw_text = re.sub(r'&|>|<|_|"|\.\.+|\s\s+', ' ', raw_text)
    raw_text = re.sub(r'\.\.+', ' ', raw_text)
    raw_text = re.sub(r'\s\s+', ' ', raw_text)
    # remove leading and ending spaces
    clean_raw_text_without_xml_predefined_entities = raw_text.strip()
    return clean_raw_text_without_xml_predefined_entities

def ua_tokenizer(text,ua_stemmer=True,stop_words=[]):
    """ Tokenizer for Ukrainian language, returns only alphabetic tokens.
    
    Keyword arguments:
    text -- text for tokenize
    ua_stemmer -- if True use UkrainianStemmer for stemming words (default True)
    stop_words -- list of stop words (default [])
    """
    tokenized_list=[]
    text=re.sub(r"""['’"`�]""", '', text)
    text=re.sub(r"""([0-9])([\u0400-\u04FF]|[A-z])""", r"\1 \2", text)
    text=re.sub(r"""([\u0400-\u04FF]|[A-z])([0-9])""", r"\1 \2", text)
    text=re.sub(r"""[\-.,:+*/_]""", ' ', text)

    for word in nltk.word_tokenize(text):
        if word.isalpha():
            word=word.lower()
        if ua_stemmer is True:
            word=UkrainianStemmer(word).stem_word()
        if word not in stop_words:    
            tokenized_list.append(word)
    return tokenized_list

# text_bytes = get_bytes_from_pdf('/Users/MalahovKS/Documents/Velychko/2020/docsim-project/Supporting documentation/dataset/honchar/honchar_mails.pdf')

tree = ET.parse('./dataset/honchar/honchar_sentences_utf8.xml')
sentences = tree.getroot()

print(sentences)