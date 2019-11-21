import express = require('express');
import path = require("path");
import ejs from "ejs"

// @ts-ignore
import manifest from '../dist/parcel-manifest.json';

const app: express.Application = express();
app.set('view engine', "ejs");
app.set('views', path.resolve("./server/views"));



//* setting the static directory
app.use('/master', express.static(path.resolve("./dist")  ));


app.get('/', function (req : express.Request, res : express.Response) {
    //* TODO :: Check the cookies , session and redirect
    res.send('Hello World!');
});


/*
    TODO :: point de rupture media query : > 975px
 */



//* TODO :: Review and refactor the Typescript for connexion
app.get("/connexion", (req : express.Request, res : express.Response) => { res.render("connexion.ejs", {manifest}); });
//* TODO :: Add the pointer click on the elements
app.get("/main", (req : express.Request, res : express.Response) => { res.render("main.ejs", {manifest}) });
app.get("/todo/:chunk", (req : express.Request, res : express.Response) => { res.render("todo.ejs", {manifest}) }); //* TODO :: Add the content of the todo
app.get("/categories", (req : express.Request, res : express.Response) => { res.render("categories.ejs", {manifest}) });

app.get("/test", (req : express.Request, res : express.Response) => {
    res.send(req.query); // this is params form GET
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
