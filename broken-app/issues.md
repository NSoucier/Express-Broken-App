# Broken App Issues

- changed variable to const instead of let and var
- added console.log to app.listen so that it displays a message of which port the server is running on and when it begins to run 
- moved function that fetches api to a helper file to clean up the app.js route handler file 
- changed api request to be asynchronous so that code waits for response before moving on
- made app.post callback function asynchronous so that it doens't return a pending promise
- added app.use(express.json()) so that it parses incoming requests with JSON
- fixed try/catch so that it catches error as an argument ("catch(err)")
- added error handler route and class 
