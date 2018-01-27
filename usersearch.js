const fs = require("fs");
const weather = require("weather-js");

class UserSearch {
  constructor(name, location) {
    this.name = process.argv[3];
    this.location = process.argv[4];
    this.date = Date.now();
  }

  getWeather() {
    weather.find({ search: this.location, degreeType: "F" }, function(
      err,
      result
    ) {
      if (err) console.log(err);

      console.log(JSON.stringify(result, null, 2));
    });

    const output = `
      Name: ${this.name}
      Location: ${this.location}
      Date: ${this.date}
      ---------------------------`;

    fs.appendFile("./log.txt", output, "utf8", function(error) {
      error ? console.log(error) : console.log("log.txt was updated!");
    });
  }
}

module.exports = UserSearch;
