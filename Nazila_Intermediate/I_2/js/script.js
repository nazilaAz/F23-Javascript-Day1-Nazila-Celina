let fruits = [
    "apple",
    "banana",
    "kiwi"
];

let animals = [
    "monkey",
    "horse",
    "dog"
];

// First Array
fruits.push("orange");
document.write(fruits);

fruits.pop("orange");
document.write('<br>');
document.write(fruits);


//Second Array
let result = animals.reverse();
document.write('<br>');
document.write(animals);

result.unshift("cat");
document.write('<br>');
document.write(result);


