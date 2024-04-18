# React Application State Management

React has an Application State Management problem, all data can only flow one way, so sharing state between multiple components can become tricky

There are a few possible solutions for this problem:

1. Lifting State: we have already seen this is usable, however it becomes complicated quickly

2. React Context API: a built in centralized data store that comes with React

3. Use the Flux Design Pattern through React Redux

## Lifting State

As previously mentioned, data can only flow one way in React, and props are read only, so we cannot change the state of a parent class from a child class

However, we can "Lift State" by passing a child component a funciton as a prop, that changes the state of the parent component

Lifting state is useful when a common parent/ancestor is shared across multiple other components that are sharing common values

There are limitations when applications become too large and the entire application needs to keep track of the state, it becomes difficult to manage. However, we will soon learn of a technology to handle this for us

# React useContext vs Redux

## useContext

The Context API is Reacts built in state management system. It was created to combat the one direction dataflow of react, and help aliviate prop drilling.

"Context provides a way to pass data through the component tree without having to pass props down manually at every level" - React Docs

Context allows you to setup a global "context" aka state that is shared through some provider component
- Wrap all the components which need the context in the provider

Typically developers create separate files for different contexts, to setup a context you will use the `React.createContext(state)` method

The object you store this context in will be exported.
- You can also make use of other hooks in your context file such as useState and useReducer to create more complex state mangement

To use the context you must wrap the components which need the context inside of the Provider component which is provided for you when your create your context with the `React.createContext` method

```jsx
<Context.Provider>
    <ComponentOne></ComponentOne>
    <ComponentTwo></ComponentTwo>
    .
    .
    .
</Context.Provider>
```

Optionally, you can include the `value` prop in the provider to pass the Context some value other than the default you may have provided

To consume the context from the provider you will need to use the `useContext(context)` hook provided by React

Now instead of passing props through multiple levels, you can just bring in that global state from the provider, hopefully making your application less confusing.

For smaller applications the use of Context API with useState/useReducer is good enough for state management, however for larger more complicated applications developers might opt for the Flux design pattern and Redux

# Redux

## Flux Design Pattern:

an application architecture designed by Facebook to combat/work better with Reacts unidirectional data flow
- It is more of a pattern that a framework
- It is a wat of passing information through an application

Flux uses a central "Store" to store the shared application state, uses dispatchers to dispatch actions that change the state of the store, and it uses views to display the data held in the store


## Basic Flux Flow

![flux](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-explained-1300w.png)

# Store

manages a collection of objects that represent the application state for a particular domain within the application

An application can have multiple stores, each with its own reponsibility
- They are thought of as somewhat similarly to models in the MVC architecture
- When a store is updated, it can alert components anywhere in the application that are relying on that data to update

# Dispatcher:
the dispatcher is the central hub that manages the flow in a flux application
- it is a function that is called to update information from an action compared to the old information in the store
- it gives the store a new representation of the data to hold

The central Dispatcher can route different actions to the stores across the application
- each store registers itself with the central dispatcher

# Actions:
simple Javascript Object that contains a type of the actions, and any payload of data. These are sent to the dispatcher, and handled in the correct reducers. The way they handled, depends on the type of the action

# Reducers:
functions that calculate the new state of the store based on the previous state and the action provided

# View:
what end users see (components)

# More benefits vs Drawbacks of Flux

## Benefits

Information is held globally:
- No more lifting state
- Particlular data can be subscribed to by components so they are informed when the data is updated
- Avoid prop drilling

Single Source of Truth
- Information is held in a store, and not duplicated across multiple components

Data in the store is immutable
- This makes it easy to compare across updates and test

## Drawbacks of Flux

Can be complicated to implement with multiple levels that need information

Does not work with async logic flows out of the box
- To make async calls the pattern has to be expanded

# Redux

redux is an implementation of the Flux design pattern for Javascript Applications
- it is not built specifically for React, however, there is a library for react
- `npm i redux`

# Redux Libraries and Tools

## React-Redux

The official library for using Redux with React, it has all the connections needed to specifially use redux with React
- `npm i react-redux`

## Redux Toolkit (Perferred Method):

A library of additional support functions that can make using redux easier and conform more to the best practices
- `npm i @reduxjs/toolkit`

Quick start documentation: https://redux-toolkit.js.org/tutorials/quick-start

## Redux DevTools (Optional):

A browser extension that lets you see changes made to your central store over time in the browsers console

# Redux Application Flow:

1. Create a base store for the application to hold all of the central/application state, the store will take in reducers to manipulate the state of the application

2. When the user interacts with the page, and action will be dispatched. The action will be created with a `type` and sometimes with a `payload`, this action gets dispatched by the component

3. The dispatched action gets sent to the store, where it gets deligated to the correct reducer to handle the action

4. Reducer determines how to handle the action based on its type. With Redux toolkit, we will define these reducers in a slice for that particular state
- Reducers should be pure functions, taking in data, and returing the state without any side effects. This mean that the reducer itself, shouldn't make HTTP calls, or do async logic.
- This is does so that the code is predictible. Testing libraries, and Redux Webtools, and other rely on this to ensure that they function properly.

5. The reducer returns the new state, then the state of the store is updated, any component subscribed to the store will be notified and the information on the view is updated

# Thunks

functions that can used instead of object to promise that an objcet will be given at a later time
- allows us to delay the synchronous nature of the flux design pattern while you retrieve information

Thunks are not implemented by default in base redux, and have to be included if you are going to use them

But redux toolkit does include them by default

Promises are built using thunks under the hood, along with additional functionality. The additional functionality causes side effects making promises not applicable for Redux


# Additional Resources

- [Use Context Hook](https://www.w3schools.com/react/react_usecontext.asp)

- [What is Redux?](https://www.youtube.com/watch?v=_shA5Xwe8_4)

- [React Redux](https://react-redux.js.org/)

- [Redux Toolkit](https://redux-toolkit.js.org/)

- [Redux Devtools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)