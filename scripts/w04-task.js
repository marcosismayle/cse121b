/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Marcos",
    photo: "../images/profile.jpg",
    favoriteFoods: [
        "Barbecue",
        "Pizza",
        "Chocolate",
        "Ice Cream",
        "Pasta"
    ],
    hobbies: [
        "Watch movies and series",
        "Play music",
        "Reading",
        "Hiking",
        "Drawing"
    ],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        locations: [
            { place: "Teresina, PI", length: "23 years" },
            { place: "Salvador, BA", length: "6 months" },
            { place: "Serrinha, BA", length: "3 months" },
            { place: "Esplanada, BA", length: "4.5 months" },
            { place: "Ribeira do Pompal, BA", length: "3 months" },
            { place: "Candeias, BA", length: "4.5 months" },
            { place: "Camaçari, BA", length: "3 months" },
            { place: "Campinas, SP", length: "5 years" }
        ]
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
photo = document.querySelector('#photo');
photo.src = myProfile.photo;
photo.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement('ul');
    ul.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived[0].locations.forEach(location => {
    let dt = document.createElement('dt');
    dt.textContent = location.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = location.length;
    document.querySelector('#places-lived').appendChild(dd);
});