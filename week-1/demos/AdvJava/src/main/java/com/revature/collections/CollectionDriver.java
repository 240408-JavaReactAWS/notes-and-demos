package com.revature.collections;

import java.util.*;
import java.util.stream.Collectors;

public class CollectionDriver {

    /*
    The collection framework is a built-in Java framework containing a large number of different data structures
    that allow you to work with data in unique ways


    Lists -> Ordered/Indexed, Can grow in size and allow duplicate values
    Sets -> Unordered, can grow in size, but they do not allow duplicate values
    Queues -> FIFO

    Honorable mention: Map

     */

    public static void main(String[] args) {
        // 1.
        List<String> words = new ArrayList<>();

        words.add("This");
        words.add("is");
        words.add("a");
        words.add("String");

        // Lists are indexed we can get an item at a specific index
        System.out.println(words.get(2));

        // Why did we do List<> list = new ArrayList<>?
        /*
        List is an INTERFACE owned by the collections framework whereas ArrayList is an implementing CLASS

        We saw earlier when messing around with functional interfaces, we can't make an instance of an interface so
        we had an implementing class do it instead. But also this is something called the Liskov Substitution Principle,
        basically it states you should pass an implementation in for the type of the interface so it becomes easier to
        swap if necessary
         */

        List<String> words2 = new LinkedList<>();
        // We want the flexibility to be able to swap our implementations at any time without having to worry about
        // breaking the rest of the code

        // LIST defines the viable methods and ArrayList/LinkedList Implements those methods in different ways

        // Why would you use an ArrayList vs a LinkedList? What's the difference?
        // ArrayLists store info in an array under the hood, make it quick for retreival of info, but slower at
        // insertion/deletion, whereas LinkedLists store info in a series of nodes with pointers and that makes them
        // slower at retrieval of info but much faster at insertion/deletion of info. Use the correct one as needed


        // Sets
        // Sets are (generally) unordered and do not contain duplicates

        Set<Integer> numSet = new HashSet<>();

        numSet.add(4);
        numSet.add(2);
        numSet.add(1);
        numSet.add(3);
        numSet.add(5);
        numSet.add(5); // These don't get added because they're duplicate items
        numSet.add(5);
        numSet.add(5);

        // Just as a reminder, all collections inherit from collections and iterable, and things that are iterable
        // can be used in enhanced for loops and with the forEach method

        for(int i: numSet){
            System.out.println(i);
        }

        System.out.println("---------------------");

        // Can we get with a set?
//        numSet.get() doesn't exist since order is not preserved to index

        Set<Integer> squaredNumSet = numSet.stream()
                                        .map((x) -> x*x)
                                        .collect(Collectors.toSet());

        squaredNumSet.forEach((n) -> System.out.println(n));


        System.out.println("-----------------------");

        // Queues are a data structure that represent lines. follow the First In, First Out principle, so the items
        // entered first will be the first ones to be removed

        Queue<String> spotifyPlaylist = new ArrayDeque<>();
        // What on earth is an ArrayDeque (pronounced Array Deck). A Deque is a double-ended queue, so you can pull
        // items from both the front and the back of the queue. Commonly used even when needing just a regular queue

        // We can add some songs to our playlist
        spotifyPlaylist.add("Skyrim Theme");
        spotifyPlaylist.add("Dark side of the moon");
        spotifyPlaylist.add("All my taste is music is bad, man");
        spotifyPlaylist.add("Hotel California");

        // We've added these items to the playlist lets find out how to get them out of the playlist

        // First if we want to see what song is queued up next we'll use the peek method
        System.out.println("Next song is: " + spotifyPlaylist.peek());

        // Now we should not that peek will allow us to view the next song, but it won't actually remove it
        System.out.println("Now playing: " +spotifyPlaylist.poll());
        System.out.println("Next song is: " + spotifyPlaylist.peek());

        System.out.println("Songs remaining in queue:");
        spotifyPlaylist.forEach((song) -> System.out.println(song));

        // We do also have the ability to peek and poll last if we use an arraydeque as a stack but we won't dive into
        // this too much















    }
}
