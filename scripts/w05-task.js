/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = []; // Use let instead of const to reassign the array.

/* async displayTemples Function */
const displayTemples = (temples) => {
  reset(); // Clear existing temples
  temples.forEach((temple) => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
      templeList = await response.json();
      displayTemples(templeList);
    } else {
      console.error("Error fetching data:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

/* reset Function */
const reset = () => {
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
}

/* sortBy Function */
const sortBy = (temples) => {
  const filter = document.querySelector('#sortBy').value;
  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'nonutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
      break;
    case 'all':
      displayTemples(temples);
      break;
    default:
      break;
  }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList) });

getTemples();
