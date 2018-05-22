const createOwner = async (ownerModel, body) => {
  const owners = await ownerModel.create(body);
  return owners;
}
module.exports = (req, res) => {
  const { Owners } = req.models;
  console.log('Try to create owner', req.body);
  createOwner(Owners, req.body)
    .then((owners) => {
      res.json(owners);
    })
    .catch(error => {
      console.trace(error);
      res.sendStatus(500);
    });
};
