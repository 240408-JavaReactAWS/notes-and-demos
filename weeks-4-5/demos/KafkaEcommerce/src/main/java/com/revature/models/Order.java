package com.revature.models;

import java.util.List;

public class Order {

    private String email;

    private List<Item> cart;

    public Order() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Item> getCart() {
        return cart;
    }

    public void setCart(List<Item> cart) {
        this.cart = cart;
    }

    @Override
    public String toString() {
        return "Order{" +
                "email='" + email + '\'' +
                ", cart=" + cart +
                '}';
    }
}
