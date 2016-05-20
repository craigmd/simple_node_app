const Profile = require("./profile.js");
const renderer = require('./renderer.js');
const commonHeaders = {'Content-Type': 'text/html'};
//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {
    //show search
    response.writeHead(200, commonHeaders);
    renderer.view('header', {}, response);
    renderer.view('search', {}, response);
    renderer.view('footer', {}, response);
    response.end()
  }
  //if url == "/" && POST
    //redirect to /:username
}

function user(request, response) {

  const username = request.url.replace("/", "");

  if(username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view('header', {}, response);

    const studentProfile = new Profile(username);

    studentProfile.makeRequest((error, profileJSON) => {

      if(error) {
        renderer.view('error', {errorMessage: error.message}, response);
        renderer.view('search', {}, response);
      } else {
        const values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javascriptPoints: profileJSON.points.JavaScript
        }

        renderer.view('profile', values, response);
      }

      renderer.view('footer', {}, response);
      response.end();
    });
  }
}

module.exports.home = home;
module.exports.user = user;
