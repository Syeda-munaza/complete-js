let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    // console.log('computer choice is Bat');
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    // console.log('computer choice is Ball');
  } else {
    computerChoice = 'Stump'
    // console.log('computer choice is Stump');
  }

  let resultMsg;
  if (computerChoice === 'Ball') {
    resultMsg = 'User won.';
  } else if (computerChoice === 'Bat') {
    resultMsg = `It's a tie`;
  } else if (computerChoice === 'Stump') {
    resultMsg = 'Computer has won';
  }

  alert(`You have chosen Bat. Computer choice is ${computerChoice} and ${resultMsg}`);
  
  randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    // console.log('computer choice is Bat');
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    // console.log('computer choice is Ball');
  } else {
    computerChoice = 'Stump'
    // console.log('computer choice is Stump');
  }

  if (computerChoice === 'Ball') {
    resultMsg = `It's a tie`;
  } else if (computerChoice === 'Bat') {
    resultMsg = 'Computer has won';
  } else if (computerChoice === 'Stump') {
    resultMsg = 'User won.';
  }