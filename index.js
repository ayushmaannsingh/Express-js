const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
    
});

// app.use((req, res) => {
//    // console.log(req);
    
//     console.log("request received");
//    // res.send("this is a basic response");
//    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
    
// });

app.get("/", (req, res) => {
    res.send("hello, i am root ayush singh");
});

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you snet a post request");
// });

// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     res.send(`welcome to the pages of @${username}.`);
// });

 app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
 });