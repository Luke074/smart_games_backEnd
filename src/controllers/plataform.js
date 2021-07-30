const Plataforms = require("../models/Plataforms");

module.exports = {
  async index(req, res) {
    const plataform = await Plataforms.findAll();

    try {
      res.status(201).send(plataform);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async store(req, res) {},
  async find(req, res) {
    const plataformId = req.params.id;

    try {
      let plataform = await Plataforms.findByPk(plataformId);

      res.status(201).send(plataform);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {},
  async delete(req, res) {},
};
