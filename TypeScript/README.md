# TypeScript

Command to initialize the project:

```bash
yarn init
```

Commands to add dependencies to the project:

```bash
yarn add express
yarn add --dev nodemon
```

Command to run the project:

```bash
node index.js
```

Add scripts to package.json as following:

```bash
,
  "scripts":{
    "start":"node index.js",
    "start:dev":"nodemon index.js"
  }
```

Command to run the project after defining script:

```bash
yarn start:dev
```
