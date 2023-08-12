import sys
import logging
 
sys.path.insert(0, '/var/www/HMweb.online/HMweb')
sys.path.insert(0, '/var/www/HMweb.online/venv/lib/python3.10/site-packages/')
 
# Set up logging
logging.basicConfig(stream=sys.stderr, level=logging.DEBUG)
 
# Import and run the Flask app
from HMweb import app as application
