package edu.undav.proyectoabuelas.controller;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.undav.proyectoabuelas.connector.DatabaseConnector;

@RestController
public class TimelineController {

    @Autowired
    DatabaseConnector connector;
    private static Logger LOGGER = LogManager.getLogger(TimelineController.class);

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(value = "/timeline",
			produces = { "application/json" })
    @JsonAnyGetter
    public Map<String, Object> getTimeline() {
        LOGGER.info("Recieved /timeline");
        HashMap<String, Object> res =  new HashMap<String, Object>();
        res.put("result", connector.getTimeline());
        return res;
    }
    
}