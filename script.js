/**
 * Selecting HTML elements using query methods and storing them in variables.
 */

const loanBtn = document.getElementById("loan-btn");
const repayLoanbtn = document.getElementById("repay-loan-btn");
const bankBtn = document.getElementById("bank-btn");
const workBtn = document.getElementById("work-btn");
const outstandingLoan = document.getElementById("outstanding-loan");
const currentBalanceElement = document.getElementById("current-balance");
const currentLoanElement = document.getElementById("current-loan");
const currentSalaryElement = document.getElementById("current-salary");

//console.log(currentBalanceElement.innerText)

let balance = parseInt(currentBalanceElement.innerText);
//console.log(typeof(balance))
let hasLoan = false;
let salary = parseInt(currentSalaryElement.innerText);

if (!hasLoan) {
  outstandingLoan.style.display = "none";
  repayLoanbtn.style.display = "none";
} else {
  outstandingLoan.style.display = "block";
}

/*function getLoan(input) {
  input = prompt("enter a loan amount: ");

  if (balance != 0 && input >= balance * 2) {
    console.log("cannot get a loan double the amount of current balance");
  } else if (hasLoan) {
    console.log("cannot get new loan before repaying current");
  } else {
    hasLoan = true;
    balance = input;
  }
}*/

//loanBtn.addEventListener("click", getLoan())

loanBtn.addEventListener("click", () => {
  var input = parseInt(prompt("enter a loan amount: "));

  //validate input, and stop function execution if input is not a number by returning null
  if (isNaN(input)) {
    throw new Error("input needs to be a number");
    return;
  }

  if (balance != 0 && input >= balance * 2) {
    console.log("cannot get a loan double the amount of current balance");
  } else if (hasLoan) {
    console.log("cannot get new loan before repaying current");
  } else {
    hasLoan = true;

    //add the input to current balance, and update the currentBalanceElement
    balance += input;
    currentBalanceElement.innerHTML = balance;

    //display loan elements
    outstandingLoan.style.display = "block";
    repayLoanbtn.style.display = "block";

    //the loan button should just disappear, because customer can only obtain one loan a time.
    loanBtn.style.display = "none";
    currentLoanElement.innerText = input;

    console.log("current balance: " + balance);
    console.log("has loan: " + hasLoan);
  }
});

//reward work
workBtn.addEventListener("click", () => {
  let reward = 100;
  salary += reward;
  currentSalaryElement.innerHTML = salary;
});

//transfer salary to balance
bankBtn.addEventListener("click", () => {
  const INTEREST = 0.1;
  console.log(salary);
  console.log(hasLoan);
  if (hasLoan) {
    let interestAmount = salary * INTEREST;
    console.log("10% of " + salary + " is " + interestAmount);
    salary -= interestAmount;
  }
  console.log("salary after interest: " + salary);
  console.log("transferred " + salary + " to your bank account.")
  balance += salary;
  currentBalanceElement.innerHTML = balance;
  salary = 0;
  currentSalaryElement.innerHTML = salary;
});

repayLoanbtn.addEventListener("click", () => {});

/******Current Bugs:******/
//When user presses the escacpe key to leave prompt
//they will get a "cannot get new loan before repaying current" error
