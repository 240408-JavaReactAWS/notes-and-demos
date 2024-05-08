package com.revature.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {

    // Let's make a logger
    private static final Logger logger = LoggerFactory.getLogger(KafkaProducerService.class);

    // In this class we want to send off some message to our Kafka topic (topic is a collection of events)
    // To do this we need to add in a KafkaTemplate

    // We'll do some field injection which we probably shouldn't do (it's considered bad practice) but it'll keep things simple
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    // We'll make a method that sends a message to our Kafka topic
    public void sendMessage(String message){
        logger.info("Message sent -> " + message);
        this.kafkaTemplate.send("test", message);
        // What is this doing? the KafkaTemplate will send the message to the Kafka Event Broker (on the topic called
        // "test") and anyone listening on test will do some logic

    }
}
