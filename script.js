var name = prompt("Enter your username");



function guessNumber() {

  // generating number from 1 to 2
  const random = Math.floor(Math.random() * 2) + 1;

  // take input from the user
  let number = parseInt(prompt('Guess a number from 1 to 2: '));

  // take the input until the guess is correct
  while (number !== random) {
    number = parseInt(prompt('Guess a number from 1 to 2: '));
  }
  // check if the guess is correct


  if (number == random) {

    console.log('You guessed the correct number.');
    alert("Congratulations " + name + "," + " You have received 10 points, You have been moved to stage 2")

    function guessStagetwo() {
      // generating number from 1 to 3
      const random = Math.floor(Math.random() * 3) + 1;

      // take input from the user
      let number = parseInt(prompt('Guess a number from 1 to 3: '));

      // take the input until the guess is correct
      while (number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 3: '));
      }
      if (number == random) {

        console.log('You guessed the correct number.');
        alert("Congratulations " + name + "," + " You have received 10 points, You have been moved to stage 3")
      }
    }
  }
  guessStagetwo();

}

// call the function
guessNumber();
