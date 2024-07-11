// Code your solutions in this file
function writeCards(names, occasion) {
    return names.map((name) => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }  