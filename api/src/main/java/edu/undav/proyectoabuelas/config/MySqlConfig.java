package edu.undav.proyectoabuelas.config;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MySqlConfig {

    public static DataSource getDataSource(String url, String user, String pass){
        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.url(url);
        dataSourceBuilder.username(user);
        dataSourceBuilder.password(pass);
        return dataSourceBuilder.build();
    }
    
}
