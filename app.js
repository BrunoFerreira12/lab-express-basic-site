const express = require("express");

const app = express()

app.use(express.static("public"));

app.get("/home",(request, response) => {
    console.log("the request url,",request.url);
    response.sendFile(__dirname+"/views/home.html");
});
app.get("/about",(request, response) => {
    console.log("the request url,",request.url);
    response.sendFile(__dirname+"/views/about.html");
});
app.get("/works",(request, response) => {
    console.log("the request url,",request.url);
    response.sendFile(__dirname+"/views/works.html");
});
app.get("/photosGallery",(request, response) => {
    console.log("the request url,",request.url);
    response.sendFile(__dirname+"/views/photosGallery.html");
});


app.listen(3000, () => console.log("Server is running"));