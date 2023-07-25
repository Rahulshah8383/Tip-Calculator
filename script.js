// 🌟 APP: Tip Calculator

const billInput = document.getElementById('billTotalInput'); // Input field for the bill amount
const tipInput = document.getElementById('tipInput'); // Input field for the tip percentage
const numberOfPeopleDiv = document.getElementById('numberOfPeople'); // Display div for the number of people
const perPersonTotalDiv = document.getElementById('perPersonTotal'); // Display div for the per person total

// Get number of people from the 'numberOfPeople' div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// Calculate the total bill per person
const calculateBill = () => {
  // Get the bill amount from user input & convert it into a number
  const bill = Number(billInput.value);

  // Get the tip percentage from user & convert it into a decimal (divide by 100)
  const tipPercent = Number(tipInput.value) / 100;

  // Calculate the total tip amount
  const tipAmount = bill * tipPercent;

  // Calculate the total bill (tip amount + bill)
  const total = tipAmount + bill;

  // Calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople;

  // Update the 'perPersonTotal' on the DOM & show it to the user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
}

// Splits the bill between more people
const increasePeople = () => {
  // Increment the number of people
  numberOfPeople += 1;

  // Update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // Calculate the bill based on the new number of people
  calculateBill();
}

// Splits the bill between fewer people
const decreasePeople = () => {
  // Guard clause: If the number of people is 1 or less, simply return (can't have 0 or negative people)
  if (numberOfPeople <= 1) {
    return;
  }

  // Decrement the number of people
  numberOfPeople -= 1;

  // Update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // Calculate the bill based on the new number of people
  calculateBill();
}
