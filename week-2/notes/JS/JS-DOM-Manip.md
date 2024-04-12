# DOM

## Document Object Model (DOM):

Tree like structure representing the HTML document known as the DOM tree

-   Allows javascript to access and manipulate elements and styles on a webpage

The root of the DOM tree is our HTML tag, otherwise known as the document object

-   Every other element is a node that can be accessed via Javascript

To gain acess to the DOM you simple use the `document` object in Javascript, it gives you access to methods to select elements, traverse and manipulate the HTML Page

# Selecting Elements and Traversing the DOM

There are several ways to select an element in the DOM tree:

-   `document.getElementById("idname")`: select a single element based off of its id attribute
-   `document.getElementsByClassName("classname")`: select a group of elements with the same class attribute
-   `document.getElementsByTagName("tag")`: select all elements with that specified tag
-   `document.querySelector("selector")` and `document.querySelectorAll("selector")`: select an element/s with a specified CSS selector

The document object provides us ways to move through the tree with different properties gaining access to pretty much any object in the tree

To gain access to the top most nodes you can use:

-   `document.documentElement` to access the html element
-   `document.head` to access head tag
-   `document.body` to access body tag

To gain access to the parent nodes of the currently selected element

-   `element.parentNode`
-   `element.parentElement`

To gain access to children nodes of an element:

-   `element.childNodes`
-   `element.firstChild`
-   `element.lastChild`

To gain access to sibling nodes of an element:

-   `element.previousElementSibling`
-   `element.nextElementSibling`

# DOM Manipulation

On top of access, and traversing through the tree, you are also able to change/manipulate elements in the dom three with JS

-   `document.createElement()` you can create an element and insert into the dom tree
-   `element.replaceChild()` remove an element from the DOM and replace it with another
-   `element.removeChild()` to completely remove and element
-   `element.insertBefore()` to insert an element before the selected one
-   `element.innerText` and `element.textContent` to change, set, or get the text in an element
-   `element.innerHTML` to set the HTML of an element
-   `element.cloneNode()` used to clone an element

There are also many other useful methods and properties that you can leverage on the element objects to manipulate the page in JS

You can use these methods to manage attributes of html elements:

-   `element.getAttribute("attname")`
-   `element.setAttribute("attname")`
-   `element.removeAttribute("attname")`
-   `element.hasAttribute("attname")`

# Events and Listeners

Events occur when a user interacts with a webpage, or when the browser triggers one

You can configure your webpage to handle these events with Javascript using event handlers, events you can handle include:

-   onclick: this is a click event occurs when a user clicks the element on the webpage

-   ondblclick: this is a click event occurs when a user double clicks on element on the webpage

-   onload: this is a load event occurs when the browser is finished loading the page

-   onunload: this is a load event occurs when a user closed the document

-   onresize: this is a load event occurs when the browser window is minimized or maximized

-   onmouseover: this is a mouse event occurs when a user mouses over an element

-   onmouseout: this is a mouse even occurs when a user moves the mouse off of an element

-   onkeydown, onkeyup, are keyboard events occur when a user presses or releases a key

-   onfocus: this a form input event occurs when the user gives focus to an element on the webpage

-   onblur is the opposite of on focus

-   onchange: this is a form event that occurs when a user changes the input in a form

-   onsubmit: this is a form event that occurs when a user submits a form

There are three ways you can register an event handler:

1. Inline, where you set the on... attribute of the html element to a predefined function in your js code
2. You can set the event property of the html element to a predefined JS function
3. You can use the `element.addEventListener(event, function, useCapture)`

# The Event Object

In Javascript events are represented by an Event Object

Event Objects have the following properties and methods:

-   bubbles: a boolean value which indicates the propagation method, it is true by default
-   currentTarget: a reference to the DOM element whose event listener triggered the specific event
    -   This is different from the event that initally triggered the event as a single event can trigger multple event listeners through propagation
-   preventDefault(): cancel the event/prevents the default action of the event
-   stopPropagation(): prevents the event from propagating further
-   target: a reference to the DOM element that triggered the event
-   timeStamp: the time of the event in miliseconds
-   type: the type of the event

## Types of Events

There are several subclasses of the Event Object, which all include their own properties as well as the properties of the event object

-   A complete list of event objects can be found here: https://www.w3schools.com/jsref/obj_events.asp

## MouseEvent

This is an event that is generated when the user interacts with elements on the page with a mouse

Events like click, onmouseenter, onmouseleave, and so create mouse event objects

The MouseEvent object has many properties that hold information about the state of the machine when the event occured:

-   Coordinates of the mouse relative to the window: clientX and clientY
-   Coordinates of the mouse relative to the last event: movementX, movementY
-   Coordniates of the mouse relative to the target: offsetX, offsetY
-   Coordinates of the mouse relative to the screen: screenX, screenY
-   Whether alt, ctrl, or shift were held when clicking: altKey, ctrlKey, and shiftKey
-   Which mouse button was hit: button, buttons, which

## KeyboardEvent

This is an event that is generated when the user interacts with elements on the page with their keyboard

You would typically use this to add funcionality to webforms

Events onkeydown, onkeypress, and onkeyup create KeyboardEvent objects

This object has the following properties:

-   Whether alt, ctrl, or shift were hit during the event: altKey, ctrlKey, shiftKey
-   Which key was hit: key, keycode, and which
-   Whether the key is being held down: repeat

# Bubbling/Capturing

Javascript has something called event propagation, which essentially how the event flows through the components on the page

There are two ways in which an event can propagate, the first is called bubbling, the second is called capturing

## Event Bubbling

Bubbling is the default event propagating for event listeners

-   Follow a bottom up approach
-   The event starts at the target element, then "bubbles" its way up the tree

Essentially when an event happens, it first goes to any handlers on that element, then that elements parents, then grandparents, and so on until it reaches the top of the html document

Bubbling works for all handlers, regardless of how they are registered

## Event Capturing

Event capturing is the opposite of bubbling, instead of going from the target element to the top of the tree, it will start at the top and work its way down to the target element

-   Following a top down approach

Capturing only works with event handlers that are registered with .addEventListener() with an added third argument that is set to true