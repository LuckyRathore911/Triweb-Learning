1. Node.js is a JavaScript runtime.

2. It enables JavaScript to run on servers or any machine.

3. It is single-threaded; runs on the basis of an event loop.

4. V8 engine (made with C++) compiles Node.js code with the help of JavaScript to convert to machine code.

5. It is an asynchronous, event-driven programming language.

6. When to use Node.js?

- event-based real-time web applications
  - chat application
  - streaming server

7. When to not use Node.js?

- scenerios requiring long processing time
  - ML/AI projects

8. Latest versions of Node.js and npm in your project.

9. We already have PHP, Java, Python, Ruby, etc. then why to use Node.js?

- speed
- easy (same language across the tech stack)
- real-time data

10. Area where PHP is better than Node.js.

- server cost/hosting

11. Client-server interaction.

- Client
  - HTML
  - CSS
  - JavaScript
  - input validation
- APIs
  - request
  - response
- Server (Role of Node.js)
  - database connection
  - input validation (in case the data is lost or modified in the network)
  - authentication
  - authorization
  - business logic

12. Scenerios when node.js works and the client-server interaction is not needed.

- transferring data from one database to another
- automatic emails (birthday wishes, etc.), push notifications, etc.

13. Node.js with MySQL or MongoDB?

- when "read" operations are more then prefer MongoDB or any NoSQL database, eg, user data in e-commerce website.
- when "write" operations are more then prefer MySQL or any SQL database, eg, transaction details.

14. REPL

- Read Eval Print Loop
- a loop is created to try small features after writing "node" in the command prompt,
  which is exited by ".exit" or twice "Ctrl + D" or twice "Ctrl + C"

```bash
> a=5
5
> b=4
4
> a && b
4
> a || b
5
```

15. Event loop.

- because of the event loop model, Node.js never blocks: no deadlock like situation because it is single threaded

- collection and processing of the events: thread gives each event for processing to the event loop, which processes small events and gives intensive tasks (such as working with file systems or databases, computations, etc.) to the worker pool to process. The worker pool returns the completed tasks via a callback return (event loop gives work to worker pool via "Register Callback" and the pool sends message "operation complete")

- execution of queued sub tasks: a queue is formed to tell what tasks follow the current task

- responsible for executing the code: node thread does not do code execution, the event loop does it making the thread free from being blocked

16. Loop Queue.

- a queue of tasks waiting to be executed
- the queue waits synchronously for an event to arrive, sends it for processing and waits for another event

17. [Destructuring of object and array](./destructuring.js)

18. [Arrow function](./arrowFunction.js)

- it is an anonymous function and is stored in a variable, hence given a name, explicitly
- it does not have its own "this"

19. [call](./call.js)

- it provides a new value of "this" to a function
- helps in inheriting a method

20. [setImmediate](./setImmediate.js)

- not immediate like its name
- its callback is placed in the "CHECK QUEUE" of the next cycle of the event loop
- CHECK QUEUE occurs later than the TIMER QUEUE

21. [setTimeout](./setTimeout.js)

- its callback is placed in the "TIMER QUEUE" of the next cycle of the event loop

22. [process.nextTick](./process.nextTick.js)

- it is executed after the current code, which is being executed
- it is watched at the very beginning of the subsequent cycles of the event loop, before any other queue

23. [apply](apply.js)

- it is like call, used to inherit a function but with a difference
- in call(), we pass arguments whereas in apply(), we pass array

24. [bind](./bind.js)

- to make a function be called with a particular 'this' no matter how it is called
- in call() and apply() we bind 'this' and execute the function at that particular time while in bind() we bind 'this' and execute it later

25. [yield](./yield.js)

- the 'yield' keyword is used to pause and resume the generator function

26. [map function](./map.js)

- map creates a new array with the result of calling a new function for every array element
- map does not execute the function for array elements without values

27. [map and weakmap](<./map and weakmap.js>)

- a weakmap accepts only objects as keys
  - it has no 'length' property
  - it does not have any direct method to fetch keys
  - existence of keys is unpredictable
- map accepts only primitive data types as keys

28. Map vs Array

- an array is a collection of items stored at contiguous memory locations
  - the idea is to store multiple items of the same type together
