const express = require("express");
const router = express.Router();
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;
router.use(cors());

router.use(express.static(__dirname + "./public/uploads/"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const connection = require("../DB/connection");
connection();

const User = require("../model/userSchema");
const { error } = require("console");

const dest = "./public/uploads";

let Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `uploads-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

let upload = multer({
  storage: Storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.post(
  "/register",
  upload.single("missPerImg"),
  async (req, res, next) => {

    try {
      const dest = path.join(__dirname, "../public/uploads/");
      const user = new User({
        missPerName: req.body.missPerName,
        missPerAdd: req.body.missPerAdd,
        missPerAge: req.body.missPerAge,
        yourName: req.body.yourName,
        yourPhnNum: req.body.yourPhnNum,
        yourEmail: req.body.yourEmail,
        missPerImg: {
          data: fs.readFileSync(path.join(dest, req.file.filename)),
          contentType: "missPerImg/png/jpeg/jpg",
        },
      });
      user
        .save()
        .then((result) => {
          res.status(201).json({
            message: "User registered successfully!",
            userCreated: {
              missPerName: result.missPerName,
              missPerAdd: result.missPerAdd,
              missPerAge: result.missPerAge,
              yourName: result.yourName,
              yourPhnNum: result.yourPhnNum,
              yourEmail: result.yourEmail,
              missPerImg: result.missPerImg,
            },
          });
        })
        .catch((err) => {
          console.log(err),
            res.status(500).json({
              error: err,
            });
        });
    } catch (err) {
      res.json({ err });
      console.log(err);
    }
  }
);

router.get("/getImg", async (req, res) => {
  const allData = await User.find();

  if (allData) res.json(allData);
  else throw new error();
});

module.exports = router;
