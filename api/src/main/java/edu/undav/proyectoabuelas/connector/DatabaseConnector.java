package edu.undav.proyectoabuelas.connector;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.stereotype.Component;

import edu.undav.proyectoabuelas.config.MySqlConfig;
import edu.undav.proyectoabuelas.entity.Activity;
import edu.undav.proyectoabuelas.entity.ActivitySide;
import edu.undav.proyectoabuelas.entity.Multimedia;


@Component
public class DatabaseConnector{
    
    @Value("${spring.datasource.url}")
    private String url;
    @Value("${spring.datasource.username}")
    private String user;
    @Value("${spring.datasource.password}")
    private String pass;

    private DataSource datasource = null;
    private Connection conn = null;

    public DatabaseConnector() { }

    private void createDatasourse(){
        try {
            datasource = MySqlConfig.getDataSource(url, user, pass);
            conn = datasource.getConnection();
            System.out.println ("\nDatabase Connection Established...");
        } catch (SQLException e) {
            System.out.println ("\nDatabase Connection Falied...");
            datasource = null;
            conn = null;
        }

    }

    private Activity fillActivity(ResultSet rs) throws SQLException{
        return new Activity(
            rs.getInt("id"), 
            rs.getString("nombre"), 
            rs.getDate("fecha_inicio"),
            rs.getDate("fecha_fin"), 
            rs.getString("descripcion"));
    }

    private Multimedia fillMultimedia(ResultSet rs) throws SQLException {
        return new Multimedia(
            rs.getInt("id"),
            rs.getString("nombre"),
            rs.getString("descripcion"),
            rs.getString("archivo"),
            rs.getString("tipo"));
    }

    public ArrayList<Activity> getTimeline(){
        Statement stmt = null;
        ResultSet rs = null;
        ArrayList<Activity> results = new ArrayList<>();

        if(datasource == null){
            createDatasourse();
        }

        try {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(
                "SELECT * " +
                "FROM actividad " +
                "ORDER BY fecha_inicio DESC");
            while(rs.next()){
                results.add(fillActivity(rs));
            }
        } catch (SQLException ex){} 
        finally {
            if(rs != null) {
            try {
                rs.close();
            } catch (SQLException sqlEx) { } // ignore
            rs = null;
            }

            if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException sqlEx) { } // ignore
            stmt = null;
            }
        }
        return results;
    }

    public Activity getActivityById(String id){
        Statement stmt = null;
        ResultSet rs = null;
        Activity results = null;

        if(datasource == null){
            createDatasourse();
        }

        try {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(
                "SELECT * " +
                "FROM actividad " +
                "WHERE id = " + id);
            while(rs.next()){
                results = fillActivity(rs);
            }
        } catch (SQLException ex){} 
        finally {
            if(rs != null) {
            try {
                rs.close();
            } catch (SQLException sqlEx) { } // ignore
            rs = null;
            }

            if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException sqlEx) { } // ignore
            stmt = null;
            }
        }
        return results;
    }

    public ActivitySide getActivityByMultimediaId(String id){
        Statement stmt = null;
        ResultSet rs = null;
        ActivitySide results = null;

        if(datasource == null){
            createDatasourse();
        }

        try {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(
                "SELECT a.nombre, a.id " +
                "FROM actividad as a INNER JOIN multimedia as m " +
                "WHERE m.id= "+id+" AND m.id_actividad = a.id");
            while(rs.next()){
                results = new ActivitySide(rs.getInt("id"), rs.getString("nombre"));
            }
        } catch (SQLException ex){
            ex.printStackTrace();
        } 
        finally {
            if(rs != null) {
            try {
                rs.close();
            } catch (SQLException sqlEx) { } // ignore
            rs = null;
            }

            if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException sqlEx) { } // ignore
            stmt = null;
            }
        }
        return results;
    }

    public Multimedia getMultimediaById(String id){
        Statement stmt = null;
        ResultSet rs = null;
        Multimedia results = null;

        if(datasource == null){
            createDatasourse();
        }

        try {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(
                "SELECT nombre, descripcion, archivo, id, tipo " +
                "FROM multimedia " +
                "WHERE id = " + id);
            while(rs.next()){
                results = fillMultimedia(rs);
            }
        } catch (SQLException ex){} 
        finally {
            if(rs != null) {
            try {
                rs.close();
            } catch (SQLException sqlEx) { } // ignore
            rs = null;
            }

            if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException sqlEx) { } // ignore
            stmt = null;
            }
        }
        return results;
    }

    public ArrayList<Multimedia> getMultimediaByActivityId(String id){
        Statement stmt = null;
        ResultSet rs = null;
        ArrayList<Multimedia> results = new ArrayList<>();

        if(datasource == null){
            createDatasourse();
        }

        try {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(
                "SELECT nombre, descripcion, archivo, id, tipo " +
                "FROM multimedia " +
                "WHERE id_actividad = " + id);
            while(rs.next()){
                results.add(fillMultimedia(rs));
            }
        } catch (SQLException ex){} 
        finally {
            if(rs != null) {
            try {
                rs.close();
            } catch (SQLException sqlEx) { } // ignore
            rs = null;
            }

            if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException sqlEx) { } // ignore
            stmt = null;
            }
        }
        return results;
    }
}