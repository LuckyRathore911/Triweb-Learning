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

Add environment variables in nodemon.json file like this:

```bash
{
  "env":{
      "PORT": ---
  }
}
```

To add TypeScript to the project:

```bash
yarn add typescript
```

To initialize TypeScript:

```bash
tsc --init
```

To let TypeScript know node and express

```bash
yarn add --dev @types/node
yarn add --dev @types/express
```

Uncommment, modify or add the following in tsconfig.json:

```bash
"target": "es6",
"lib": ["ES6"],
"moduleResolution": "node10",
"outDir": "./dist",
"allowSyntheticDefaultImports": true,

,
  "exclude": [
    "dist",
    "node_modules"
  ]

```

Transcompiler/ Transpiler:
`tsc`

or

`tsc --noEmitOnError` which does not produce dist folder when there is an error.

Add scripts to package.json as following:

```bash
,
  "scripts": {
    "start": "node index.js",
    "start:dev": "nodemon ./dist/index.js",
    "build":"tsc"
  }
```
