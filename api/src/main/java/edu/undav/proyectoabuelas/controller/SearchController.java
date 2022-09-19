package edu.undav.proyectoabuelas.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonAnyGetter;

import edu.undav.proyectoabuelas.connector.DatabaseConnector;

@RestController
public class SearchController {

    @Autowired
    DatabaseConnector connector;
    private static Logger LOGGER = LogManager.getLogger(SearchController.class);

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping(value = "/search",
			produces = { "application/json" })
    @JsonAnyGetter
    public Map<String, List<Object>> search(@RequestParam("q") String q) {
        LOGGER.info("Recieved /search?q={}", q);
        final String[] queryElems = q.split(" ");
        return connector.search(queryElems);
    }
    
}
