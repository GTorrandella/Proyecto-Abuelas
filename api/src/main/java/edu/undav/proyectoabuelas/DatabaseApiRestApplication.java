package edu.undav.proyectoabuelas;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DatabaseApiRestApplication extends SpringBootServletInitializer{

   private static Logger LOGGER = LogManager.getLogger(DatabaseApiRestApplication.class);

   @Override
   protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
      return application.sources(DatabaseApiRestApplication.class);
   }
   
   public static void main(String[] args) {
      LOGGER.info("Proyecto Abuelas api started");
      SpringApplication.run(DatabaseApiRestApplication.class, args);
   }
}