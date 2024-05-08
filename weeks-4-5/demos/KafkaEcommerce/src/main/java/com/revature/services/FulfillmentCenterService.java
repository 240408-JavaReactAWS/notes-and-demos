package com.revature.services;

import com.revature.models.Item;
import com.revature.models.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

@Service
public class FulfillmentCenterService {

    private final Logger logger = LoggerFactory.getLogger(FulfillmentCenterService.class);

    @KafkaListener(topics = "work-orders")
    public void consumeWorkOrder(Order order){
        List<String> itemNames = new LinkedList<>();

        for (Item item: order.getCart()){
            itemNames.add(item.getName());
        }

        logger.info("Work order received: Packaging the following items: " + Arrays.toString(itemNames.toArray()));
    }
}
