### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
 A way to manage asynchronouse code in JavaScript is to use Promises. Promises are javascript objects that are guarantees of a future value and can return 'pending', 'resolved' or 'rejected'. A way to use promises in javascript is with the axios library, using keywords like 'async' and 'await'. 

- What is a Promise?
 A promise is a guarentee of a future value and can have a state of resolved, pending or rejected. Promises are used for asynchronous code in JavaScript.

- What are the differences between an async function and a regular function?
 The difference is that an async function means there is a promise in there and will eventually return a promise. Inside this function will typically have asynchronous code and use the 'await' keyword to pause the execution of the async function until the promise gets resolved. 

- What is the difference between Node.js and Express.js?
 Node.js is a javascript environment that runs server-side and allows you to run code, whereas Express.js is similar to Flask in that it handles the framework of the app and it's route methods.

- What is the error-first callback pattern?
 The error-first callback pattern is a convention of how to structure your code when handling errors. The callback function should have 'error' listed as the first parameter and the code that handles the error should go first before the code that performs the functions as if no errors were thrown. 

- What is middleware?
 Middleware is when you have a function that runs before a route is executed, in the middle of the request and response cycle. These middleware functions have access to the request and response and and execute prior to the route handler. 

- What does the `next` function do?
 The next functions ensures that the next route will be executed. If the next function has an argument passed in, it will automatically treat it as an error, bypassing the normal app route and moving on to the error handler route. If next is not used, the execution will stop there and we will not make it to the next route. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
 It would be advantageous to use Promise.all in this scenario since we are making several independent requests in parallel. Currently, each request has to wait for the previous request to finish executing before it can begin to make a request...this can be slow. In addition, there is no error handling for the requests (like a 'try/catch' statement).

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
