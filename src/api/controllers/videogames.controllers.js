const Videogame = require("../models/videogames.model");

const getVideogame = async (req, res) => {
  try {
    const videogames = await Videogame.find();
  
    return res.status(200).json(videogames);
    
  } catch (error) {
    return res.json(error);
  }
};
const postVideogame = async (req, res) => {
  try {
    const body = req.body;
    const videogame = new Videogame(body);

    // console.log(req.file.path);

    if (req.file.path) {
      videogame.image = req.file.path;
    }
    const createdVideogame = await videogame.save();
    return res.json(createdVideogame);
  } catch (error) {
    return res.json(error);
  }
};
const putVideogame = async (req, res) => {
  try {
    const { id } = req.params;
    const videogameBody = new Videogame(req.body);
    videogameBody._id = id;
    console.log(req.file.path);
    if(req.file.path){
        videogameBody.image = req.file.path;
    }
    const updateVideogame = await Videogame.findByIdAndUpdate(
      id,
      videogameBody,
      { new: true }
    );

    if (!updateVideogame) {
      return res.status(404).json({ message: "Este videojuego no existe" });
    }
    return res.status(200).json(updateVideogame);
  } catch (error) {}
};
const deleteVideogame = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideogame = await Videogame.findByIdAndDelete(id);
    if (!deleteVideogame) {
      return res.status(404).json({ message: "Este videojuego no existe" });
    }
    return res.status(200).json(deleteVideogame);
  } catch (error) {}
};
const getVideogamebyTitle = async (req, res) => {
  try {
    const { titleVideogame } = req.params;
    const videogame = await Videogame.find({ name: titleVideogame });
    return res.status(200).json(videogames);
  } catch {
    return res.json(error);
  }
};
module.exports = {
  getVideogame,
  postVideogame,
  putVideogame,
  deleteVideogame,
  getVideogamebyTitle,
};
