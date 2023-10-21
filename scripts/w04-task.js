/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Haley Atkinson",
    photo: "images/profile.jpg",
    favoriteFoods: [
        "Katsudon",
        "Ice Cream",
        "Potatoes"
    ],
    hobbies: [
        "Making Music",
        "Hiking",
        "Reading",
        "Video Games"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Montana, USA",
        length: "14 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

