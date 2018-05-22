const getOwners = async (ownerModel, query) => {
  const owners = await ownerModel.read(query);
  return owners;
}
module.exports = (req, res) => {
  const { Owners } = req.models;
  console.log('Try to get owner', req.query);
  getOwners(Owners, req.query || {})
    .then((owners) => {
      res.json(owners);
    })
    .catch(error => {
      console.trace(error);
      res.sendStatus(500);
    });
};
