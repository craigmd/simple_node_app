const http = require('http');

//Problem: We need a simple way to look at a user's badge count and JS points from a web browser
//Solution: Use Node to perform the profile lookups and serve out remplates via HTTP

//1. create a web server
http.createServer((request, response) => {
  homeRoute();
}).listen(1337, '127.0.0.1');

//2. handle http route GET/ i.e. "home"
function homeRoute(request, response) {
  //if the url == "/" && GET
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Header\n');
  response.write('Search\n');
  response.end('Footer\n');
    //show search field
  //if url == "/" && POST
    //redurect to username
}


//3. handle http route GET/:username i.e. "/craigdickson"
  //if the url == /...
    //get the json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show "error"

//4. function that handles the reading of the files/templates and merge in values
  //read from file/template and get a string
    //merge values into string
