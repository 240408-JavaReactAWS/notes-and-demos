# Jest

Jest is an open source testing framework designed by facebook for use with React, but it is also functional with other JS frameworks

Jest is popular because:
- it is lightweight compared to other testing frameworks
- has robust test writing capababilities
- mocking capabilities (create fake dependent classes to mock API data/user input)
- snapshots to see each render of a component to ensure you are not rendering something errornous and then immediately rendering
- capable of testing the DOM easily

Jest is the default React testing framework, theres nothing to install

## Unit Testing Functions

Jest provides the functions to setup and evaluate our unit tests including
- `describe('description', callback)` which sets up different test suites
- `it('description' callback)` sets up individual tests inside of a test suite,
    - The callback function will include the logic for the individual tests

To test your code, use the evaulation functions provided by Jest such as
- expect()
- toBe()
- toBeTruthy() / toBeFalsey()

## Mocking

Jest allows you to mock functions, return values, modules

This would allow you to test functions that might rely on others, or make api calls

To mock a function, you use the `jest.fn()` method, then chain the `.mockReturnValueOnce()` method to return some value instead of calling the original method

You can also use `jest.spyOn()` method to watch method calls
- With spyOn you are able to use the original implementation of the method or mock the implemenation


To mock an entire module you use the `jest.mock()` method, this allows you to provide a mock implementation to all the functions in a module rather than choosing specific methods

# React Testing Library

React testing library is reacts alternative to enzyme, and the new official way to render react components for testing

It allows developers to see inside of their component after specific moments to test the states and behaviors are as expected

Use the render() function from the library to render the component you are testing

It is also used to select elements from the component to test to be sure they are accurate