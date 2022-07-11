const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  const data = await storageModel.find({});
  console.log("🚀 ~ file: tracks.js ~ line 5 ~ getItems ~ data", data);
  res.send({ data });
};
const getItem = (req, res) => {
  const data = ["Hola mundo"];
  res.send({ data });
};
const createItems = async (req, res) => {
  const { body, file } = req;
  console.log("🚀 ~ file: storage.js ~ line 14 ~ createItems ~ file", file);
  const fileData = {
    filenam: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
const data = await storageModel.create(fileData)
console.log("🚀 ~ file: storage.js ~ line 21 ~ createItems ~ data", data)
  res.send({ data });
};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
