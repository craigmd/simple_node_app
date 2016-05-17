const Profile = require("./profile.js");

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('Footer\n');
  }
  //if url == "/" && POST
    //redirect to /:username
}

function user(request, response) {

  const username = request.url.replace("/", "");

  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");

    const studentProfile = new Profile(username);

    studentProfile.makeRequest((error, profileJSON) => {

      if(error) {
        response.write(error);
        response.write("Search");
      } else {
        const values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javascriptPoints: profileJSON.points.JavaScript
        }

        response.write(values.username + " has " + values.badges + " badges\n");
      }

      response.end('Footer\n');
    });
  }
}

module.exports.home = home;
module.exports.user = user;
