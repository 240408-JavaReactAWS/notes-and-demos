package com.revature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private ItemDAO itemDAO;

    @Autowired
    public ItemService(ItemDAO itemDAO) {
        super();
        this.itemDAO = itemDAO;
    }

    // Create a new item
    public Item createItem(Item item) {
        return itemDAO.save(item);
    }

    // Update an existing item
    public Item updateItem(Item item) {
        return itemDAO.save(item);
    }

    // Delete an existing item and verify it doesn't exist anymore
    public void deleteItem(int id) {
        itemDAO.deleteById(id);

        if (itemDAO.findById(id).isPresent()) {
            throw new RuntimeException("Item was not deleted");
        }
    }

    // retrieve all items
    public List<Item> getAllItems() {
        return itemDAO.findAll();
    }

    // retrieve an item by id
    public Item getItemById(int id) {
        return itemDAO.findById(id).orElse(null);
    }

    // retrieve an item by name
    public Item getItemByName(String name) {
        return itemDAO.findByName(name);
    }
}
