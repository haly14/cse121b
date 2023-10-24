/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = `Haley Atkinson`;
let currentYear = `2023`;
let profilePicture = `images/profile.jpg`;

/* Step 3 - Element Variables */
const nameElement = document.getElementById(`name`);
const foodElement = document.getElementById(`food`);
const yearElement = document.querySelector(`#year`);
const imageElement = document.getElementById(`image`);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = [`katsudon`, `ice cream`, `potatoes`];

let newFavoriteFood = `sushi`; // Your new favorite food
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br')}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br')}`;
