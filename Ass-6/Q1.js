function returnNamesWithAOrF(names){
  let names_with_a_or_f = [];

  for (const name of names) {
    let first_letter = name.charAt(0).toLowerCase();
    if ( first_letter === 'f' || first_letter === 'a' ){
      names_with_a_or_f.push(name);
    }
  }

  if (names_with_a_or_f.length > 0){
    return names_with_a_or_f;
  } else {
    return 'No Result';
  }
}



// For Testing

const names = ['Eniola','Adeola','Fademi','Treasure','Akpan','Cefti','Fadahunsi'] 
// console = ["Adeola","Fademi","Akpan","Fadahunsi"]

// const names = ['Kashew', 'Dubem', 'Charis']; 
// console = No Result

console.log(returnNamesWithAOrF(names));