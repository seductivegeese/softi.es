var fs = require("fs");
var handlebars = require("handlebars");

var template = handlebars.compile(fs.readFileSync("template.html", "utf8"));
var people = JSON.parse(fs.readFileSync("people.json", "utf8"));
fs.writeFileSync("index.html", "<!-- This is a generated file! Please edit template.html -->\n");
fs.appendFileSync("index.html", template(people));
