const { Author, Book, Category } = require("../../models");

const createAuthor = async (req, res) => {
  try {
    const { name, country } = req.body;

    await Author.create({ name, country });

    return res.status(201).json({ message: "Author created" });
  } catch (error) {
    console.log("POST /author => ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({
      include: {
        model: Book,
        as: "books",

        include: {
          model: Category,
          as: "category",
        },
      },
    });

    return res.json(authors.map((author) => author.toJSON()));
  } catch (error) {
    console.log("GET /author => ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await Author.findByPk(id);

    return res.json(author);
  } catch (error) {
    console.log("GET /author => ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createAuthor,
  getAuthors,
  getAuthor,
};
