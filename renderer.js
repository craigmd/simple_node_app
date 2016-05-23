const fs = require('fs');

//Replaces {{}} inside our templates with actual values from JSON
function mergeValues(values, content) {
  for(const key in values){
    content = content.replace('{{' + key + '}}', values[key]);
  }

  return content;
}

//View renderer
function view(templateName, values, response) {
  let fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: 'utf-8'});

  fileContents = mergeValues(values, fileContents);
  response.write(fileContents);
}

module.exports.view = view;
