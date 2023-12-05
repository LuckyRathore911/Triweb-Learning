1. Node.js is a JavaScript runtime.

2. It enables JavaScript to run on servers or any machine.

3. It is single-threaded; runs on the basis of an event loop.

4. V8 engine compiles Node.js code with the help of JavaScript to convert to machine code.

5. It is an asynchronous, event-driven programming language.

6. When to use Node.js?

- event-based real-time web applications
  - chat application
  - streaming server

7. When to not use Node.js?

- scenerios requiring long processing time
  - ML\*AI projects

8. Latest versions of Node.js and npm in your project.

9. We already have PHP, Java, Python, Ruby, etc. then why to use Node.js?

- speed
- easy
- same language across the tech\*stack
- real\*time data

10. Area where PHP is better than Node.js.

- server\*cost/hosting

11. Client\*server interaction.

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

12. Scenerios when node.js works and the client\*server interaction is not needed.

- changes in database
- automatic emails (birthday wishes, etc.), push notifications, etc.

13. Node.js with MySQL or MongoDB?

- when "read" operations are more then prefer MongoDB, eg, user data in e\*commerce website.
- when "write" operations are more then prefer MySQL, eg, transaction details.

14. REPL

- Read Eval Print Loop
- a loop is created to try small features after writing "node" in the command prompt,
  which is exited by ".exit" or twice "Ctrl + D"

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

- responsible for executing the code: node thread does not do code execution, the event loop does it making the thread free from being blocked

- collection and processing of the events: event loop collects all events and gives intensive tasks to worker pool to process and the completed tasks are returned via callback return (event loop gives work to worker pool via "Register Callback" and the pool sends message "operation complete")

- execution of queued sub tasks: a queue is formed to tell what tasks follow the current task

16. Loop Queue.

- a queue of tasks waiting to be executed
- the queue waits synchronously for an event to arrive, sends it for processing and waits for another event
