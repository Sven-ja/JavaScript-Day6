var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let sandwichObj = JSON.parse(sandwiches);
let friesObj = JSON.parse(fries);

document.getElementById("fastfood").innerHTML += `<p>My favorite sandwich is a ${(sandwichObj.sandwich)} which has approximately ${sandwichObj.calories} calories, along with it I enjoy eating ${friesObj.fries_size} which have about ${friesObj.calories} calories.</p>`