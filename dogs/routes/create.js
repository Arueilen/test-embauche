const createDog = async (dogModel, body) => {
  const dogs = await dogModel.create(body);
  return dogs;
}

module.exports = (req, res) => {
  const { Dogs } = req.models;
  console.log('Try to create dog', req.body);
  createDog(Dogs, req.body)
    .then((dogs) => {
      res.json(dogs);
    })
    .catch(error => {
      console.trace(error);
      res.sendStatus(500);
    });
};
