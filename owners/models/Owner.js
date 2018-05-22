class Owner {
  constructor(mongoose) {
    const ownerSchema = mongoose.Schema({
      nom: {
        type: String,
        required: true
      },
      prenom: {
        type: String,
        required: true
      },
      civility: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
    });

    this.owner = mongoose.model('Owner', ownerSchema);
  }

  read(filters) {
    const query = this.owner.find(filters);
    return query.exec();
  }

  create(body) {
    return this.owner.create(body);
  }
}

module.exports = Owner;
