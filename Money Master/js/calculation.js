const calculationButton = document.getElementById('calculationButton');

//calculating expense
function expenseCalculation(incomeInput, foodInput, rentInput, clothesInput) {
  if (
    parseFloat(incomeInput.value) >=
    parseFloat(foodInput.value) +
      parseFloat(rentInput.value) +
      parseFloat(clothesInput.value)
  ) {
    return (
      parseFloat(foodInput.value) +
      parseFloat(rentInput.value) +
      parseFloat(clothesInput.value)
    );
  } else {
    alert('Your expense is more than income');
    return -1;
  }
}

//balance calculation
function balanceCalculation(income, expenses) {
  return income - expenses;
}

//input handling for income expense
function incomeExpenseInputCheck(
  incomeInput,
  foodInput,
  rentInput,
  clothesInput
) {
  const inputErrorMessage = document.getElementById('inputErrorMessage');
  const foodErrorMessage = document.getElementById('foodErrorMessage');
  const rentErrorMessage = document.getElementById('rentErrorMessage');
  const clothesErrorMessage = document.getElementById('clothesErrorMessage');

  if (
    //string handling and error message
    isNaN(parseFloat(incomeInput.value)) ||
    isNaN(parseFloat(foodInput.value)) ||
    isNaN(parseFloat(rentInput.value)) ||
    isNaN(parseFloat(clothesInput.value))
  ) {
    if (isNaN(parseFloat(incomeInput.value))) {
      inputErrorMessage.innerHTML = 'Wrong input pattern';
      inputErrorMessage.style.display = 'block';
    }
    if (isNaN(parseFloat(foodInput.value))) {
      foodErrorMessage.innerHTML = 'Wrong input pattern';
      foodErrorMessage.style.display = 'block';
    }
    if (isNaN(parseFloat(rentInput.value))) {
      rentErrorMessage.innerHTML = 'Wrong input pattern';
      rentErrorMessage.style.display = 'block';
    }
    if (isNaN(parseFloat(clothesInput.value))) {
      clothesErrorMessage.innerHTML = 'Wrong input pattern';
      clothesErrorMessage.style.display = 'block';
    }
    return false;
  } else if (
    //negative value handle and error message
    parseFloat(incomeInput.value) < 0 ||
    parseFloat(foodInput.value) < 0 ||
    parseFloat(rentInput.value) < 0 ||
    parseFloat(clothesInput.value) < 0
  ) {
    if (parseFloat(incomeInput.value) < 0) {
      inputErrorMessage.innerHTML = 'Please enter positive value';
      inputErrorMessage.style.display = 'block';
    }
    if (parseFloat(foodInput.value) < 0) {
      foodErrorMessage.innerHTML = 'Please enter positive value';
      foodErrorMessage.style.display = 'block';
    }
    if (parseFloat(rentInput.value) < 0) {
      rentErrorMessage.innerHTML = 'Please enter positive value';
      rentErrorMessage.style.display = 'block';
    }
    if (parseFloat(clothesInput.value) < 0) {
      clothesErrorMessage.innerHTML = 'Please enter positive value';
      clothesErrorMessage.style.display = 'block';
    }
    return false;
  } else {
    inputErrorMessage.style.display = 'none';
    foodErrorMessage.style.display = 'none';
    rentErrorMessage.style.display = 'none';
    clothesErrorMessage.style.display = 'none';
    return true;
  }
}

//calculation button click event handling
calculationButton.addEventListener('click', calculationButtonHandler);

function calculationButtonHandler() {
  const incomeInput = document.getElementById('incomeInput');
  const foodInput = document.getElementById('foodInput');
  const rentInput = document.getElementById('rentInput');
  const clothesInput = document.getElementById('clothesInput');

  const expensesOutput = document.getElementById('expensesOutput');
  const balanceOutput = document.getElementById('balanceOutput');

  const totalExpensesErrorMessage = document.getElementById(
    'totalExpensesErrorMessage'
  );
  const balanceErrorMessage = document.getElementById('balanceErrorMessage');

  //input validity checking
  let checker = incomeExpenseInputCheck(
    incomeInput,
    foodInput,
    rentInput,
    clothesInput
  );

  if (checker) {
    let expenses = (expensesOutput.innerHTML = expenseCalculation(
      incomeInput,
      foodInput,
      rentInput,
      clothesInput
    ));

    if (expenses != -1) {
      totalExpensesErrorMessage.style.display = 'none';
      balanceErrorMessage.style.display = 'none';

      balanceOutput.innerHTML = balanceCalculation(
        parseFloat(incomeInput.value),
        parseFloat(expenses)
      );
    } else {
      totalExpensesErrorMessage.innerHTML = 'Your expenses crossed limit';
      totalExpensesErrorMessage.style.display = 'block';
      balanceErrorMessage.innerHTML = 'Not valid balance';
      balanceErrorMessage.style.display = 'block';
      expensesOutput.innerHTML = '';
      balanceOutput.innerHTML = '';
    }
  } else {
    expensesOutput.innerHTML = '';
    balanceOutput.innerHTML = '';
  }
}

