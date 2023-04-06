//Normal Object
const name = {
    first: 'Bruce',
    last: 'Wayne'
}
//Normal Object Destructuring
const firstOne = first.name, lastOne = last.name;
console.log(first, last);

//ES6 Object Destructuring
const {first, last} = name;
const {first: f, last: l} = name;
console.log(f, l);