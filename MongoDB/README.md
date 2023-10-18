# MongoDB

_MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas, making it easy for developers to store structured or unstructured data._

### Commands

**To connect to the MongoDB cluster using shell enter the following command in command prompt, hit enter and then enter password**

`mongosh "mongodb+srv://triweb-cluster.bmmtese.mongodb.net/" --apiVersion 1 --username luckyrathoreofficial`

**To view all databases in the current cluster**

`show dbs`

**To create a Collection**

`db.createCollection("firstCollection")`

**To select a database and view its collections**

`use database_name`
`show collections`

**To insert a record; can also create the collection if not already present**

`db.firstCollection.insertOne({name:"Lucky",UG:"BTech CST"})`

**To insert many records**

`db.firstCollection.insertMany([{name:"Anamika",mobile:"9999999999"},{name:"Aakarsh",email:"aakarsh@gmail.com",phone:"8888888888"}])`

**To find a record**

`db.firstCollection.find()`

**To find many records**

`db.firstCollection.find({name:"Lucky"})`

**To update a record**

`db.firstCollection.updateOne({name:"Anamika"},{$set:{mobile:"7777777777"}})`

**To update many records**

`db.firstCollection.deleteOne({name:"Anamika"})`

**To delete a record**

`db.firstCollection.deleteMany({})`
