/**
 * Selecting HTML elements using query methods and storing them in variables.
 */

const loanBtn = document.getElementById("loan-btn");
const outstandingLoan = document.getElementById("outstanding-loan");

let balance = 0;
let hasLoan = false;

if (!hasLoan) {
  outstandingLoan.style.display = "none";
} else {
  outstandingLoan.style.display = "display";
}

loanBtn.addEventListener("click", () => {
  loanAmount = prompt("enter a loan amount: ");

  if (balance != 0 && loanAmount >= balance * 2) {
    console.log("cannot get a loan double the amount of current balance");
  } else if (hasLoan) {
    console.log("cannot get new loan before repaying current");
  } else {
    hasLoan = true;
    balance = loanAmount;
    outstandingLoan.style.display = "display";
    console.log("current balance: " + balance);
    console.log("has loan: " + hasLoan);
  }
});
