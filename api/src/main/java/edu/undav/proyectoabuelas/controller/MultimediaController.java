package edu.undav.proyectoabuelas.controller;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.undav.proyectoabuelas.connector.DatabaseConnector;
import edu.undav.proyectoabuelas.entity.Multimedia;

@RestController
public class MultimediaController {

    @Autowired
    DatabaseConnector connector;
    private static Logger LOGGER = LogManager.getLogger(MultimediaController.class);

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(value = "/multimedia/{id}",
			produces = { "application/json" })
    @JsonAnyGetter
    public Multimedia multimediaById(@PathVariable("id") int id) {
        LOGGER.info("Recieved /multimedia/{}", id);
        return connector.getMultimediaById(String.valueOf(id));
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(value = "/multimedia",
			produces = { "application/json" })
    @JsonAnyGetter
    public Map<String, Object> multimediaByActivityId(@RequestParam("actividad") int actividadId) {
        LOGGER.info("Recieved /multimedia?actividad={}", actividadId);
        HashMap<String, Object> res =  new HashMap<String, Object>();
        res.put("result", connector.getMultimediaByActivityId(String.valueOf(actividadId)));
        return res;
    }
}
