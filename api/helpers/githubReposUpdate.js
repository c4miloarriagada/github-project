const axios = require("axios");
const cron = require("node-cron");

const apiRequest = () => {
  return axios
    .put("http://localhost:8080/api/update", {
      _id: process.env.ID,
    })
    .then((res) => res)
    .catch((error) => console.log(error));
};

cron.schedule("* * 21 * *", function () {
  apiRequest();
});

module.exports = {
  apiRequest,
};
