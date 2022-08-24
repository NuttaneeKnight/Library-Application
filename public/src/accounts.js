function findAccountById(accounts, id) {
  const foundId = accounts.find((account) =>
  account.id === id);
  return foundId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
   accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
 }

function getTotalNumberOfBorrows(account, books) {
let count = 0
 for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
    if (account.id === books[i].borrows[j].id) {
      count += 1
    }
  }
 } return count;
}

function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowedMatch = [];
 
 books.forEach((eachBook) => {
 const borrowed = eachBook.borrows;
 const book = {
       id: eachBook.id,
       title: eachBook.title,
       genre: eachBook.genre,
       authorId: eachBook.authorId,
       author: {},
       borrows: {}
 };
 const {id, title, genre, authorId, author, borrows} = book;

 borrowed.forEach((borrow) => {
  if (borrow.id === account.id && borrow.returned === false) {
    result.push(book)
    borrowedMatch.push(borrow)
    book.borrows = borrowedMatch;
    book.author = authors.filter((theAuthor) =>
    theAuthor.id === book.authorId)[0];
  }
 });
 });
 return result;
 }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
