const depositeButton = document.getElementById('depositeButton');

depositeButton.addEventListener('click', depositeFunction);

function updateTotalValue(operation, amount) {
  let initialTotalAmount = document.getElementById('initialTotalAmount');
  if (operation == 'deposite') {
    initialTotalAmount.innerHTML =
      parseFloat(initialTotalAmount.innerHTML) + amount;
  } else if (operation == 'withdraw') {
    let newTotalValue = parseFloat(initialTotalAmount.innerHTML) - amount;
    if (newTotalValue >= 0) {
      initialTotalAmount.innerHTML = newTotalValue;
    } else {
      alert('not sufficient amount');
    }
  }
}

function depositeFunction() {
  let initialAmount = document.getElementById('initialDepositeAmount');
  let inputDepositeAmount = document.getElementById('inputDepositeAmount');
  if (isNaN(inputDepositeAmount.value)) {
    alert('Give valid value');
  } else if (inputDepositeAmount.value < 0) {
    alert('Give positive value');
  } else {
    let newDepositeAmount =
      parseFloat(initialAmount.innerHTML) +
      parseFloat(inputDepositeAmount.value);
    console.log(newDepositeAmount);
    initialAmount.innerHTML = inputDepositeAmount.value;
    updateTotalValue('deposite', parseFloat(inputDepositeAmount.value));
  }
  inputDepositeAmount.value = '';
}

const withdrawButton = document.getElementById('withdrawButton');
withdrawButton.addEventListener('click', withdrawFunction);

function withdrawFunction() {
  let withdrawAmount = document.getElementById('withdrawAmount');
  const inputWithdrawAmount = document.getElementById('inputWithdrawAmount');
  if (isNaN(inputWithdrawAmount.value)) {
    alert('Give valid value');
  } else if (inputWithdrawAmount.value < 0) {
    alert('Give positive value');
  } else {
    withdrawAmount.innerHTML = inputWithdrawAmount.value;
    updateTotalValue('withdraw', parseFloat(inputWithdrawAmount.value));
  }
  inputWithdrawAmount.value = '';
}
