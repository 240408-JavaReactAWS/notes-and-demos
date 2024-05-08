package com.revature.controllers;

import com.revature.services.KafkaProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kafka")
public class KafkaProducerController {

    @Autowired
    private KafkaProducerService kafkaProducerService;

    @PostMapping("/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message){
        // http://localhost:8080/kafka/publish?message=Hello

        // Let's just print this message to the console for now
//        System.out.println("Message: " + message);
        kafkaProducerService.sendMessage(message);
    }
}
