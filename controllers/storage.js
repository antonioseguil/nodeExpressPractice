const { StorageModel } = require("./../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener la lista de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await StorageModel.find({});
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
  const { body, file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await StorageModel.create(fileData);
  res.send({data});
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
