/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Marcos Ismayle da Silva Ribeiro';
let currentYear = new Date().getFullYear();
let profilePicture = '/images/profile.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementsByTagName('img')[0];

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}.`);

/* Step 5 - Array */
let favoriteFood = ['Barbecue', 'Pizza', 'Chocolate', 'Ice Cream'];
foodElement.innerHTML = favoriteFood;

let favoriteFoodItem = 'Pasta';
favoriteFood.push(favoriteFoodItem);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;
