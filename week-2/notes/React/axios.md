# React - AJAX Requests

To create requests to a backend service, we can either use fetch or Axios

## Axios

a promise based HTTP client for browsers or NodeJS

It is supported by most modern browsers, and comes with the following features
- Intercepting and transforming request and response data
- Automatically parses JSON response data
- Canceling of requests
- Better error handling
- Built in protection vs cross site request forgery

## Axios vs Fetch

Fetch is tied to the window object, which doesn't make sense in a server environment like NodeJS

Axios works more cleanly from the server side

Axios will automatically stringify and parse request bodies and response bodies to and from JSON

Axios can cancel, timeout, or interupt HTTP requests before they are finished, fetch cannot

Ultimately it is up to you to choose what you would like to use with React

To install axios for use in our React application: `npm i axios`

# Additional Resources

- [Axios](https://axios-http.com/docs/intro)