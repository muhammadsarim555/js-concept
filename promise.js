function marks(n, m) {
  return `${n}  got ${m}  Marks` ;
}

function markSheet(firstName, lastName, no, marks) {
  let fullName = firstName + lastName ;
  return marks(fullName, no);
}

console.log(markSheet(" Muhammad ", " Sarim ", 100, marks));


const studentName = (w, s, r) => {
  console.log(w, s, r);
  return w + s + r;
};

const info = (w, s, r, studentName) => {
  return studentName(w, s, r);
};

info("wirad", "Sarim", "Rohail", studentName);


// console.log(markSheet("Muhammad", "Sarim", marks));

// const prom = () => {
//   return new Promise((resolve, reject) => {
//     if (false) {
//       resolve(markSheet("Muhammad", "Sarim"));
//     } else {
//       reject("error");
//     }
//   });
// };

// prom()
//   .then(s => console.log(s))
//   .catch(e => console.log(e));

// function pro() {
//   return new Promise((res, rej) => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then(response => response.json())
//       .then(json => res(json))
//       .catch(e => rej(e));
//   });
// }

// pro()
//   .then(s => console.log(s))
//   .catch(e => console.log(e));

// secondOne = async () => {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };

// secondOne();
