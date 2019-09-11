const express = require('express'); //common js
const app = express(); // generate an express app


app.get('/', (req, res) => {
  res.send({bye: 'buddy'});
}); // 

const PORT = process.env.PORT || 5000; //for heroku
app.listen(PORT); //tell node to listen to port 5000 