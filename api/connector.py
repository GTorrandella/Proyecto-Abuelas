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