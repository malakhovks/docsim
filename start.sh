#!/usr/bin/env bash
service nginx start
uwsgi --ini ./deploy/uwsgi.ini