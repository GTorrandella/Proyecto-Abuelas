import mysql.connector

class Connector:

    def __init__(self):
        self._connection = mysql.connector.connect(
            user='root',
            password='pass',
            host='localhost',
            database='Test')
    
    def getMultimediaByKey(sefl, key):
        result = {}
        cursor = sefl._connection.cursor(dictionary=True)
        select_stmt = (
            "SELECT nombre, descripcion, archivo " 
            "FROM multimedia "
            "WHERE id = %(key)s"
        )
        cursor.execute(select_stmt, { 'key': key })
        result = next(cursor)
        cursor.close()
        return result
    
    def getMultimediaByActivityKey(sefl, key):
        result = {}
        cursor = sefl._connection.cursor(dictionary=True)
        select_stmt = (
            "SELECT nombre, descripcion, archivo, id " 
            "FROM multimedia "
            "WHERE id_actividad = %(key)s"
        )
        cursor.execute(select_stmt, { 'key': key })
        result = {'result': []}
        for element in cursor:
            result['result'].append(element)
        cursor.close()
        return result
    
    def getActivityByKey(sefl, key):
        result = {}
        cursor = sefl._connection.cursor(dictionary=True)
        select_stmt = (
            "SELECT * " 
            "FROM actividad "
            "WHERE id = %(key)s"
        )
        cursor.execute(select_stmt, { 'key': key })
        result = next(cursor)
        cursor.close()
        return result
    
    def getActivityByMultimediaKey(sefl, key):
        result = {}
        cursor = sefl._connection.cursor(dictionary=True)
        select_stmt = (
            "SELECT a.nombre, a.id " 
            "FROM actividad as a INNER JOIN multimedia as m "
            "WHERE m.id=%(key)s AND m.id_actividad = a.id"
        )
        cursor.execute(select_stmt, { 'key': key })
        result = next(cursor)
        cursor.close()
        return result