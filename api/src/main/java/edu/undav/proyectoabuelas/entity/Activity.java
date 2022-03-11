package edu.undav.proyectoabuelas.entity;

import java.sql.Date;

public class Activity {
    public final int id;
    public final String nombre;
    public final Date fecha;
    public final String descripcion;

    public Activity(int id, String nombre, Date fecha, String descripcion){
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
}
