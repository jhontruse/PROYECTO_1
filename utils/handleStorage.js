const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;
    console.log("🚀 ~ file: storage.js ~ line 12 ~ pathStorage", pathStorage);
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    console.log("🚀 ~ file: storage.js ~ line 17 ~ ext", ext);
    const filename = `file-${Date.now()}.${ext}`;
    console.log("🚀 ~ file: storage.js ~ line 19 ~ filename", filename);
    cb(null, filename);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
