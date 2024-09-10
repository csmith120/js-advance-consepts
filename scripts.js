/*console.group("exercise 1");
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
	try{
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	} catch (error){
		console.error('error fetching post:', error)
	};
	//it gives me the first ten entrys in the place JSON holder
}

// Call the function to fetch posts
fetchPosts();

console.groupEnd()
*/
 // this exercise only works when the others are commented out
console.group('exercise 4')
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		// TODO: Add observer to the list
		this.observers.push(observer);
	}

	removeObserver(observer) {
		// TODO: Remove observer from the list
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	notifyObservers(data) {
		// TODO: Notify all observers with given data
		for (const observer of this.observers) {
			observer.update(data);
		}
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

		// TODO: Fetch data from the API and notify observers
		try{
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
		} catch (error){
			console.error('error fetching post:', error)
		};
	}
}

class Observer {
	update(data) {
		// TODO: Handle the received data. If it's an error message, log it.
		if (data.error) {
			console.error(data.error)
		} else {
			const [firstPost] = data;
			console.log('Title of first post:', firstPost.title);
		}
		// If it's the list of posts, destructure and log the title of the first post.
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method
const postService = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

postService.addObserver(observer1);
postService.addObserver(observer2);

postService.fetchAndNotify();
console.groupEnd();