## Node.js v16.17.1.

_Node.js is a cross-platform, backend JavaScript runtime environment which runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser._

### REPL in Node.js

**Read Evaluate Print Loop**

_A Read-Eval-Print Loop, or REPL, is a computer environment where user inputs are read and evaluated, and then the results are returned to the user. It's a great way to explore the Node.js features in a quick way._

### Commands

```bash
npm init
npm install --save express mysql2 sequelize
npm install dotenv
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`USER=""`

`PASSWORD=""`

### Debugging

- `node --inspect=3006 index.js`

- brave://inspect/#devices -> configure -> localhost:3006 -> Ctrl+P -> index.js
