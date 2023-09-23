const express = require("express");

const app = express();

app.use(express.json()); // to parse json data from request body

app.get("/get", (req, res) => {
  console.log(req.body);
  // undefined ...without app.use
  // { a: 2, b: 3 } ...with app.use

  x = req.body.a;
  y = req.body.b;
  res.send(`Addition: ${x + y}`);
  //   res.send("I am a response"); //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
});

app.post("/post", (req, res) => {
  console.log(req.body);
  // undefined ...without app.use
  // { a: 2, b: 3 } ...with app.use

  x = req.body.a;
  y = req.body.b;
  res.send(`Addition: ${x + y}`);
});

app.listen(3000);

/*
Passed the following to postman: body: raw: json
{
    "a":2,
    "b":3
}
*/
