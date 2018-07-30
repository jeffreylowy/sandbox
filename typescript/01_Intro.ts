/**
 * DECLARATIONS
 */
let myNum: string;
let strArray: string[];
let bool: boolean;
let obj: object[];
let num: number;
let basicTuple: [string, number, boolean];

/**
 * PRIMITIVES
 */

myNum = 'Hello'.slice(0, 4);
console.log(myNum);

strArray = ['Hello', 'World'];
console.log(`${strArray[0]} ${strArray[1]}`);

bool = true;
console.log(bool);

obj = [{ a: 1 }, { b: 2 }];
console.log(obj);

num = 7;
console.log(num);

/**
 * TUPLES
 */

basicTuple = ['Hi', 100, false];
//basicTuple[3] = {}; // Error: Not a string number or boolean
console.log(basicTuple[2]);

/**
 * FUNCTIONS
 */

/**
 * Does something
 * @param {number} n1 takes a number
 * @param {number} n2 takes am optional number
 * @returns {number}
 */
function addNums(n1: number, n2?: number): number {
	if (!n2) {
		n2 = 1;
	}
	return n1 + n2;
}

console.log(addNums(5, 8)); // 13
console.log(addNums(5)); // 6

function alerty(msg: string): void {
	console.log(msg);
	// return true; Type 'true' is not assignable to type 'void'.
}

alerty('Hi, fren!');

interface Todo {
	title: string;
	text: string;
}

const todo = {
	title: 'Buy milk',
	text: 'Luceence, non-fart, non-dairy.'
};

function showTodo(todo: Todo): string {
	return `${todo.title}: ${todo.text}`;
}

console.log(showTodo(todo));

/**
 * CLASSES
 */

interface UserInterface {
	name: string;
	age: number;
	email: string;
}

/**
 * Get the x value.
 */
class User implements UserInterface {
	name: string;
	age: number;
	email: string;
	/**
	 * Represents a User.
	 * @constructor
	 */
	constructor(name: string, age: number, email: string) {
		this.name = name;
		this.age = age;
		this.email = email;
	}

	sayDetails(): string {
		return `${this.name} is ${this.age} years old. You can contact them at ${this.email}`;
	}
}

class Person extends User {
	employer: string;

	constructor(name: string, age: number, email: string, employer: string) {
		super(name, age, email);
		this.employer = employer;
	}

	/**
	 * Get the x value.
	 * @return {string} The x value.
	 */
	sayDetails(): string {
		return super.sayDetails() + '. They work at ' + this.employer;
	}
}

let jeff = new Person('Jeff Lowy', 35, 'jeffreylowy@gmail.com', 'Google.');
console.log(jeff.sayDetails());
