package edu.undav.proyectoabuelas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DatabaseApiRestApplication extends SpringBootServletInitializer{
   
   @Override
   protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
      return application.sources(DatabaseApiRestApplication.class);
   }
   
   public static void main(String[] args) {
      SpringApplication.run(DatabaseApiRestApplication.class, args);
   }
}