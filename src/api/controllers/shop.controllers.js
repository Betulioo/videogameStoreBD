const Shop = require("../models/shop.model");

const getShop = async (req, res) => {
    try {
        const shops = await Shop.find().populate("videogames");
        return res.status(200).json(shops)

    } catch (error) {
        return res.json(error)
    }
};



const postShop = async (req, res) => {
    try {
        const body = req.body;
        const shop = new Shop(body);
// Actualizar este file path a lo que necesitemos
        // if (req.file.path) {
        //     shop.image = req.file.path;
        // }
        const createdShop = await shop.save();
        return res.json(createdShop)
    } catch (error) {
        return res.json(error)
    }
};

const putShop = async (req, res) => {
    try {
        const { id } = req.params;
        const shopBody = new Shop(req.body);
       shopBody._id = id;
        const updateShop = await Shop.findByIdAndUpdate(id, shopBody, { new: true });
        if (!updateShop) {
            return res.status(404).json({ message: "Esta tienda no existe" })
        }
        return res.status(200).json(updateShop)
    } catch (error) {

    }
};
const deleteShop = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteShop = await Shop.findByIdAndDelete(id);
        if (!deleteShop) {
            return res.status(404).json({ message: "Esta tienda no existe" })
        }
        return res.status(200).json(deleteShop)

    } catch (error) {

    }
}


const getShopbyName = async (req, res) => {
    try {
        const { nameShop } = req.params;
        const shop = await Shop.find({ name: nameShop });
        return res.status(200).json(shops)
    } catch {
        return res.json(error)
    }
}
module.exports = { getShop, postShop, putShop, deleteShop, getShopbyName }