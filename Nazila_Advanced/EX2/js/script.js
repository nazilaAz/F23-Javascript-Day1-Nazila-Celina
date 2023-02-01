let people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg" from the array.
let newArray = people.shift();
document.write(people);
document.write('<hr>');

//Add "Matt" to the front of the array.
people.push("Matt");
document.write(people);
document.write('<hr>');

//Remove “James” from the array.
people.splice(2, 1);
document.write(people);
document.write('<hr>');

//Add your name to the end of the array.
people.push("Nazila");
document.write(people);
document.write('<hr>');

//Make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let newPeople = [];
newPeople = people.slice(1);
document.write(newPeople);
document.write('<hr>');

//Using the indexOf method, find the index of where "Mary" is located.
document.write(people.indexOf('Mary'));
document.write('<hr>');

//Using the indexOf method, find the index of where "Foo" is located (this should return -1).
document.write(people.indexOf('Foo'));
document.write('<hr>');

//Redefine the people variable with the values you started with.
people.unshift("Greg")
people.splice(3, 2);
people.push("James");
document.write(people);
document.write('<hr>');

//Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Anna"
people.splice(2, 1);
people.splice(2, 0,"Elizabeth","Anna" );
document.write(people);
