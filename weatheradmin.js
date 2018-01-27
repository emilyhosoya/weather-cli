const fs = require("fs");

class WeatherAdmin {
  constructor() {
    console.log("You are an admin!");
  }

  getData() {
    fs.readFile("./log.txt", "utf8", function(err, data) {
      if (err) throw err;
      console.log(data);
    });
  }
}

module.exports = WeatherAdmin;
