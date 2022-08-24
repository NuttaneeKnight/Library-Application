// the reduce method that was missing
function getTotalBooksCount(books) {
  return books.reduce((totalCount) => {
    totalCount++;
    return totalCount
  }, 0);
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter ((book) =>
   book.borrows.filter((onRecord) =>
   onRecord.returned === false).length > 0)  
   return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  let map = {};
  books.forEach((sum) => {
   if (map[sum.genre]) {
    map[sum.genre]++;
   } else {
    map[sum.genre] = 1;
   }
  });
   let result = Object.entries(map)
   .map(([name, count]) => {
    return {name,count};
   })
   .sort((a, b) => b.count - a.count)
   return firstFive(result);
 }

function getMostPopularBooks(books) {
 let result= books.map((book) => {
  return {name: book.title, count: book.borrows.length}
 })
 .sort((a, b) => (a.count < b.count ? 1: -1))
 return firstFive(result);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  
  authors.forEach((author) => {
   const theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
  
   books.forEach((book) => {
     if (book.authorId === author.id) {
      theAuthor.count += book.borrows.length;
     }
  
    });
    result.push(theAuthor);
  });
   result = result.sort((a, b) => b.count - a.count);
   return firstFive(result);
}
// helper function for slicing the top 5
function firstFive(array) {
  return array.slice(0, 5) 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
