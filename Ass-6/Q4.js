function generateRandomInteger(){
  return Math.floor(Math.random() * (20 - 10 + 1) + 10);
}

// For Testing
console.log(generateRandomInteger());