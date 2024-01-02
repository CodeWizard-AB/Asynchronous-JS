"use strict";

// ? FETCH API -
const url = "https://cat-fact.herokuapp.com/facts";

const getFacts = async function () {
	console.log("getting data..");
	const response = await fetch(url);
	const data = await response.json();
	document.querySelector(".heading").textContent = data[0].text;
};

