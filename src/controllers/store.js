const Stores = require("../models/Stores");

module.exports = {
  async index(req, res) {
    const store = await Stores.findAll();

    try {
      res.status(201).send(store);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async store(req, res) {},
  async find(req, res) {
    const storeId = req.params.id;

    try {
        let store = await Stores.findByPk(storeId);

        res.status(201).send(store);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
  },
  async update(req, res) {},
  async delete(req, res) {},
};
