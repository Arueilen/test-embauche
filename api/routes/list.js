const axios = require('axios');

const getOwners = async (query) => {
  console.log(`http://${OWNER_HOST}${query}`);
  const { data } = await axios.get(`http://${OWNER_HOST}${query}`);
  return data;
}

const getDogs = async (owner) => {
  const { data } = await axios.get(`http://${DOG_HOST}/?owner_id=${owner._id}`);
  return data;
}

const mergeDogsWithOwners = async (query) => {
  const owners = await getOwners(query);
  for (let i = 0; i < owners.length; i++) {
    const owner = owners[i];
    owner.dogs = await getDogs(owner);
  }
  return owners;
}

module.exports = (req, res) => {
  console.log('Try to list owner', req._parsedUrl.search);
  mergeDogsWithOwners(req._parsedUrl.search || '')
    .then(owners => {
      res.json(owners);
    })
    .catch((error) => {
      console.trace(error);
      res.sendStatus(500);
    });
};
