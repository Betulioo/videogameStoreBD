const express = require("express")
const { getVideogame, postVideogame,  putVideogame, deleteVideogame, getVideogamebyTitle } = require("../controllers/videogames.controllers")
const upload = require("../../middleware/upload.cloudy")
const router = express.Router()

router.get("/getallvideogames", getVideogame);
router.post("/uploadvideogames", upload.single("image"), postVideogame);
router.get("/:titleVideogame", getVideogamebyTitle);
router.put("/:id", upload.single("image"), putVideogame);
router.delete("/:id", deleteVideogame)



module.exports = router;