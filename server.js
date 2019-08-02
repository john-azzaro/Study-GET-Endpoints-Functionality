
const express = require('express');                                                          
const morgan = require('morgan');                                                         // we'll use morgan to log the HTTP layer 
const bodyParser = require('body-parser');                                                // use body-parser's json() method to parse JSON data sent in requests to this app

const {ShoppingList} = require('./models.js');                                            // we import the ShoppingList model, which we'll interact with in our GET endpoint

const jsonParser = bodyParser.json();                                                     
const app = express();                                                                     // use app to run express.


app.use(morgan('common'));                                                                 // log the http layer when we use node (and nodemon) while running.


ShoppingList.create('beans', 2);                                                            // demonstration list items.Note that normally you wouldn't do this. Usually your server will simply expose the state of the underlying database.
ShoppingList.create('tomatoes', 3);
ShoppingList.create('peppers', 4);

// 
// 
app.get('/shopping-list', (req, res) => {                                                  // when the root of this route is called with GET, returnall current ShoppingList items by calling `ShoppingList.get()`
  res.json(ShoppingList.get());
});

app.listen(process.env.PORT || 8080, () => {                                                // Listen on port 8080.
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
