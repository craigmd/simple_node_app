const EventEmitter = require('events').EventEmitter;
const https = require('https');
const http = require('http');

class Profile extends EventEmitter {
  constructor(username) {
    super();
    this._username = username;
  }

  makeRequest(cb) {
    const options = {
      host: 'teamtreehouse.com',
      path: `/${this._username}.json`,
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    const callback = (response) => {
      let body = '';

      response.on('data', (chunk) => {
        body += chunk;
      });

      response.on('end', () => {
        try {
          let profile = JSON.parse(body);
          cb(null, profile);
        } catch (error) {
          cb(error, {});
        }
      });

      response.on('error', (error) => {
        cb(error, {});
      });
    }

    const request = https.request(options, callback).end();
  }
}

module.exports = Profile;
