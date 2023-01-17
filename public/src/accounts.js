// function findAccountById(accounts, id) {
//   const foundId = accounts.find((account) =>
//   account.id === id);
//   return foundId;
// }
//adjust

const findAccountById = (accounts, id) => {
  return accounts.find(account => account.id === id)
}

// function sortAccountsByLastName(accounts) {
//   accounts.sort((accountA, accountB) =>
//    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
//   );
//   return accounts;
//  }

 const sortAccountsByLastName = (accounts) => {
  accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return accounts
 }

// function getTotalNumberOfBorrows(account, books) {
// let count = 0
//  for (let i = 0; i < books.length; i++) {
//   for (let j = 0; j < books[i].borrows.length; j++) {
//     if (account.id === books[i].borrows[j].id) {
//       count += 1
//     }
//   }
//  } return count;
// }

// getTotalNumberOfBorrows(account, books); // 22

function getTotalNumberOfBorrows(account, books) {
  const {id: accountId} = account;
  
  return books.reduce((accumulator, book) => {
    return accumulator + 
            book.borrows.filter(borrow => borrow.id === accountId)
            .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
  }, 0);
}

// function getBooksPossessedByAccount(account, books, authors) {
//  let result = [];
//  let borrowedMatch = [];
 
//  books.forEach((eachBook) => {
//  const borrowed = eachBook.borrows;
//  const book = {
//        id: eachBook.id,
//        title: eachBook.title,
//        genre: eachBook.genre,
//        authorId: eachBook.authorId,
//        author: {},
//        borrows: {}
//  };
//  const {id, title, genre, authorId, author, borrows} = book;

//  borrowed.forEach((borrow) => {
//   if (borrow.id === account.id && borrow.returned === false) {
//     result.push(book)
//     borrowedMatch.push(borrow)
//     book.borrows = borrowedMatch;
//     book.author = authors.filter((theAuthor) =>
//     theAuthor.id === book.authorId)[0];
//   }
//  });
//  });
//  return result;
//  }

function getBooksPossessedByAccount(account, books, authors) {
  const inPosession = [];

  books.map((book) => {
    book.borrows.map((borrow) => {
     authors.map((author) => {
      if (author.id === book.authorId)
      book['author'] = author;
    })
      if (borrow.returned === false && borrow.id === account.id) {
    inPosession.push(book);
  }
  })
})
  return inPosession;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
