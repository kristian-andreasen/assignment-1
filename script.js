/**
 * Selecting HTML elements using query methods and storing them in variables.
 */

const loanBtn = document.getElementById('loan-btn');
const repayLoanbtn = document.getElementById('repay-loan-btn');
const bankBtn = document.getElementById('bank-btn');
const workBtn = document.getElementById('work-btn');
const outstandingLoan = document.getElementById('outstanding-loan'); //DEBT
const currentBalanceElement = document.getElementById('current-balance');
const currentLoanElement = document.getElementById('current-loan');
const currentSalaryElement = document.getElementById('current-salary');

let balance = parseInt(currentBalanceElement.innerText);
let salary = parseInt(currentSalaryElement.innerText);
let debt = parseInt(currentLoanElement.innerText);
let hasLoan = false;

if (!hasLoan) {
  outstandingLoan.style.display = 'none';
  repayLoanbtn.style.display = 'none';
} else {
  outstandingLoan.style.display = 'block';
}

//TAKE A LOAN
loanBtn.addEventListener('click', () => {
  var input = parseInt(prompt('enter a loan amount: '));

  //validate input, and stop function execution if input is not a number by returning null
  if (isNaN(input)) {
    throw new Error('input needs to be a number');
    return;
  }

  if (balance != 0 && input > balance * 2) {
    console.log('cannot get a loan double the amount of current balance');
  } else if (hasLoan) {
    console.log('cannot get new loan before repaying current');
  } else {
    hasLoan = true;

    //add the input to current balance, and update the currentBalanceElement
    balance += input;
    currentBalanceElement.innerHTML = balance;

    //display loan elements
    outstandingLoan.style.display = 'block';
    repayLoanbtn.style.display = 'block';

    //the loan button should just disappear, because customer can only obtain one loan a time.
    loanBtn.style.display = 'none';

    //update current debt/loan
    debt = input;
    currentLoanElement.innerText = input;

    console.log('current balance: ' + balance);
    console.log('has loan: ' + hasLoan);
  }
});

//WORK REWARD
workBtn.addEventListener('click', () => {
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
bankBtn.addEventListener('click', () => {
  if (salary === 0) {
    throw new Error('you have no money to transfer!');
  }
  if (hasLoan) {
    throw new Error('cannot transfer funds before repaying current debt!');
  } else {
    console.log('transferred ' + salary + ' to your bank account.');
    balance += salary;
    currentBalanceElement.innerHTML = balance;
    salary = 0;
    currentSalaryElement.innerHTML = salary;
    hasLoan = false;
  }
});

//REPAY LOAN
repayLoanbtn.addEventListener('click', () => {
  //validate that customer can't go below 0
  if (debt <= 0) {
    throw new Error("you don't have any debt!");
  }

  if (salary > debt) {
    //console.log('salary is greater');
    salary -= debt;
    debt = 0;
    hasLoan = false;
    currentSalaryElement.innerText = salary;
    currentLoanElement.innerText = debt;

    //repay loan button should disappear because there is no loan anymore
    repayLoanbtn.style.display = 'none';

    //the loan button appear, since debt has been paid off
    loanBtn.style.display = 'block';
  }
  if (salary < debt) {
    //console.log('salary is smaller');
    debt -= salary;
    salary = 0;
    currentSalaryElement.innerText = salary;
    currentLoanElement.innerText = debt;
  }
});

/*
PART 3
*/

const selectBtn = document.querySelector('select');
const infoSection = document.querySelector('#info-section');

//This function returns a promise which when resolved returns the data
//fetched from the API.
const fetchData = async (url) => {
  //fetch data from the API
  const response = await fetch(url);

  //the purpose of this if-statement is catch resolved responses
  //where the status code is non-2xx. Otherwise they will be treated as successful requests
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  //parse the response.body property with the json() method
  const data = await response.json();
  return data;
};

baseURL = 'https://hickory-quilled-actress.glitch.me/computers';
assetsURL = 'https://hickory-quilled-actress.glitch.me/';
let laptops;

fetchData(baseURL)
  .then((data) => {
    laptops = data;
    // Loop through the data and create <option> elements for each laptop
    for (const laptop of data) {
      const option = document.createElement('option');
      option.value = laptop.title;
      option.innerHTML = laptop.title;
      selectBtn.appendChild(option);
    }
    // Log the data to the console for debugging purposes
    console.log(data);
    //console.log("test " + laptops)
  })
  .catch((err) => {
    console.log(err);
  });

const displayInfo = (laptop) => {
  const infoSection = document.querySelector('#info-section');
  //laptopImg.src = assetsURL+laptop.image;
  infoSection.innerHTML = `
        <h2>${laptop.title}</h2>
        <p>${laptop.description}</p>
        <img src="${assetsURL + laptop.image}">
        <p>Price: ${laptop.price}</p>
      `;
};

const updateUI = (laptop) => {
  const specsList = document.querySelector('.details ul');
  specsList.innerHTML = '';
  laptop.specs.forEach((spec) => {
    const li = document.createElement('li');
    li.innerHTML = spec;
    specsList.appendChild(li);
  });
  displayInfo(laptop);
};

//Add event listener to the <select> element
selectBtn.addEventListener('change', (event) => {
  //Get the value of the selected option
  const selectedValue = event.target.value;

  //Find the selected laptop in the laptops array
  const selectedLaptop = laptops.find(
    (laptop) => laptop.title === selectedValue
  );
  // Log the data to the console for debugging purposes
  console.log(selectedLaptop);

  //callback
  updateUI(selectedLaptop);
});

//Info section should show the laptop's title, description, image, and price

buyBtn = document.getElementById('buy-btn');

buyBtn.addEventListener('click', () => {
  const selectedValue = selectBtn.value;

  //find the laptop where the title is equal to the title of selected laptop
  const selectedLaptop = laptops.find(
    (laptop) => laptop.title === selectedValue
  );

  if (selectedLaptop.stock <= 0) {
    throw new Error('product is out of stock.');
  }
  if (balance >= selectedLaptop.price) {
    balance -= selectedLaptop.price;
    currentBalanceElement.innerText = balance;
    console.log('Purchase successful! Your new balance is: ' + balance);
    selectedLaptop.stock -= 1;
    console.log(selectedLaptop.stock);
  } else {
    console.log('Insufficient funds. Your current balance is: ' + balance);
  }
});
