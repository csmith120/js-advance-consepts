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

const fruits = ['apple', 'banana', 'cherry', 'date'];

console.groupEnd()