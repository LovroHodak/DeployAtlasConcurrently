require('dotenv').config()
require('./config/db')
const express = require('express')

const app = express()





var path = require('path');

//ENABLE FRONT+BACK
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["http://127.0.0.1:3000"],
  })
);

//REQ.BODY + BODY.PARSER => to get serverside console.log!! ALWAYS
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Use body parser. To be able parse post request information
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //crucial for post requests from client

//ROUTES
const productsRoutes = require('./routes/products.routes')
app.use('/api', productsRoutes)

app.use(express.static(path.join(__dirname, 'public')));






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}, dirname ${__dirname}`))