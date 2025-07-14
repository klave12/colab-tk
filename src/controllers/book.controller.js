const { Book } = require("../../models");

const createBook = async (req, res) => {
  try {
    const { title, year, author_id, category_id } = req.body;

    await Book.create({ title, year, author_id, category_id });

    return res.json({ message: "Book created" });
  } catch (error) {
    console.log("POST /book => ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createBook };
