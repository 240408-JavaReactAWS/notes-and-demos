package com.revature.services;

import com.revature.models.Item;
import com.revature.models.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShippingService {

    // This class will be in charge of listening for orders and generating a work order for the fulfillment center
    private final Logger logger = LoggerFactory.getLogger(ShippingService.class);

    @KafkaListener(topics = "orders", groupId = "order-listeners" , concurrency = "3")
    public void createShippingLabel(Order order){
        logger.info("Order received: Creating shipping label for " + order.getEmail());
    }

    // What about the item in general? We need to have the fulfillment center get the items and package them up

    @Autowired
    private KafkaTemplate<String, Order> kafkaTemplate;

    @KafkaListener(topics = "orders", groupId = "order-listeners-2")
    public void createWorkOrder(Order order){
        logger.info("Telling the center to package the following items: " + order.getCart());

        this.kafkaTemplate.send("work-orders", order);
    }

}
