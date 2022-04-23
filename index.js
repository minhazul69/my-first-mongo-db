const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
app.use(cors());
app.use(express.json());
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
    app.post("/user", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
      // console.log(`A document was inserted with the _id: ${result.insertedId}`);
    });
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
