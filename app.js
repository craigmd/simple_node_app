const http = require('http');
const router = require('./router.js');

//Problem: We need a simple way to look at a user's badge count and JS points from a web browser
//Solution: Use Node to perform the profile lookups and serve out remplates via HTTP

//create a web server
http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
}).listen(1337, '127.0.0.1');


//function that handles the reading of the files/templates and merge in values
  //read from file/template and get a string
    //merge values into string
