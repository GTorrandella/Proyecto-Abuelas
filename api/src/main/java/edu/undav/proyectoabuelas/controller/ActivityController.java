package edu.undav.proyectoabuelas.controller;

import com.fasterxml.jackson.annotation.JsonAnyGetter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.undav.proyectoabuelas.connector.DatabaseConnector;
import edu.undav.proyectoabuelas.entity.Activity;
import edu.undav.proyectoabuelas.entity.ActivitySide;

@RestController
public class ActivityController {

    @Autowired
    DatabaseConnector connector;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(value = "/actividad/{id}",
			produces = { "application/json" })
    @JsonAnyGetter
    public Activity activityById(@PathVariable("id") String id) {
        return connector.getActivityById(id);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(value = "/actividad",
			produces = { "application/json" })
    @JsonAnyGetter
    public ActivitySide multimediaByActivityId(@RequestParam("multimedia") String multimediaId) {
        return connector.getActivityByMultimediaId(multimediaId);
    }
    
}
