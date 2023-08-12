import os
from flask import Flask, render_template, send_from_directory, request, url_for, flash, abort, redirect

app = Flask(__name__)


@app.route('/')
def index():
    """" Route de la page d'acceuil """
    return render_template('index.html')

@app.route('/thisSite/')
def thisSite():
    """" Route de la page de ce site """
    return render_template('thisSite.html')

@app.route('/contact_me/')
def contact_me():
    """" Route de la page de ce site """
    return render_template('contact_me.html')

if __name__ == '__main__':
   app.run(debug=True)