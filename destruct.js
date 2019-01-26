// Destructering
let myObj = {
    name: 'John',
    age: 19,
    hair: {
        color: 'brown',
        design: 'left',
    },
    face:{
        color: 'white',
    }
}

// console.log(myObj)

// const {age, hair: {design}} = myObj
//     console.log(design)

const {hair: {color}} = myObj;
console.log(color)
let {hair: {design}} = myObj;
console.log(design)


let myArray = ['red', 'blue', 'green'];
let [,s] = myArray;
console.log(s)


let a = 3;
let b = 5;
[a,b] = [b,a];
console.log(a,b);

let ds = ['red', 'blue', 'green'];;
const [ s2, w, r] = ds;
console.log(s2)

let nestedArray = [
    'red' , ['blue', 'lightBlue', 'navyBlue'], 'yellow'];
    let [fI , [b2,l,n], y,s3] = nestedArray;
    let clone = nestedArray.concat(["Sarim" , "jjj"]);

    console.log(clone)
    const [, [], , bbb] = clone;
    console.log(bbb)

// let nestedArray = [
//     'sarim', 18, ['fb', 'ins', 'twittwe'], 'devolioper'
// ]

// const [,, [,,t], f] = nestedArray;
// console.log(f)