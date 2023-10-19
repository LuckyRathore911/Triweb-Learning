# MongoDB

_MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas, making it easy for developers to store structured or unstructured data._

## Commands

**To connect to the MongoDB cluster using shell enter the following command in command prompt, hit enter and then enter password:**

`mongosh "mongodb+srv://triweb-cluster.bmmtese.mongodb.net/" --apiVersion 1 --username luckyrathoreofficial`

**To view all databases in the current cluster:**
`show dbs`

**To create a Collection:**
`db.createCollection("firstCollection")`

**To select a database and view its collections:**
`use database_name`
`show collections`

**To insert a record; can also create the collection if not already present:**

`db.firstCollection.insertOne({name:"Lucky",UG:"BTech CST"})`

**To insert many records:**

`db.firstCollection.insertMany([{name:"Anamika",mobile:"9999999999"},{name:"Aakarsh",email:"aakarsh@gmail.com",phone:"8888888888"}])`

**To view all records:**
`db.firstCollection.find()`

**To view a specific record:**
`db.firstCollection.find({name:"Lucky"})`

**To update a record:**
`db.firstCollection.updateOne({name:"Anamika"},{$set:{mobile:"7777777777"}})`

**To update many records:**
`db.firstCollection.deleteOne({name:"Anamika"})`

**To delete a record:**
`db.firstCollection.deleteMany({})`

## Another Database

`mongosh "mongodb+srv://triweb-cluster.bmmtese.mongodb.net/noSQL" --apiVersion 1 --username luckyrathoreofficial`

`db.customers.insertMany([{name:"Lucky",contact:9999999999},{name:"Aakarsh",contact:8888888888},{name:"Suhana",email:"suhana@gmail.com",contact:7777777777},{name:"Gulzar",email:"gulzar@gmail.com"}])`

`db.books.insertMany([{book:"CinOne",price:350},{book:"Core Java",price:400},{book:"You Can Win",price:250}])`

`db.customers.find({_id:ObjectId("6530118ac0b4b3d97aeb9e95")})`

`db.customers.updateOne({_id:ObjectId("6530118ac0b4b3d97aeb9e95")},{$set:{favouriteBooks:[ObjectId("6530141bc0b4b3d97aeb9e9c"),ObjectId("6530141bc0b4b3d97aeb9e9e")]}})`

**Aggregate Function to join data from 2 tables:**

`db.customers.aggregate([{$lookup:{from:"books",localField:"favouriteBooks",foreignField:"_id",as:"Customer's Favourite Books"}}])`

**Validation in Schema:**

```bash
db.createCollection('products',{validator:{
    $jsonSchema:{
        bsonType:"object",
        required:['title','name','owner','comments'],
        properties:{
            title:{
                bsonType:"string",
                description:"Title must be a string"
            },
            name:{
                bsonType:"string",
                description:"Name must be a string"
            },
            owner:{
                bsonType:"objectId",
                description:"id of customer"
            },
            comments:{
                bsonType:"string",
                description:"Comments must be a string"
            }
        }
    }
}})
```

`db.products.insertOne({title:"Gadget",name:"Laptop",owner:ObjectId("6530118ac0b4b3d97aeb9e96"),comments:"Light and Portable"})`

**Ordered Insert:**

_If validation fails in one insertion then previous insertions are not reverted and the record after failed validation is also not inserted. Title in second record is missing so it inserts only the first record and skips second as well as third record._

```bash
db.products.insertMany([{title:"Gadget",name:"Laptop",owner:ObjectId("6530118ac0b4b3d97aeb9e95"),comments:"8 GB RAM"},
{name:"Laptop",owner:ObjectId("6530118ac0b4b3d97aeb9e96"),comments:"8 GB RAM"},
{title:"Gadget",name:"Laptop",owner:ObjectId("6530118ac0b4b3d97aeb9e97"),comments:"i3 Processor"}])
```

**Handling ordered insert:**

```bash
db.products.insertMany([{name:"Phone",owner:ObjectId("6530118ac0b4b3d97aeb9e97"),comments:"2 GB RAM"},
{title:"Gadget",name:"Laptop",owner:ObjectId("6530118ac0b4b3d97aeb9e96"),comments:"Black with backlit keyboard"},
{title:"Gadget",name:"Laptop",owner:ObjectId("6530118ac0b4b3d97aeb9e95"),comments:"i7 Processor"}],
{ordered:false})
```

**Operators:**

In:
`db.books.find({price:{$in:[400,500]}})`

Not In:
`db.books.find({price:{$nin:[400,500]}})`
