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
