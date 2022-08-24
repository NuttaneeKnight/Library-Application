function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) =>
  author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  const foundBook = books.find((book) =>
  book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter((book) =>
   book.borrows.every((borrow) => 
   borrow.returned === true)
  );

  const borrowedBooks = books.filter((book) =>
  book.borrows.some((borrow) => 
  borrow.returned === false)
 );

 let bothArrays = [[...borrowedBooks], [...returnedBooks]];
 return bothArrays;
}

 function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
    const account = accounts.find((account) =>
     account.id === borrow.id);
     return {...borrow, ...account};
  })
  .slice(0, 10);
 }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
