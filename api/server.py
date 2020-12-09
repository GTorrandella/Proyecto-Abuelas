from flask import Flask, json, jsonify
from flask.globals import request
from flask.wrappers import Response
from flask_cors import CORS

from connector import Connector

app = Flask(__name__)
CORS(app)
db_connector = Connector()

@app.route('/actividad', methods = ['GET'])
def api_logger():
    if 'Content-Type' in request.headers.keys():
        return Response(status = 200)                
    else:
        return Response(status = 400)

@app.route('/multimedia/<int:id>', methods = ['GET'])
def multimedia_by_id(id):
    try:
        return db_connector.getMultimediaByKey(id)
    except:
        return Response(400)

if __name__ == "__main__":
    app.run(host='0.0.0.0')