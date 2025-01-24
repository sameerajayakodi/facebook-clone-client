const axios = require('axios');

axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});
