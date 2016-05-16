const Profile = require('./profile.js');

//handle http route GET/ i.e. "home"
function home(request, response) {
  //if the url == "/" && GET
  if(request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
  }
  //if url == "/" && POST
    //redurect to username
}

//handle http route GET/:username i.e. "/craigdickson"
function user(request, response) {
  //if the url == /...
  const username = request.url.replace('/', '');

  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Header\n');

    //get json from treehouse
    const studentProfile = new Profile(username);
    studentProfile.makeRequest( (err, data) => {

    });

    // //on "end"
    // studentProfile.on('end', (profileJSON) => {
    //   //store the values which we need for our app
    //   const values = {
    //     avatarUrl: profileJSON.gravatar_url,
    //     username: profileJSON.profile_name,
    //     badges: profileJSON.badges.length,
    //     javascriptPoints: profileJSON.points.JavaScript
    //   }
    //   //simple response
    //   response.write(values.username + ' has ' + values.badges + '\n');
    //   response.end('Footer\n');
    //
    // });
    // //on "error"
    // studentProfile.on('error', (error) => {
    //   //show "error"
    //   response.write(error.message + '\n')
    //   response.end('Footer\n');
    //
    // });
  }
}

module.exports.home = home;
module.exports.user = user;
