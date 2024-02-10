//Helper function maps MongoDB results to an array of objects
const mapBookListToArray = (bookList) => {
  return bookList.map((book) => {
    return {
      id: book._id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn13: book.isbn13,
      isbn10: book.isbn10,
      description: book.description,
      releaseYear: book.releaseYear,
      ratings: book.ratings,
      avgRating:
        book.ratings.reduce((acc, curr) => {
          return acc + curr;
        }, 0) / book.ratings.length,
      reviews: book.reviews,
    };
  });
};

module.exports = {
  mapBookListToArray,
};