//saving functionality

//error handling for save
function saveInputErrorHandle(savingAmountInput, incomeInput) {
  const saveInputErrorMessage = document.getElementById(
    'saveInputErrorMessage'
  );
  const remainingBalanceErrorMessage = document.getElementById(
    'remainingBalanceErrorMessage'
  );

  //string handle
  if (isNaN(parseFloat(savingAmountInput)) || isNaN(parseFloat(incomeInput))) {
    if (isNaN(parseFloat(savingAmountInput))) {
      saveInputErrorMessage.innerHTML = 'Give valid input';
      saveInputErrorMessage.display = 'block';
    }
    if (isNaN(parseFloat(incomeInput))) {
      remainingBalanceErrorMessage.innerHTML = 'Give valid balance';
      remainingBalanceErrorMessage.display = 'block';
    }
    return false;
  } else if (
    //negative value handle
    parseFloat(savingAmountInput) < 0 ||
    parseFloat(incomeInput) < 0
  ) {
    if (parseFloat(savingAmountInput) < 0) {
      saveInputErrorMessage.innerHTML = 'Give positive input';
      saveInputErrorMessage.display = 'block';
    }
    return false;
  } else {
    saveInputErrorMessage.display = 'none';
    remainingBalanceErrorMessage.display = 'none';
    return true;
  }
}

//save calculation
function saveCalcuation(saveParcent, incomeInput) {
  console.log((parseFloat(saveParcent) / 100) * parseFloat(incomeInput));
  return (parseFloat(saveParcent) / 100) * parseFloat(incomeInput);
}

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveButtonHandler);

function saveButtonHandler() {
  const balanceOutput = document.getElementById('balanceOutput').innerHTML;
  const savingAmountInput = document.getElementById('savingAmountInput').value;
  const incomeInput = document.getElementById('incomeInput').value;

  let savingAmountOutput = document.getElementById('savingAmountOutput');
  let remainingBalanceOutput = document.getElementById(
    'remainingBalanceOutput'
  );
  let remainingBalance;

  //error message elements handle
  const saveInputErrorMessage = document.getElementById(
    'saveInputErrorMessage'
  );
  const savingBalanceErrorMessage = document.getElementById(
    'savingBalanceErrorMessage'
  );
  const remainingBalanceErrorMessage = document.getElementById(
    'remainingBalanceErrorMessage'
  );

  //valid save amount checking
  if (parseFloat(savingAmountInput) > 100) {
    alert('You can not save more than 100% of your earning');
    saveInputErrorMessage.innerHTML = 'Max limit : 100';
    saveInputErrorMessage.style.display = 'block';
    savingAmountOutput.innerHTML = '';
    remainingBalanceOutput.innerHTML = '';
  } else {
    let checker = saveInputErrorHandle(incomeInput, savingAmountInput);
    saveInputErrorMessage.style.display = 'none';
    remainingBalanceErrorMessage.style.display = 'none';
    if (checker) {
      savingBalanceErrorMessage.style.display = 'none';
      remainingBalanceErrorMessage.display = 'none';

      saveInputErrorMessage.style.display = 'none';
      savingAmountOutput.innerHTML = saveCalcuation(
        incomeInput,
        savingAmountInput
      );
      console.log(parseFloat(balanceOutput));
      console.log(
        parseFloat(balanceOutput) - parseFloat(savingAmountOutput.innerHTML)
      );
      remainingBalance =
        parseFloat(balanceOutput) - parseFloat(savingAmountOutput.innerHTML);
      if (remainingBalance < 0) {
        console.log('remain balance < 0');
        console.log(remainingBalance);
        remainingBalanceErrorMessage.innerHTML = 'Balance negative.';
        remainingBalanceErrorMessage.style.display = 'block';
        remainingBalanceOutput.innerHTML = '';
        savingBalanceErrorMessage.innerHTML = 'Not enough savings.';
        savingAmountOutput.innerHTML = '';
        savingBalanceErrorMessage.style.display = 'block';
      } else {
        console.log('remain balance > 0');
        console.log(remainingBalance);
        remainingBalanceOutput.innerHTML = remainingBalance;
      }
      // let remainBalance =
      //   parseFloat(balanceOutput) - parseFloat(savingAmountOutput.innerHTML);
      // console.log(balanceOutput);
    } else {
      savingBalanceErrorMessage.innerHTML = 'Give correct saving input';
      remainingBalanceErrorMessage.innerHTML = 'Give correct balance input';
      savingBalanceErrorMessage.style.display = 'block';
      remainingBalanceErrorMessage.style.display = 'block';

      savingAmountOutput.innerHTML = '';
      remainingBalanceOutput.innerHTML = '';
    }
  }
}
