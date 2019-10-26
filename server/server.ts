import express = require('express');
import path = require("path");
import ejs from "ejs";

import manifest = require("../dist/parcel-manifest.json");

// Create a new express application instance
const app: express.Application = express();
app.set('view engine', "ejs");
app.set('views', path.resolve("./server/views"))



//* setting the static directory
app.use('/master', express.static(path.resolve("./dist")  ));


app.get('/', function (req : express.Request, res : express.Response) {
  res.send('Hello World!');
});
app.get("/connexion", (req : express.Request, res : express.Response) => {
  res.render("connexion.ejs", {manifest : manifest});
});

app.post("/main")

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
