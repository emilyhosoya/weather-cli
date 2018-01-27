const UserSearch = require("./userSearch");
const WeatherAdmin = require("./weatherAdmin");

if (process.argv[2] === "user") {
  const user = new UserSearch();

  console.log(user);
  user.getWeather();
} else if (process.argv[2] === "admin") {
  const admin = new WeatherAdmin();
  admin.getData();
}
