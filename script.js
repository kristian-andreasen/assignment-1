/**
 * Selecting HTML elements using query methods and storing them in variables.
 */

const loanBtn = document.getElementById("loan-btn");
const repayLoanbtn = document.getElementById("repay-loan-btn");
const bankBtn = document.getElementById("bank-btn");
const workBtn = document.getElementById("work-btn");
const outstandingLoan = document.getElementById("outstanding-loan"); //DEBT
const currentBalanceElement = document.getElementById("current-balance");
const currentLoanElement = document.getElementById("current-loan");
const currentSalaryElement = document.getElementById("current-salary");

let balance = parseInt(currentBalanceElement.innerText);
let salary = parseInt(currentSalaryElement.innerText);
let debt = parseInt(currentLoanElement.innerText);
let hasLoan = false;

if (!hasLoan) {
  outstandingLoan.style.display = "none";
  repayLoanbtn.style.display = "none";
} else {
  outstandingLoan.style.display = "block";
}

loanBtn.addEventListener("click", () => {
  var input = parseInt(prompt("enter a loan amount: "));

  //validate input, and stop function execution if input is not a number by returning null
  if (isNaN(input)) {
    throw new Error("input needs to be a number");
    return;
  }

  if (balance != 0 && input > balance * 2) {
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

    //update current debt/loan
    debt = input;
    currentLoanElement.innerText = input;

    console.log("current balance: " + balance);
    console.log("has loan: " + hasLoan);
  }
});

//WORK REWARD
workBtn.addEventListener("click", () => {
  let reward = 100;
  const INTEREST = 0.1;
  salary += reward;

  if (hasLoan) {
    let interestCost = salary * INTEREST;
    console.log(`10% of ${salary} is ${interestCost}`);
    salary -= interestCost;
  }
  currentSalaryElement.innerHTML = salary;
});

//TRANSFER SALARY TO BALANCE
bankBtn.addEventListener("click", () => {
  if(salary === 0){
    throw new Error("you have no money to transfer!")
  }
  if (hasLoan) {
    throw new Error("cannot transfer funds before repaying current debt!");
  } else {
    console.log("transferred " + salary + " to your bank account.");
    balance += salary;
    currentBalanceElement.innerHTML = balance;
    salary = 0;
    currentSalaryElement.innerHTML = salary;
    hasLoan = false;
  }
});

//REPAY LOAN
repayLoanbtn.addEventListener("click", () => {
  //validate that customer can't go below 0
  if(debt <= 0){
    throw new Error("you don't have any debt!");
  }

  if (salary > debt) {
    console.log("salary is greater")
    salary -= debt; 
    debt = 0;
    hasLoan = false;
    currentSalaryElement.innerText = salary;
    currentLoanElement.innerText = debt;

  }
  if(salary < debt){
    console.log("salary is smaller")
    debt -= salary;
    salary = 0;
    currentSalaryElement.innerText = salary;
    currentLoanElement.innerText = debt;
  }
  //return debt;
});

/******Current Bugs:******/
//When user presses the escacpe key to leave prompt
//they will get a "cannot get new loan before repaying current" error
