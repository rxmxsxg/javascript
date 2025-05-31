let fruits = ["apple", "grapes", "banana", "dragan", "orange", "guava"]
// array destructure

// let [a, b, ...rest] = fruits

// console.log(a)
// console.log(b)

let firstElement = fruits.at(1)
console.log(firstElement)
// concat method should not change actual array, return new array with added elements
// it takes idividual elements or array of elements
fruits.concat("kiwi")
let extfruits = fruits.concat(["kiwi", "add"])
console.log(fruits)
console.log(extfruits)
