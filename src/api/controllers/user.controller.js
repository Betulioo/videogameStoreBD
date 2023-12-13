const User = require("../models/user.model");
const { validateEmailDB, validatePassword } = require("../../utils/validator");
const bycrypt = require("bcrypt");
const { generateToken } = require("../../utils/jwt");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.userProfile;
    // console.log(userId);
    const user = await User.findById(userId);
       return res.status(200).json(user);
  } catch (error) {}
};

const register = async (req, res) => {
  try {
    const userBody = new User(req.body);
    const valEmail = await validateEmailDB(req.body.email);
    if (!valEmail) {
      if (validatePassword(req.body.password)) {
        userBody.password = bycrypt.hashSync(userBody.password, 10);
        const createduser = await userBody.save();
        return res.json({ success: true, message: "Éxito", data: createduser });
      } else {
        return res.json({
          success: false,
          message: "La contraseña no cumple con el patron",
        });
      }
    }
    return res.json({ success: false, message: "El email ya existe" });
  } catch (error) {}
};
const login = async (req, res) => {
  try {
    const userInfo = req.body;
    const userDB = await validateEmailDB(userInfo.email);
    if (!userDB) {
      return res.json({ success: false, message: "El email no existe" });
    }
    if (!bycrypt.compareSync(userInfo.password, userDB.password)) {
      return res.json({ success: false, message: "La contraseña no coincide" });
    }

    const token = generateToken(userDB._id, userDB.email);
    return res.json({
      success: true,
      message: "Log in efectuado con éxito",
      token: token,
      userInfo: userDB,
    });
  } catch (error) {}
};
const profile = async (req, res) => {
  try {
    return res.status(200).json(req.userProfile);
  } catch (error) {}
};

module.exports = { register, login, profile, getUser, getUserById };
