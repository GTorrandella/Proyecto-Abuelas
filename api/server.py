from flask import Flask, json, jsonify
from flask.globals import request
from flask.wrappers import Response
from flask_cors import CORS

from connector import Connector

app = Flask(__name__)
CORS(app)
db_connector = Connector()

@app.route('/actividad/<int:id>', methods = ['GET'])
def actividad_by_id(id):
    try:
        return db_connector.getActivityByKey(id)
    except:
        return Response(400)

@app.route('/actividad', methods = ['GET'])
def actividad_by_multimedia_id():
    try:
        multimedia = request.args.get('multimedia')
        return db_connector.getActivityByMultimediaKey(multimedia)
    except:
        return Response(400)


@app.route('/multimedia/<int:id>', methods = ['GET'])
def multimedia_by_id(id):
    try:
        return db_connector.getMultimediaByKey(id)
    except:
        return Response(400)

@app.route('/multimedia', methods = ['GET'])
def multimedia_by_actividad_id():
    try:
        actividad = request.args.get('actividad')
        return db_connector.getMultimediaByActivityKey(actividad)
    except:
        return Response(400)

if __name__ == "__main__":
    app.run(host='0.0.0.0')