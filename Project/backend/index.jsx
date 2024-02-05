const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const cors= require('cors')

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})
 

//mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Inventory:xhVT7WIXO2tUtPsL@cluster0.hpg4oyj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
const bookCollections=client.db("BuyerItems").collection("Items");

//insert the books to the db: Post method
app.post("/all-items",async( req, res)=>{
  const data= req.body;
  const result = await bookCollections.insertOne(data);
  res.send=(result);
})

//get the all books from database
app.get("/upload-items", async(req, res)=>{
  const books=  bookCollections.find();
  const result= await books.toArray();
  res.send(result);
})

// update a book to datatbase : patch method
app.patch("/items/:id",async(req,res)=>{
  const id=req.params.id;
  //console.log(id);
const updateBookData=req.body;
const filter= {_id:new ObjectId(id)};
const options = {upsert: true};
})

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})