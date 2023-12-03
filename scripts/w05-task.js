/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.forEach(temple => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');

        h3Element.textContent = temple.templeName;

        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        
        const templeList = await response.json();

        window.templeList = templeList;

        displayTemples(templeList);

        console.log(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

/* reset Function */
const reset = () => {
    const templesElement = document.getElementById('templesElement');

    templesElement.innerHTML = '';
}

const sortBy = (temples) => {

    reset();

    const filter = document.getElementById('sortBy').value;

    switch (filter) {
      case 'utah':
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
      case 'nonutah':
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
      case 'older':
        const cutoffDate = new Date(1950, 0, 1);
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < cutoffDate));
        break;
      case 'all':
        displayTemples(temples);
        break;
      default:
        console.error('Invalid filter value');
    }

  


getTemples();

/* Event Listener */

const sortByElement = document.getElementById('sortBy');

sortByElement.addEventListener('change', () => {
  sortBy(templeList);
});

};