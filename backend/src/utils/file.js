const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storageAvatar = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "avatar",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const storagePoster = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "poster",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const uploadAvatar = multer({ storage: storageAvatar });
const uploadPoster = multer({ storage: storagePoster });

module.exports = { uploadAvatar, uploadPoster };