- a map is an associative container that stores elements in a mapped manner
  - used to store records

29. Callback

- asynchronous, equivalent of a function
- helps in non-blocking code
- helps in performance of single-thread Node.js application
- an event of multiple levels of callbacks inside callbacks is called a callback hell
- we use async, await or promise to avoid callback hell (or theoretically, we will work in modules)

30. [new.target](./new.target.js)

- it is a pseudo property which lets us detect whether a function or constructor was called using the "new" operator or not

31. [Object to String and String to Object conversion](<./parse and stringify.js>)

- JSON.stringify() is used to convert an object to string
- JSON.parse() is used to convert a string to object

32. [Can we create an http server using Node.js?](<./http server/http server.js>)

- Yes, we can create it using http package and createServer function

33. [Access Redis using Node client](./redis/redis.js)

34. [Event Emitter](./eventEmitter)

- base of event-driven architecture

35. libuv

- it is a multi-platform C library that provides support for asynchronous I/O based on event loops
- it implements event-loop that efficiently manages and dispatches events, such as I/O operations, event loops, callbacks, etc. and event loop is the core mechanism behind non-blocking and event-driven architecture of Node.js
- it abstracts the underlying operating system's I/O capabilities and provides a consistent API across different operating systems for handling events, timers, file operations, networking, and more
  - it allows Node.js applications to be portable and run seamlessly on different systems
- it also offers threading and synchronization features
  - thread pools and mutexes can be utilized by Node.js for executing computationally intensive tasks or parallelizing certain operations
- its name stands for "Unicorn Velociraptor"

36. [Closure][./closure.js]

- an inner function preserves the environment of its outer function

37. [Routers](./router)

- `npm install node express`

- refer code

38. [NodeJS Mongoose data fetch from MongoDB](./mongoose)

39. [Projection](./mongoose/user-controller.js)

- it allows us to control which fields appear in the documents returned by read operations

40. [Promise](./promise.js)

- it is an object that represents the eventual completion or failure of an asynchronous operation
- it provides a way to handle the outcome of asynchronous code in a clean and efficient manner

41. [Promise.all(iterable)](./promise.all.js)

- it takes an iterable of promises as input and returns a single Promise
- it either waits for all promises to resolve or for any one to reject and then returns the corresponding message

42. [Promise.allSettled()](./promise.allSettled.js)

- it waits for all promises to settle whether resolved or rejected

43. [Promise.any(iterable)](./promise.any.js)

- it waits until one of the promises gets resolved
- if all promises were rejected then there would be an error

```
[AggregateError: All promises were rejected] {
  [errors]: [ 'f1', 'f2', 'f3' ]
}
```

44. [promise.race(iterable)](./promise.race.js)

- it returns whichever promise settled first whether resolved or rejected

45. [Async/Await](<./async await.js>)

- it is a tool for managing asynchronous code in a more readable and structured manner, making it easier to work with promises and asynchronous operations
- await can only be used inside an async function

46. [async-await with immediately invoked function](<./async await with immediately invoked function>)

47. [async await chaining](<./async await chaining>)

48. [Exception handling in async await](<./resolve reject with async await.js>)

- an aync function always returns a promise
  - the value that it resolves is the value returned by the function
  - the promise is rejected if the function throws an error

49. [Parallel Execution with async-await](<./parallel execution with async await.js>)

- await does not block the main flow

50. Debugging Node.js

- type this command in the terminal: `node --inspect=3006 app.js`
- Any browser -> `chrome://inspect/#devices` -> `configure` -> `localhost:3006` -> `Done` -> `Inspect` -> `Ctrl+P` -> select file

51. [Shallow Copy](<./Shallow Copy>)

- it refers to the fact that only one level is copied
- it works fine with arrays or objects containing only primitive values
- ways of shallow copy:
  - spread operator
  - Object.assign()
  - .slice(), only for array
  - Array.from(), only for array

52. [Deep Copy](<./Deep Copy>)

- it constructs a new compound object and then recursively inserts copies of the objects, found in the original, into it
- ways of deep copy:
  - lodash library `npm install lodash`: \_.cloneDeep()
  - ramda library `npm install ramda`: R.clone()
  - JSON.parse(JSON.stringify()) [not preferable]
  - write a custom program
