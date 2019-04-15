// function abc(){
//     console.log("callback ha ya!")
// }

// function abcd(callback){
//     callback()
//     console.log("dono chal rhe ha!");
// }


// abcd(abc)


function add(a,b){
  return a + b;
}

function multipaly(a,b){
  return a * b;
}


function callBack(n1 , n2 , c ){
  if(typeof c == "function" ){
      return c(n1 , n2)

  }
  else { alert("Beta sahi kar!!!!")}
}

console.log(callBack(233324, 88888884 , "asnd"))
// console.log(callBack(23, 4 , multipaly))