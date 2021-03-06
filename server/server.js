const express = require("express");
const app = express();
const cors = require('cors')
require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5000;
//importing my routes from the routes folder. 
const routes = require("./routes/");
app.use(cors());
app.use(express.json());
app.use(routes);
const dbo = require("./db/conn");

const dbConnect = () => {
    dbo.connectToServer(function (err) {
        if(err) console.error(err);
    })
    console.log(`Server is running on port: ${port}`);
}

app.listen(port, dbConnect());