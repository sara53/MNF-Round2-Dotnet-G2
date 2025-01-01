// function Person(name = "", age = "", address = "") {
// 	if (this.constructor == Person) {
// 		throw "can not take an object from an abstract class";
// 	}
// 	this.name = name;
// 	this.age = age;
// 	this.address = address;
// }

// Person.prototype.trackName = "dotnet";
// Person.prototype.display = function () {
// 	throw "Method not implemented";
// };

// function User(name, age, address, password) {
// 	Person.call(this, name, age, address);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;

// User.prototype.generatePassword = function () {
// 	console.log(`${this.password.toUpperCase()}#$%${this.age}`);
// };

// User.prototype.display = function () {
// 	console.log(`${this.name} ${this.age} ${this.address} ${this.password}`);
// };
// var myUser = new User("ahmed", 23, "qena", "ahmed");

// myUser.display();
// console.log(myUser);
// console.log(myUser.display());
// console.log(Person.prototype);
// console.log(User.prototype);
// p1.__proto__.trackName = "hello";
// var p1 = new Person("ali", 25, "alex");
// var p2 = new Person("mona", 25, "alex");

// p1.display();
// p2.display();
// console.log(p1.trackName);
// console.log(p2.trackName);

// console.log(p1.__proto__.__proto__ == Object.prototype);
// console.log(Person.prototype.__proto__ == Object.prototype);

// var p2 = new Person("mona", 20, "banha");

// console.log(p1.toString());
// console.log(p2.toString()); //
// p1.display();
// p2.display();
//new -- function constructor
/**
 * 1- create {}
 * 2- this = {}
 * 3- return {}
 *
 *
 */

// var product = { name: "book" }; // new Object
// var user = {};
// console.log(product);
// console.log(user);

// console.log(Object.prototype);
// console.log(product.__proto__ == Object.prototype);
// console.log(user.__proto__ == product.__proto__);

// Array.prototype.push = function () {
// 	console.log("Hello");
// };
// var arr = []; // arr = new Array()
// arr.push("ali");
// console.log(arr);

// var product = {
// 	name: "book",
// 	price: 300,
// };

// var result = Object.create(product);
// result.color = "red";
// console.log(result);
// console.log(product);
//overload
// function calcArea(option) {
// 	if (option.type == "circle") return Math.PI * option.r * option.r;
// 	if (option.type == "rectangle") return option.w * option.h;
// }

// console.log(calcArea({ type: "circle", r: 1 }));
// console.log(calcArea({ type: "rectangle", w: 10, h: 20 }));
/**Encapsulation */

// function Person(name, _age) {
// 	// private member
// 	var age = _age;
// 	this.name = name;
// 	// closure -- privilage method
// 	this.getAge = function () {
// 		return age;
// 	};
// 	this.setAge = function (value) {
// 		age = value;
// 	};
// }
function Person(name, _age) {
	// private member
	var age = _age;
	this.name = name;

	Object.defineProperty(this, "ageHandler", {
		get: function () {
			return age;
		},
		set: function (value) {
			age = value;
		},
	});
}

// var p1 = new Person("ali", 24);
// set
// p1.ageHandler = "40";
// //get
// console.log(p1.ageHandler);
// set
// p1.setAge(60); // get
// console.log(p1.getAge());

// console.log(age);
// p1.name = "new Name"; //set
// console.log(p1.name); // get

// var product = {
// 	name: "book",
// };

// Object.defineProperty(product, "price", {
// 	value: 200,
// 	writable: true,
// 	configurable: true,
// 	enumerable: true,
// });

// product.price = 400; // override
// delete product.price;

// console.log(product);
// delete product.name;
//set
// product.name = "pen"; // override
// console.log(product.name);

// for (var key in product) {
// 	console.log(key, product[key]);
// }
