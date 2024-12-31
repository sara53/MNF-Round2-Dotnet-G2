// var fname = "mona";
// // console.log(fname);
// // console.log(window.fname); // mona

// function sayHello() {
// 	console.log("hello");
// }

// sayHello(); //window

// window.sayHello(); //window

// var person = {
// 	fname: "ali",
// 	display: function () {
// 		console.log("hello");
// 	},
// };

// person.display(); //person

// console.log(window);
// console.log(this); // refer to caller
// var fname = "ali";

// // ali 3
// // undefined 7
// //
// person.display();

// var person1 = {
// 	fname: "Ali",
// 	lname: "ahmed",
// 	display: function (x, y) {
// 		console.log("x : ", x);
// 		console.log("y : ", y);
// 		//console.log("hello dotnet");
// 		console.log(`${this.fname} ${this.lname}`);
// 	},
// };
// var person2 = {
// 	fname: "mona",
// 	lname: "alaa",
// };

// var result = person1.display.bind(person2);
// result(2, true);

// person1.display.call(person1, 2, true);
//person1.display.apply(person1, ["mona", "ahmed"]);

// person1.display(2, true); //
// person1.display.call(person2);

// var person = {
// 	display: function () {
// 		return function () {
// 			console.log("hello");
// 		};
// 	},
// };

// var output = person.display();
// output();

// var fname = "ali";
// function getName() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "mona",
// 	display: function () {
// 		getName.call(this);
// 	},
// };

// person.display(); //
// var fname = "ali";
// var person = {
// 	fname: "mona",
// 	display: function () {
// 		setTimeout(
// 			function () {
// 				console.log(this.fname);
// 			}.bind(this),
// 			2000
// 		);
// 	},
// };
// that pattern
// var fname = "ali";
// var person = {
// 	fname: "mona",
// 	display: function () {
// 		// this person
// 		var that = this; // person
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// ali 1
// mona 7
//undefined 3
// error 2

// function add(x, y) {
// 	return x + y;
// }

// var result = add(3, 4);
// console.log(x);
// console.log(result);

// function getData() {
// 	var trackName = "Dotnet";
// 	var sup = "Ahmed ali";
// 	return function () {
// 		console.log(trackName);
// 	};
// }

// var result = getData();

// result(); //

// function getArr() {
// 	var arr = [];
// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}

// 	return arr;
// }

// var result = getArr();
// result[0]();
// result[1]();
// result[2]();
//0
//1
//2
/**---------------------------- */
// var product1 = {
// 	id: 1,
// 	name: "book",
// 	price: 200,
// 	category: "school",
// };
// var product2 = {
// 	id: 1,
// 	name: "book",
// };
// var product2 = {
// 	id: 1,
// };

// document.writeln(`<h1>${product1.name}</h1>`);
// document.writeln(`<p>${product1.price}</p> <hr/>`);
// document.writeln(`<h1>${product2.name}</h1>`);
// document.writeln(`<p>${product2.price}</p> <hr/>`);

// function product(_id, _name, _price) {
// 	return {
// 		id: _id || "",
// 		name: _name || "",
// 		price: _price || "",
// 		discount: function (rate) {
// 			console.log(this.price * rate);
// 		},
// 	};
// }

// var p1 = product(1, "book", 300);
// var p2 = product(2, "pen", 400);
// var p3 = product(3, "mouse", 100);
// p1.discount(0.5);
// p2.discount(0.5);
// p3.discount(0.2);
