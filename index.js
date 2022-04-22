const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dbusername01:PwoyUhdkoLH4EGnR@cluster0.dbx4u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("db conected");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Mongo Db first website");
});
// userName: dbusername01
// password: PwoyUhdkoLH4EGnR

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
