const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const database = new MongoClient("mongodb://root:example@database:27017");

app.get("/health", (_req, res) => {
    console.log("RECEIVED HEALTH");

    res.writeHead(200);
    res.end("OK");
});

app.get("/", (_req, res) => {
    console.log("RECEIVED REQUEST");

    database.connect(() => {
        const users = database.db("app").collection("users");
        users.find().toArray((err, records) => {
            res.writeHead(200);
            res.end(JSON.stringify(records));
        });
    });
});

app.listen(8080, () => {
    console.log("I AM READY")
});
