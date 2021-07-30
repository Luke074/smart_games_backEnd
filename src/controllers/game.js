const Games = require("../models/Games");

module.exports = {
  async index(req, res) {
    const game = await Games.findAll({
        attributes: ["id", "name", "description", "price", "image"],
        include: [
          {
            association: "Stores",
            attributes: ["id", "name"],
          },
          {
            association: "Plataforms",
            attributes: ["id", "name"]
          },
        ],
      });

    try {
      res.status(201).send(game);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async store(req, res) {},
  async find(req, res) {
    const gameId = req.params.id;

    const game = await Games.findByPk(gameId, {
      attributes: ["id", "name", "description", "price", "image"],
      include: [
        {
          association: "Stores",
          attributes: ["id", "name"],
        },
        {
          association: "Plataforms",
          attributes: ["id", "name"]
        },
      ],
    });

    try {
      res.status(201).send(game);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {},
  async delete(req, res) {},
};
