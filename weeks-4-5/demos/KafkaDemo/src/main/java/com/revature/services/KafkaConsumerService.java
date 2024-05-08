package com.revature.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    //Logger
    private final Logger logger = LoggerFactory.getLogger(KafkaConsumerService.class);

    // Now we need a method that allows us to listen for the Kafka message
    @KafkaListener(topics = "test")
    public void consume(String message){
        logger.info("Message received -> " + message);
    }
}
