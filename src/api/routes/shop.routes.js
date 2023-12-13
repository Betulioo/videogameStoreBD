const express = require("express")
const { getShop, postShop, putShop, deleteShop, getShopbyName } = require("../controllers/shop.controllers")
const { isAdmin } = require("../../middleware/auth")
const router = express.Router()

router.get("/allshops", getShop);
router.post("/uploadshops", [isAdmin], postShop);
router.get("/:nameShop", getShopbyName);
router.put("/:id", [isAdmin], putShop);
router.delete("/:id", [isAdmin], deleteShop)



module.exports = router;