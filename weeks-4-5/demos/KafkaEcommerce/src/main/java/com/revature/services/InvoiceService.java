package com.revature.services;

import com.revature.models.Item;
import com.revature.models.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService {

    private final Logger logger = LoggerFactory.getLogger(InvoiceService.class);

    @KafkaListener(topics = "orders", groupId = "order-listeners-3")
    public void createInvoice(Order order){
        double finalPrice = 0;

        for (Item item: order.getCart()){
            finalPrice += item.getPrice() * item.getQuantity();
        }

        finalPrice *= 1.07;

        logger.info("Invoice created: Total is " + Math.round(finalPrice));
    }
}
