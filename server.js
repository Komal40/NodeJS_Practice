const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/Person");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/food", function (req, res) {
  var food = {
    chawal: "2kg",
    daal: "3kg",
    chole: "1kg",
  };
  res.send(food);
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("New Person Inserted", response);
    res.status(200).json({ message: "Inserted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/get_person", async (req, res) => {
  try {
    const data = await Person.find();
    if (!data) {
      return res.status(404).send();
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put('/update_person', async(req,res)=>{
  try{
    const data=req.body
    const updateData=await Person.findByIdAndUpdate(data.id, data, {new:true})
    if(!updateData){
      return res.status(404).json({message:"Not Found"})
    }
    res.status(200).json({message:"Updated Successfully", data:updateData})
  }catch(err){
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.delete("/delete_person", async (req, res) => {
  try {
    const id = req.body.id;
    const data = await Person.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001);