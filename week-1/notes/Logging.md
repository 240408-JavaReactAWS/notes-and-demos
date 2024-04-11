# Logback

Logback is one of the most widely used logging frameworks in the Java Community. It’s a replacement for its predecessor, Log4j. Logback offers a faster implementation, provides more options for configuration, and more flexibility in archiving old log files.

## Why do we need logging?
Logging records events that occur during software execution. As users execute programs on the client side, the system accumulates log entries for support teams. In general, it allows for developers to access information about applications to which we do not have direct access. Without logs, we would have no idea of knowing what went wrong when an application crashes, or track and monitor application performance.

Also, a logging framework like Logback is critical because it allows us to use various logging levels and configure a threshold to determine which messages will be recorded in the application log files.

## Logback Logging Levels
Below are the Logback log levels, in order of least to most restrictive:
1. **ALL** => all levels
2. **DEBUG** => designates fine-grained informational events that are most useful to debug an application
3. **INFO** => informational messages that highlight the progress of the application at the coarse grained level
4. **WARN** => designates potentially harmful situations
5. **ERROR** => designates error events that might still allow the application to continue running
6. **FATAL** => severe error events that presumably lead the application to abort
7. **OFF** => highest possible level, intended to turn off logging

## How do logging levels work?
A log request of level *x* in a logger with level *y* is enabled with *x >= y*. For the standard levels, we have that 
    ALL < DEBUG < INFO < WARN < ERROR < FATAL < OFF
