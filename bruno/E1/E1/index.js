let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;

let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;


let mySandwiches = JSON.parse(sandwiches)
let myFries = JSON.parse(fries)


console.log(mySandwiches)

document.write(` My favorite Sandwitch ${mySandwiches.sandwich} which has approximately ${mySandwiches.calories} 260 calories, along with it I enjoy eating ${myFries.fries_size} which have about ${myFries.calories} calories.`)