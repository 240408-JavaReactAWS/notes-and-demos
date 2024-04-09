# Lambda Expressions
Lambda expressions are one of the biggest new features of Java 8, and they introduce some important aspects of **functional programming** to Java. The most basic syntax of a lambda expression is:

```java
parameter(s) -> expression
```

For example, we can use the `.forEach` method of the `Iterable` interface, which accepts a lambda expression as its argument:

```java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");
names.forEach(str -> System.out.println(str));
```

This will print out the names just as if we had used a `for` loop. The lambda syntax could also be done with an explicit type declaration for the parameter, but the compiler can infer the type from the value used. For multiple parameters, parentheses are required around them. Also, curly braces are optional for single statements but required for multiple. Finally, the `return` keyword is also optional for a single expression because the value will be returned by default.

#### `.forEach()` method
The `forEach()` method actually accepts what is called a functional interface as its parameter (specifically a `Consumer`), which the lambda expression then implements at runtime. The `forEach()` method then loops through `names` and passes each element to the lambda expression to be "consumed".

#### Functional Interfaces
[Functional interfaces](https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html) are interfaces that **have only one abstract method**. This method is what lambdas are implementing when they are declared - the parameter types and return types of the lambda must match the functional interface method declaration. The Java 8 JDK comes with many built-in functional interfaces, listed in the Javadocs link above.

We can also use functional interfaces as types to which we can assign lambda functions, like so:

```java
interface MyFunctionalInt {
  int doMath(int number);
}

public class Execute {
  public static void main(String[] args) {
    MyFunctionalInt doubleIt = n -> n * 2;
	MyFunctionalInt subtractIt = n -> n - 2;
	int result1 = doubleIt.doMath(2);
	int result2 = subtractIt.doMath(8);
	System.out.println(result1); // 4
	System.out.println(result2); // 6
  }
}
```

# Stream API
The Java 8 [Stream API](https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html) is a functional-style way of defining operations on a stream of elements. Streams are an abstraction which allow defining operations which do not modify the source data and are lazily executed. Streams **do not store data**, they simply define operations like filtering, mapping, or reducing, and can be combined with other operations and then executed. Some built-in `Stream`s are located in the `java.util.stream` package.

Streams are divided into *intermediate* and *terminal* operations. Intermediate streams return a new stream and are always lazy - they don't actually execute until a terminal operation is called. Terminal operations trigger the execution of the stream pipeline, which allows efficiency by perfoming all operations in a single pass over the data.

Finally, reduction operations take a sequence of elements and combine them into a single result. Stream classes have the `reduce()` and `collect()` methods for this purpose, with many built-in operations defined in the `Collectors` class.

```java
List<Student> students = new ArrayList<>();
// add students...
List<Double> grades = students.stream()
                          .filter(s -> s.isAttending())
						  .mapToDouble(s -> s.getGrade)
						  .collect(Collectors.toList());
```

## Optional Class
[The `Optional` class](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html) was introduced in Java 8 to reduce the need for excessive `null` value checking. An `Optional` is a kind of wrapper object which may or may not contain a value, with a few helper methods to handle existing or non-existent values (see Javadocs above).

Optionals are useful as replacements for `null` values when returning an "empty" response from a method. For example:

```java
public class OptionalExample {
  public Optional<String> getAmbiguousString(boolean b) {
    if (true) {
	  return Optional.of("awesome string!");
	} else {
	  return Optional.empty();
	}
  }
  
  public static void main(String[] args) {
    Optional<String> optString = getAmbiguousString(false);
	String theString = optString.orElse(""); // specify a fallback value
	System.out.println(theString);
	// we can use the String without fear of NullPointerException now
  }
}
```

# Reflection Framework

It is an API for modifying the behavior of methods and classes at runtime. It's called "reflection" because you're reflecting/introspecting into the code (so that it can modify itself).

## Classes in the API:

- Class
- Method
- Modifier
- Parameter

NOTE: You can do things like check an if a class has a specific annotation, method or method signature, or modifier on a method. Frameworks like Spring heavily rely on Reflection to function such as detecting methods and loading classes dynamically. Even JUnit uses Reflection to detect methods with the @Test annotation on them.

### Disadvantages

- **Performance Overhead** 
    - Because reflection involves types that are dynamically resolved, certain Java virtual machine optimizations can not be performed. Consequently, reflective operations have slower performance than their non-reflective counterparts, and should be avoided in sections of code which are called frequently in performance-sensitive applications.

- **Security Restrictions**
    - Reflection requires a runtime permission which may not be present when running under a security manager. This is in an important consideration for code which has to run in a restricted security context, such as in an Applet.

- **Exposure of Internals**
    - Since reflection allows code to perform operations that would be illegal in non-reflective code, such as accessing private fields and methods, the use of reflection can result in unexpected side-effects, which may render code dysfunctional and may destroy portability. Reflective code breaks abstractions and therefore may change behavior with upgrades of the platform.