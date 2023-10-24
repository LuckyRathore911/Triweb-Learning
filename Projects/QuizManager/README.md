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
yarn add jsonwebtoken   
yarn add @types/jsonwebtoken
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

`https://www.base64decode.org/` to decode base64 encoded password
`https://jwt.io/` to decode token

Steps for authentication and authorization using jwt token:
- Add the token generated during login to the bearer token in Authorization for "get user API" in Postman.
- Get this header using `req.get('Authorization')` in code.