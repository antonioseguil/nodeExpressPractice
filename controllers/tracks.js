const { TracksModel } = require("./../models");

/**
 * Obtener la lista de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await TracksModel.find({});
  return res.send(data);
};

/**
 * Obtener un dato en especifico
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Crear un item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  const data = await TracksModel.create(body);
  console.log(body);
  res.json(data);
};

/**
 * Actualizar un item
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Borrar un elemento
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
