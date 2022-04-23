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
async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");
    const user = { name: "Minhajul Alam", email: "minhajul@gmail.com" };
    const result = await userCollection.insertOne(user);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    // await client.close()
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Mongo Db first website");
});
// userName: dbusername01
// password: PwoyUhdkoLH4EGnR

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
