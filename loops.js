let array = [
  ["sarim", "wirad", "rohail"],
  ["rado", "hublot", "calvin"],
  ["groccery", "crockry", "face watch"]
];

console.log(array)

// es7
for (const iterable of array) {
  // console.log(iterable)
  for (const it of iterable) {
    console.log(it);
  }
}

// // es6
for (const iterable in array) {
  // console.log(array[iterable])
  for (const it in array[iterable]) {
    console.log(array[iterable][it]);
  }
}


let object = {
    name: "sarim",
    age: "18",
    gender: "male"
  };


  console.log(object)

for(const iterable in object){
    console.log(iterable)
}

