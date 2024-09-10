console.group("exercise 1");
class Subject {
	constructor() {
		this.observers = [];
	}

	// Method to add an observer
	addObserver(observer) {
		this.observers.push(observer);
	}

	// Method to remove an observer
	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	// Method to notify all observers
	notifyObservers() {
		this.observers.forEach(observer => observer.update());
	}
}

class Observer {
	update() {
		console.log('Observer updated!');
	}
}

// Example usage:
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

// Notify all observers
subject.notifyObservers();

// Remove an observer and notify again
subject.removeObserver(observer1);
subject.notifyObservers();

console.groupEnd()

console.group("exercise 2")

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const {name, age} = person;
console.log(name)
console.log(age)

const fruits = ['apple', 'banana', 'cherry', 'date'];
const [,second, ,fourth] = fruits

console.log(second)
console.log(fourth)

console.groupEnd()

console.group("exercie 3")

async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

	// Your async/await code here
}

// Call the function to fetch posts
fetchPosts();

console.groupEnd()