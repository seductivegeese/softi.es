var fs = require("fs");
var _ = require("lodash");
var handlebars = require("handlebars");

var template = handlebars.compile(fs.readFileSync("template.html", "utf8"));
var people = JSON.parse(fs.readFileSync("people.json", "utf8"))["people"];
var softiesAtHeart = _.filter(people, function(person) { return person["atHeart"]; });
var softies = _.filter(people, function(person) { return !person["atHeart"]; });

fs.writeFileSync("index.html", template(
  {
    "group": {
      "softies": {
        label: "Softies",
        people: softies
      },
      "softiesAtHeart": {
        label: "Softies At Heart ❤️",
        people: softiesAtHeart
      }
    }
  }
));
