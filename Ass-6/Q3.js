function countVowels(string){
  const vowels = ['a','e','i','o','u'];

  let count = 0;

  for (const character of string) {
    if (vowels.includes(character.toLowerCase())) count++;
  }

  return count;
}


// For Testing
console.log(countVowels('Eniola'));