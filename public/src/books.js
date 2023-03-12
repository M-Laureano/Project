const accounts = require ("../data/accounts")
const books = require ("../data/books")
const authors = require ("../data/authors")

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {

  let returned = books.filter((book) => 
  book.borrows.every((borrow) => borrow.returned === true))

  let borrowed = books.filter((book) => 
  book.borrows.every((borrow) => borrow.returned === false))

  return [[...returned],[...borrowed]]
}

function getBorrowersForBook(book, accounts) {
  
let result = [];
let borrowArray = book.borrows;
borrowArray.forEach(borrow=>{
  let account = accounts.find(acc => acc.id === borrow.id);
  let obj = account;
  obj['returned'] =  borrow.returned;
  result.push(obj);
})
console.log(result);
return result.slice(0,10);
}
console.log(getBorrowersForBook(books,accounts))

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

