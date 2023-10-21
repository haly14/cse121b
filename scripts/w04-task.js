/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Haley Atkinson"
    photo: "images/profile.png"
    favoriteFoods: [
        'Katsudon',
        'Ice Cream',
        'Potatoes'
    ]
    hobbies: [
        'Making Music',
        'Hiking',
        'Reading',
        'Video Games'
    ]
    placesLived: [

    ]
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Montana, USA',
        length: '14 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').textContent = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */


/* Places Lived DataList */


