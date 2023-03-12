const accounts = require ("../data/accounts")
const books = require ("../data/books")
const authors = require ("../data/authors")

function findAccountById(accounts , id) {

  return result = accounts.find(accountObj => accountObj.id === id)
 }

//console.log(findAccountById(accounts,"5f446f2ecfaf0310387c9603"))

function sortAccountsByLastName(accounts) {

    return accounts.sort((accountOne, accountTwo) => (
    accountOne.name.last.toLowerCase() > accountTwo.name.last.toLowerCase() ? 1 : -1 ))
      }

//console.log(sortAccountsByLastName(accounts))

function getTotalNumberOfBorrows(accounts, books) {

  let total = 0
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if( accounts.id === books[i].borrows[j].id ) {
      total += 1
      }
  }
}
  return total
}

//console.log(getTotalNumberOfBorrows(accounts, books))

function getBooksPossessedByAccount(accounts, books, authors) {

  let result = []
  const {borrows} = books

  borrows.forEach((item) => {

    let accountObj = accounts.find(acc => acc.id === item.id)
    let account = accountObj
    account[`returned`] = item.returned
    result.push(account)
    
  })

  console.log(result);
  return result.slice(0,10);
  
}

//console.log(getBooksPossessedByAccount(account, books, authors)

 module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
 };


