# Arrays
An array is a contiguous block of memory storing a group of sequentially stored elements of the same type. Arrays in Java are of a fixed size and cannot be resized after declaration. Arrays are declared with square brackets after the type of the array like so:
```java
int[] myInts = new int[]{1, 2, 3, 4};
String[] languages = {"Java", "JavaScript", "SQL"};
int[] intArray = new int[20];
```

Items in an array are referenced via their index in square bracket notation, which begins with `0` for the first element. Arrays also have a `length` property specifying the length of the array. This is helpful when iterating over arrays with a `for` loop:
```java
String[] myArr = {"first", "second", "third"};
for (int i = 0; i < myArr.length; i++) {
  System.out.println(myArr[i]);
}
```

# Collections Framework
The Collections framework in Java is a set of classes and interfaces that implement commonly used data structures. A collection is a single object which acts as a container for other objects. The Collections API is organized in a class hierarchy shown in simplified version below:

<img src = "https://javaconceptoftheday.com/wp-content/uploads/2014/11/CollectionHierarchy.png" width = "600">

The important interfaces in the Collections API are:
* `Iterable` - guarantees the collection can be iterated over
* `List` - an ordered collection
* `Set` - a collection does not contain duplicates
* `Queue` - a collection that operates on a first-in-first-out (FIFO) basis
* `Map` - contains key/value pairs. Does not extend `Iterable`.

# List Interface
A `List` is a collection that is ordered and preserves the order in which elements are inserted into the list. Contrary to sets, duplicate entries are allowed. Also, elements are accessed by their index, which begins with 0 for the first element in the list.

## ArrayList
An `ArrayList` is a concrete class which implements `List`. It is a data structure which contains an array within it, but can resize dynamically. Once it reaches maximum capacity, an `ArrayList` will increase its size by 50% by copying its elements to a new (internal) array. Traversal is fast (constant time) because elements can be randomly accessed via index, just like an array. Insertion or removal of elements is slow, however (linear time, since there is a risk of having to resize the underlying array).

## LinkedList
A `LinkedList` implements both the `List` and `Queue` interfaces, so it has all methods in both interfaces. The data structure is composed of nodes internally, each with a reference to the previous node and the next node - i.e. a doubly-linked list. Because of this structure, insertion or removal of elements is fast (no risk to resize, just change the nearest references), but traversal is slow for an arbitrary index (linear time).

### Vector
`Vector` is an older class which implements `List` - it is essentially a thread-safe implementation of an `ArrayList`.


# Set Interface
`Set` is an interface which defines a data structure which:
* is NOT index driven
* only allows unique elements
* generally DOES NOT preserve the order in which elements were inserted

### HashSet
A `HashSet` implements `Set` and is backed by a `HashMap`. It:
* Guarantees no ordering when iterating
* Allows one `null` value
* Allows fast insertion and traversal
* Does not maintain order in which you insert elements

### TreeSet
A `TreeSet` is a `Set` whose elements maintain sorted order when inserted. Internally, it is backed by a Sorted Tree. Insertion and removal of elements is slow, because the elements must maintain sorted order. It cannot contain any `null` values, since `null` cannot be compared to any object.

## Stack
`Stack` is an older implementation of the stack data structure (last-in-first-out, or LIFO). Generally you should use an `ArrayDeque` for implementing a stack.


## Queue Interface
A `Queue` is a data structure used when elements should be added and removed in a specific order. Unless specified, elements are ordered FIFO (first-in-first-out). Some useful methods declared are:
* `offer()`
* `peek()`
* `poll()`

### ArrayDeque
Pronounced as 'array-deck', this concrete class can be implemented for either the queue or stack data structure. It is an implementation of a pure double-ended queue (elements can be added or removed from either end of the queue). An `ArrayDeque` stores elements in a resizable array internally, and it has a few extra useful methods defined:
* `pop()`
* `push()`
* `peekFirst()`
* `peekLast()`
* `pollFirst()`
* `pollLast()`
* `offerFirst()`
* `offerLast()`

| Operation | Throws Exception | Returns null |
| --------- | ---------------- | ------------ |
| Insert    | `boolean add(E e)`|`boolean offer(E e)`|
| Remove    | `E remove()` | `E poll()` |
| Examine   | `E element()`| `E peek()`|


# Collections Class
The [Collections](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html) class - not to be confused with the Collection interface - defines many `static` helper methods which operate on any given collection. Use this class for help with sorting, searching, reversing, or performing other operations on collections.
