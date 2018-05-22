const axios = require('axios');

module.exports = (req, res) => {
  console.log('Try to create dog', req.body);
  axios.post(`http://${DOG_HOST}`, req.body)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(function (error) {
      console.trace(error);
      res.sendStatus(500);
    });
};
