const EventEmitter = require("events");
const https = require("https");
const http = require("http");

class Profile extends EventEmitter {
  constructor(username) {
    this.username = username;
  }



  makeRequest(){
    const options = {
      host: 'teamtreehouse.com',
      path: `/${this.username}`,
      method: 'GET',
      headers: 'Content-Type': 'application/json'
    };

    const callback = function(response) {
      
    }

    https.request(options, callback).end();
  }
}
