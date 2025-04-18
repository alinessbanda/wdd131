
document.addEventListener('DOMContentLoaded', function () {
  // Dynamically set the current year
  document.getElementById('currentyear').textContent = new Date().getFullYear();

  // Dynamically set the last modified date
  document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

  // Hamburger menu toggle functionality
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', function () {
    // Toggle the menu visibility
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
      hamburger.textContent = 'X'; // Change hamburger to 'X' when menu is open
    } else {
      hamburger.textContent = '☰'; // Revert back to hamburger icon when menu is closed
    }
  });

  // Add event listeners for the navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // Prevent default link behavior
      event.preventDefault();

      // Get the category from the clicked link's text
      const category = link.textContent.trim();

      // Call the filter function based on the category
      filterTemples(category);
    });
  });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Brigham City Utah",
    location: "Brigham City, Utah, United States",
    dedicated: "2012, September, 23",
    area: "36000",
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-55265.jpg"
  },
  {
    templeName: "Chicago Illinois",
    location: "Glenview, Illinois, United States",
    dedicated: "1985, August, 9-13",
    area: "37062",
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Parktown, Johannesburg, South Afica",
    dedicated: "1985, August, 24-25",
    area: "19184",
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475.jpg"
  },
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
  const grid = document.querySelector(".res-grid");
  grid.innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class= "label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class= "label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class= "label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    grid.appendChild(card);
  });
}

function filterTemples(category) {
  let filteredTemples;
  switch (category) {
    case "Old":
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) < 1900);
      break;
    case "New":
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) > 2000);
      break;
    case "Large":
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case "Small":
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }
  createTempleCard(filteredTemples);
}
