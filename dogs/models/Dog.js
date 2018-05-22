class Dog {
  constructor(mongoose) {
    const dogSchema = mongoose.Schema({
      nom: {
        type: String,
        required: true
      },
      owner_id: {
        type: mongoose.Schema.ObjectId,
        required: true
      }
    });

    this.dog = mongoose.model('Dog', dogSchema);
  }

  read(filters) {
    const query = this.dog.find(filters);
    return query.exec();
  }

  create(body) {
    return this.dog.create(body);
  }
}

module.exports = Dog;
