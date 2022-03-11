package edu.undav.proyectoabuelas.entity;

public class Multimedia {
    public final int id;
    public final String nombre;
    public final String descripcion;
    public final String archivo;
    public final String tipo;

    public Multimedia(int id, String nombre, String descripcion, String archivo, String tipo){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.archivo = archivo;
        this.tipo = tipo;
    }
}
