//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { bookTitle, bookAuthor, bookISBN } = req.query;
  let results = null;
  let bookList;

  try {
    if (bookTitle) {
      // Search by title
      bookList = await Book.find({ title: bookTitle });
    } else if (bookAuthor) {
      // Search by author
      bookList = await Book.find({ author: { $in: [bookAuthor] } });
    } else if (bookISBN) {
      // Search by ISBN
      bookList = await Book.find({
        $or: [{ isbn13: bookISBN }, { isbn10: bookISBN }],
      });
    }

    results = mapBookListToArray(bookList);

    res.format({
      "application/json": () => {
        const jsonResult = JSON.stringify(results, null, 2);
        res.header("Content-Type", "application/json");
        res.send(jsonResult);
      },
      "application/xml": () => {
        let bookListXML = `<?xml version="1.0"?>\n<books>\n`;

        for (book of results) {
          bookListXML += ` <book id=${book.id}>\n`;
          bookListXML += `  <title>${book.title}</title>\n`;

          for (author of book.author) {
            bookListXML += `  <author>${author}</author>\n`;
          }

          bookListXML += `  <isbn10>${book.isbn10}</isbn10>\n`;
          bookListXML += `  <isbn13>${book.isbn13}</isbn13>\n`;
          bookListXML += `  <description>${book.description}</description>\n`;

          for (genre of book.genre) {
            bookListXML += `  <genre>${genre}</genre>\n`;
          }

          bookListXML += `  <releaseYear>${book.releaseYear}</releaseYear>\n`;

          for (rating of book.ratings) {
            bookListXML += `  <rating>${rating}</rating>\n`;
          }

          for (review of book.reviews) {
            bookListXML += `  <review>\n`;
            bookListXML += `    <user>${review.user}</user>\n`;
            bookListXML += `    <content>${review.review}</content>\n`;
            bookListXML += `  </review>\n`;
          }

          bookListXML += " </book>\n";
        }

        bookListXML += "</books>\n";
        res.type("application/xml");
        res.send(bookListXML);
      },
      "text/html": () => {
        res.render("books-user", { title: "Books", results });
      },
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
