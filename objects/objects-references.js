let myAccount = {
    name: 'Paulo',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses += amount
}

let addIncome = function(account, amount) {
    account.income += amount
}

let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
let summary = getAccountSummary(myAccount)
console.log(summary)
resetAccount(myAccount)
summary = getAccountSummary(myAccount)
console.log(summary)
