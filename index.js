// Write code to test the functions
import { readMessages, filter } from "./problems/iterables.js";
import { clone } from "./problems/objects.js";
import { Node } from "./problems/selectors.js"

// Iterables - Problem 1
console.log("Iterables Problem 1 - \n");

const messages = ['Object created', 'Object is being processing', 'Object processing completed', 'Random text that I am writing for this assignment 5.'];
readMessages(messages);

console.log("\n");


// Iterables - Problem 2
console.log("Iterables Problem 2 - \n");

const items = [1, 2, 3, 6, 7, 9, 10, 12, 15, 16];
const multipleOfThree = (num) => num % 3 === 0; //Predicate function
const filteredItems = filter(items, multipleOfThree);

console.log(filteredItems);
console.log("\n");


// Objects
console.log("Objects Problem - \n");
const objectToClone = {
    name: 'Sohan',
    age: 25,
    address: {
        homeAddress: {
            street: '106 Forest Hills St',
            apt: 103,
            city: 'Boston',
            zip: '02130',
            country: 'USA',
        },
        workAddress: {
            street: '360 Huntington Ave',
            city: 'Boston',
            zip: '02115',
            country: 'USA',
        },
    },
    hobbies: ['Gaming', 'Travelling', 'Music'],
    favorites: ['Lamborghini', 'Japan', 'Anime'],
};

const clonedObject = clone(objectToClone);
clonedObject.age = 26;
console.log("Original Object: ");
console.log(objectToClone);
console.log("\n");
console.log("Cloned Object: ");

console.log(clonedObject);

console.log("\n");


// Selectors
const htmlNode = new Node("div", [
    new Node("div", [], ["box"], "box-1"),
    new Node("div", [
        new Node("div", [], ["box"], "box-2-1"),
    ], ["box"], "box-2"),
    new Node("div", [
        new Node("div", [], ["content"], ""),
    ], ["box"], "box-3"),
   ], ["container"], "");

const selector = "box";
const selectedNodes = htmlNode.search(selector);

console.log(selectedNodes.map(node => node.id));