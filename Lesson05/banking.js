
function doBankingApplication() {
  let balance = 100; // initial balance
  let input = 'T'; // initialize input
  do {
    input = prompt('Enter a transaction char: Q to quit. Enter W to withdraw, Enter D to deposit, Enter B to view balance.:');
    switch (input) {
      case 'W':
        let withdrawAmount = prompt('Enter your withdraw amount');
        balance = balance - Number(withdrawAmount);
        alert("your new balance is " + balance);
        break;
      case 'D':
        let depositAmount = prompt('Enter your withdraw amount');
        balance = balance + Number(depositAmount);
        alert("your new balance is " + balance);
        break;
      case 'B':
        alert("Balance: " +  balance);
        break;
    }
  }
  while (input != 'Q');
  alert("Exiting..");

}

doBankingApplication();
