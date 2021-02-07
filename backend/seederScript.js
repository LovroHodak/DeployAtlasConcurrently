require("dotenv").config();

const productData = require("./data/shopItems");
const Product = require("./models/Product.model");
require('./config/db')

Product.deleteMany({}) 
  .then(() => {
    console.log("Products deleted");
    Product.insertMany(productData)
      .then(() => {
        console.log('Products added')
        process.exit()
      })
      .catch((err) => {
        console.log('Problems with adding: ', err)
      })
  })
  .catch((err) => {
    console.log("Smth went wrong: ", err);
});