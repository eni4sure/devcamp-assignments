function CheckIfPangram(string){
  var regex = /([a-z])(?!.*\1)/g;

  if ( string.match(regex).length === 26 ){
    return true;
  } else {
    return false;
  }
}

// console.log(CheckIfPangram('Eniola')); // False
console.log(CheckIfPangram('abcdefghijklmnopqrstuvwxyz')); // False