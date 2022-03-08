package edu.undav.proyectoabuelas.entity;

import java.sql.Date;

public class Activity {
    public final int id;
    public final String nombre;
    public final Date fecha_inicio;
    public final Date fecha_fin;
    public final String descripcion;

    public Activity(int id, String nombre, Date fechaInicio, Date fechaFin, String descripcion){
        this.id = id;
        this.nombre = nombre;
        this.fecha_inicio = fechaInicio;
        this.fecha_fin = fechaFin;
        this.descripcion = descripcion;
    }
}
