const { Category } = require("../../models");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    await Category.create({ name });

    return res.status(201).json({ message: "Category created" });
  } catch (error) {
    console.log("POST /category => ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createCategory,
};
