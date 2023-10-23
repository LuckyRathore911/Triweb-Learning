# Quiz Manager App Backend

## Commands

```bash
yarn init
yarn add typescript
yarn add express
tsc --init
yarn add @types/express
yarn add mongoose
yarn add --dev ts-node
yarn add --dev nodemon
yarn add bcryptjs
```

`ts-node` builds automatically while `nodemon` builds as well as executes automatically.

## nodemon.json

```bash
{
    "env":{
        "CONNECTION_STRING":"",
        "PORT":''
    },
    "watch":["src"],
    "ext":"ts,json",
    "exec":"ts-node ./src/index.ts"
}

```
