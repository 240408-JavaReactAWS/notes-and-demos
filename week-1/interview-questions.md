# DS&A
* What are data structures?
    - Is used to organize, manage and store data
    - Enables efficient access and modification when applied correctly to a specific situation/problem 
* What is a linked list?
    + Linear data structure, in which elements are not stored at contiguous memory locations
    + Elements are linked using pointers 
    + Linked lists are dynamic meaning that they can increase or decrease in size
* What is a single linked list?
    + Defined as all nodes are linked together in a few sequential manner, hence it is also known as a linear linked list
    + Clearly is has the beginning and the end. 
    + Main problem is that we cannot access the predecessor of the node from the current node
* What are some advantages of a singly linked list?
    + Insertions and deletions can be done easily in O(1) time
    + Space is not wasted as we can get space according to our requirements
* what are some disadvantages of a singly linked list?
    + Accessing the preceding node of a current node is not possible as there is no backward traversal
    + If we have to go to a particular element then we have to go through all those elements that come before that element in O(n) time
    + We cannot traverse it starting from the end node, we can only do so from the beginning first node
* What is a double linked list?
    + Similar to a linked list but here each node has an extra pointer that stores the address of the previous node 
    + Internally, the `java.util.LinkedList` is implemented using a Doubly Linked List Data Structure
* What are some advantages to a Doubly Linked List?
    + Allows us to iterate in both directions
    + We can delete a node easily as we have access to its previous node
    + Reversing is easy
* What are some disadvantages to a Doubly Linked List?
    + Compared to a singly linked list, each node stores an extra pointer which consumes extra memory
    + Operations require more time due to the overhead of handling extra pointers as compared to singly-linked lists
* Where would we use Linked Lists/Doubly Linked Lists?
    + Can be used to implement various data structures like hash-tables, stacks, binary trees etc.
    - Can be used to implement functionalities such as undo/redo
    - Used by a thread scheduler in many OS to maintain a list of all running processes
    - Can also be used in games e.g. representing a deck of cards
    - Can be used in any software that requires forward and backward navigation e.g. music players, in web-browsers to move between previously visited and current page etc.
* What is a map?
    - Has a key value pair and allows for fast look up for the value if the key is known
* What are some real world uses for maps?
    - A map of the zip code and cities
    - A map of regions and the countries in each region
* Can maps contain duplicate keys?
    - No, each key can only be mapped to 1 value
* Do maps allow for null keys and null values?
    - Specific implmentations allow it such as HashMap and LinkedHashMap
    - TreeMap does not support null keys and null values
* What is a stack?
    - Linear data type with a predefined capacity or boundary
    - Last In First Out (LIFO) or First In Last Out (FILO) ordering
* What are some benefits of using stacks?
    - Implement functions, parsers, expression evaluation, and some algorithms
    - Great for processing nested structures
* What would be a simple real-world application of a stack?
    - Reversing a string letter by letter
    - Undo and redo function on a computer or text editor
* What is a queue?
    - Linear structure that follows a First In First Out (FIFO) order
    - Queues open from both ends
        - One end for inserting data (enqueue), and the other for removing data (dequeue)
    - Stack is only open from one end
* What is a deque?
    - Elements can be added or removed from either the front or back of the queue
    - Short for double ended queue
* When would we want to use a linked list over an ArrayList?
    + When we have a ton of insertions and deletions
    + Linkedlist insertion/deletion is O(1) while ArrayList insertion/deletion is O(n)
* What is a set?
    - Stores unordered elements 
    - Cannot contain duplicate elements
* What is a Hash Set?
    - Hash set stores the elements by using a mechanism called hashing
    - HashSet contains unique elements only
    - HashSet allows null values
    - HashSet is non-synchronized



# Threads

* What is multi-threading?
  * Handling multiple threads / paths of execution in your program.
* In what ways can you create a thread?
  * By extending the `Thread` Class or by implementing the `Runnable` Interface. You must call `Thread`'s `.start()` method to start it as a new thread of execution.
* Lifecycle of a thread
  * When created, in NEW state.
  * When `.start()` is called, it goes to RUNNABLE state.
  * When `.run()` is called, goes to RUNNING state.
  * If `.sleep()` or `.wait()` is called, will go to WAITING.
  * If dependent on another thread to release a lock, it will go to BLOCKED state.
  * When finished executing, will be in TERMINATED state and cannot be restarted.
* What is deadlock?
  * When two or more threads are waiting on locks held by the others, such that no thread can execute
* What is `synchronized` keyword?
  * Only allowing one thread access to the method or variable at a time - enforces thread-safety


# Reflections API

* What is Reflection API?
  * The first component of the Reflection API is the mechanism used to fetch information about a class. This mechanism is built into the class named Class. The special class Class is the universal type for the meta information that describes objects within the Java system. Class loaders in the Java system return objects of type Class. Up until now the three most interesting methods in this class were:
  * `.forName()`, which would load a class of a given name, using the current class loader
  * `.getName()`, which would return the name of the class as a String object,which was useful for identifying object references by their class name
  * `.newInstance()`, which would invoke the null constructor on the class (if it exists) and return you an object instance of that class of object
  * To these three useful methods the Reflection API adds some additional methods to class Class. These are as follows:
  * `getConstructor`, `getConstructors`, `getDeclaredConstructor`
  * `getMethod`, `getMethods`, `getDeclaredMethods`
  * `getField`, `getFields`, `getDeclaredFields`
  * `getSuperclass`
  * `getInterfaces`
  * `getDeclaredClasses`
  
## Design patterns
* What are Singleton / Factory design patterns?
  * Singleton - allows for creation of only 1 object. Method for retrieving object returns reference to the same object in memory. Implement via private constructor
  * Factory - abstracts away instantiation logic, usually used in conjunction with singleton pattern

## Logback
* What is an advantage to using a logging library?
  * Allows you to set logging thresholds
* What is logback?
  * Logging library for Java
* What are the logging levels of logback?
  * TRACE, DEBUG, INFO, WARN, ERROR, FATAL

## Java 8
* What are functional interfaces?
  * Functional interfaces only have one method, and can be used in conjuntion with lambdas
* What are lambdas?
  * Like anonymous functions, they allow implementation of functional interfaces directly without creating a class
* What is the Streams API used for? What is the difference between intermediate and terminal operations? Can you provide examples?
