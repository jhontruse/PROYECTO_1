const { tracksModel } = require("../models");

const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  console.log("🚀 ~ file: tracks.js ~ line 5 ~ getItems ~ data", data);
  res.send({ data });
};
const getItem = (req, res) => {
  const data = ["Hola mundo"];
  res.send({ data });
};
const createItems = async (req, res) => {
  const { body } = req;
  console.log("🚀 ~ file: tracks.js ~ line 14 ~ createItems ~ body", body);
  const data = await tracksModel.create(body);
  res.send({ data });
};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
