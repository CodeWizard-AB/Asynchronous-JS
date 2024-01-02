"use strict";

// ? CALLBACKS - A callback is a function that you pass into another function as an argument for executing later

// const isOdd = (arrs) => arrs.filter((num) => num % 2 !== 0);
// const isEven = (arrs) => arrs.filter((num) => num % 2 === 0);
// const isDividedBy5 = (list) => list.filter((num) => num % 5 === 0);
// const isDividedBy3 = (list) => list.filter((num) => num % 3 === 0);

// const filter = (list, callBack) => callBack(list);
// const list = [1, 5, 6, 8, 9, 7, 4, 10];

// console.log(filter(list, isDividedBy3));
// console.log(filter(list, isDividedBy5));
// console.log(filter(list, isOdd));
// console.log(filter(list, isEven));

// const process = (url) => console.log(`Processing ${url}.`);
// const cancel = (url) => console.log(`${url} not found!`);

// const download = function (url, callBack) {
// 	setTimeout(() => {
// 		console.log(`Downloading ${url}...`);
// 		callBack(url);
// 	}, 2000);
// };

// const url1 = "https://www.javascripttutorial.net/pic1.jpg";
// const url2 = "https://www.javascripttutorial.net/pic2.jpg";
// const url3 = "https://www.javascripttutorial.net/pic3.jpg";

// download(url1, () => {
// 	process(url1);
// 	download(url2, () => {
// 		process(url2);
// 		download(url3, () => {
// 			process(url3);
// 		});
// 	});
// });

// ? UNDERSTANDING ASYNCHRONOUS JS -

const getUsers = function (callBack) {
	setTimeout(() => {
		callBack([
			{ username: "john", email: "john@gmail.com" },
			{ username: "jane", email: "jane@gmail.com" },
			{ username: "david", email: "david@gmail.com" },
		]);
	}, 2000);
};

const findUser = function (username, callBack) {
	let user;
	getUsers((users) => {
		user = users.find((user) => user.username === username);
		callBack(user);
	});
};

findUser("john", console.log);

// ? PROMISE -

// const success = false;
// const promise = new Promise((resolve, reject) => {
// 	if (success) {
// 		resolve("done");
// 	} else {
// 		reject("fail");
// 	}
// });

const usersData = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{ username: "john", email: "john@gmail.com" },
				{ username: "jane", email: "jane@gmail.com" },
				{ username: "david", email: "david@gmail.com" },
			]);
		}, 2000);
	});
};

const onFullfill = function (result) {
  console.log(result);
}

usersData().then(onFullfill)
