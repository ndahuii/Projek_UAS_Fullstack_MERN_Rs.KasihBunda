const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("./utils/db/index");

const app = express();
const port = 8082;

const Pasien = require("./models/pasien/index");
const { urlencoded } = require("express");

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb://127.0.0.1:27017";
const dbName = "RSKasih";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) return console.log("error");
});

app.get("/pasien", async (req, res) => {
  const dataPasien = await Pasien.find();
  res.send(dataPasien);
});

app.get("/pasien/:id", async (req, res) => {
  const dataPasien = await Pasien.findOne({ _id: req.params.id });
  res.status(200).send(dataPasien);
});

app.post("/pasien", async (req, res) => {
 try {
    await Pasien.create(req.body);
    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send("Daftar gagal!!");
  }
});

app.delete("/pasien/:id", async (req, res) => {
 try {
   await Pasien.deleteOne({ _id: req.params.id });
       res.status(200).send("berhasil");
 } catch (error) {
    res.status(400).send("Hapus gagal!!");
  }
});

app.post("/pasien/edit", async (req, res) => {
  try {
    const data = await Pasien.updateOne({ _id: req.body._id }, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send("Pasien gagal edit!!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
