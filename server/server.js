

let express = require('express');
let app = express();
const port = 5001;

app.use(express.json());

const quoteList = require('./quoteList');

app.use(express.static('server/public'));




//get request to get some data back.  
        //path               request response
//when we visit localhost:5001/quotes
//in our browser, express will call this function.

app.get('/quotes', function(req, res){
  console.log('Request for /quotes was made');
// when quotes is called it sends quotesList in the response
  //send back the list of quotes
  //so we can see it in our browser
  res.send(quoteList)
})

app.post('/quotes', (req, res) => {
  console.log('get a POST request.', req.body);

  let quote = req.body
  quoteList.push(quote)
  res.sendStatus(201);
})

//sets up server that runs continuously
app.listen(port, function() {
  console.log('listening on port', port);
})


//http:localhost:5001/quotes
//this is called | Route | Path | URL

//4 types of routes
//GET
//POST
//PUT
//Delete
// CRUD - Create, Read, Update, Delete

// status codes
// 200 OK - everything worked as expected
// 201 Created - a record was created without issue
// 400 Bad Request - something went wrong in your route. 
// 404 Not Found - you probably have the wrong address. 
// 500 Server Error - something bad happened on the server. 