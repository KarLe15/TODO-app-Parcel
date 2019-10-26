import express = require('express');
import path = require("path");

// Create a new express application instance
const app: express.Application = express();

//* setting the static directory
//  TODO :: to change if necessary
app.use('/master', express.static(path.resolve("./dist")  ));


app.get('/', function (req : express.Request, res : express.Response) {
  res.send('Hello World!');
});
app.get("/connexion", (req : express.Request, res : express.Response) => {
    // res.sendFile(path.resolve("./test.html"));
    // res.send(path.resolve("./dist/connexion.html"));
    // res.sendFile("/media/karim/Données/Projects/SiteWeb/TODO APP/dist/connexion.html");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
