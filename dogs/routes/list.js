const getDogs = async (dogModel, query) => {
  const dogs = await dogModel.read(query);
  return dogs;
}
module.exports = (req, res) => {
  const { Dogs } = req.models;
  console.log('Try to get dogs', req.query);
  getDogs(Dogs, req.query || {})
    .then((dogs) => {
      res.json(dogs);
    })
    .catch(error => {
      console.trace(error);
      res.sendStatus(500);
    });
};
