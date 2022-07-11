const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift(); //TODO tracks.js [tracks , js]
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  console.log("🚀 ~ file: index.js ~ line 12 ~ fs.readdirSync ~ file", file);

  const name = removeExtension(file); //TODO user, storage, tracks
  if (name !== "index") {
    console.log("🚀 ~ file: index.js ~ line 16 ~ fs.readdirSync ~ name", name);

    router.use(`/${name}`, require(`./${file}`)); //TODO http://localhost:3001/api/tracks
  }
});
module.exports = router;
