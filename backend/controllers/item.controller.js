import uploadOnCloudinary from "../utils/cloudinary.js";
import Shop from "../models/shop.model.js";
import Item from "../models/item.model.js";
export const addItem = async (req, res) => {
  try {
    const { name, category, foodType, price } = req.body;
    if (!name || !category || !foodType || !price) {
      return res.status(400).json({ message: "All fields are required." });
    }
    let image;
    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }
    const shop = await Shop.findOne({ owner: req.userId });
    if (!shop) {
      return res.status(400).json({ message: "Shop not found" });
    }
    const item = await Item.create({
      name,
      category,
      foodType,
      price,
      image,
      shop: shop._id,
    });
    return res.status(201).json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in adding item" });
  }
};

export const editItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { name, category, foodType, price } = req.body;
    if (!name || !category || !foodType || !price) {
      return res.status(400).json({ message: "All fields are required." });
    }
    let image;
    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }
    const item = await Item.findByIdAndUpdate(
      itemId,
      { name, category, foodType, price, image },
      { new: true }
    );
    if(!item){
      return res.status(400).json({message : "Itme not found"})
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Error in editing item" });
  }
};
