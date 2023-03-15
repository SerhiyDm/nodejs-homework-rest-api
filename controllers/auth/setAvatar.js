const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models");

const newDir = path.join(__dirname, "../../", "public", "avatars");

const setAvatar = async (req, res) => {
  const { path: tmpUpload, originalname } = req.file;
  const { _id } = req.user;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(newDir, filename);
  await fs.rename(tmpUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = setAvatar;
