// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'China',
        capital: 'Beijing',
        largestCity: 'Chongqing',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Anhui',
                capital: 'Hefei',
                largestCity: 'Liuan',
                area: 15452,
            },
            {
                name: 'Guangdong',
                capital: 'Guangzhou',
                largestCity: 'Qingyuan',
                area: 19000,
            },
            {
                name: 'Hunan',
                capital: 'Changsha',
                largestCity: 'Huaihua',
                area: 27564,
            },
        ],
    },
    {
        country: 'Iceland',
        capital: 'Reykjavik',
        largestCity: 'Reykjavik',
        subdivisionName: 'region',
        subdivisions: [
            {
                name: 'Southern Peninsula',
                capital: 'Keflavik',
                largestCity: 'Keflavik',
                area: 829,
            },
            {
                name: 'Westfjords',
                capital: 'Isafjordur',
                largestCity: 'Isafjordur',
                area: 9447,
            },
            {
                name: 'East',
                capital: 'Egilsstadir',
                largestCity: 'Egilsstadir',
                area: 22182,
            },
        ],
    },
]

// Your code goes below
// This code will run when the page loads
window.onload = function() {
    // Find the <main> element to serve as the container for the geography content
    const geographyContainer = document.querySelector('main');

    // Function to create the html content for each country
    function createGeographyItem(country) {
        // Create an article element for each country's information
        const countryItem = document.createElement('article');
        countryItem.classList.add('geography-item');
        
        // Add the country's name as a heading
        const countryHeading = document.createElement('h2');
        countryHeading.textContent = country.country;
        countryItem.appendChild(countryHeading);

        // Add the capital city and largest city as paragraphs
        const capitalInfo = document.createElement('p');
        capitalInfo.textContent = `Capital: ${country.capital}`;
        countryItem.appendChild(capitalInfo);

        const largestCityInfo = document.createElement('p');
        largestCityInfo.innerHTML = `Largest City: ${country.largestCity}`;
        countryItem.appendChild(largestCityInfo);

        // Create a list to hold the subdivisions of the country
        const subdivisionsList = document.createElement('ul');
        subdivisionsList.classList.add('subdivisions-list');
        countryItem.appendChild(subdivisionsList);

        // Add each subdivision to the list
        country.subdivisions.forEach(subdivision => {
            const subdivisionItem = document.createElement('li');
            subdivisionItem.innerHTML = `${subdivision.name} (Capital: ${subdivision.capital}, Largest City: ${subdivision.largestCity}${subdivision.area ? `, Area: ${subdivision.area} km²` : ''})`;
            subdivisionsList.appendChild(subdivisionItem);
        });

        return countryItem;
    }

    // Create the html content for each country
    GEOGRAPHY_LIST.forEach(country => {
        const countryItem = createGeographyItem(country);
        geographyContainer.appendChild(countryItem);
    });
};
