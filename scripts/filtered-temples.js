const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();
const pattern = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
if (
    Date.parse(document.lastModified) >
    (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
    document.cookie = `lastModified=${document.lastModified}`;
    const lastModified = document.querySelector("#lastModified");
    lastModified.innerHTML = `Last modified: ${document.lastModified}`;
}
document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.querySelector(".navigation");
    const menubutton = document.getElementById("menu");
    menubutton.addEventListener("click", () => {
        mainNav.classList.toggle("show");
        menubutton.classList.toggle("show");
    });
    document.querySelectorAll('navigation a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('show');
            menubutton.classList.remove('show');
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
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1088.jpg"},
    {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386.jpg"},
    {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, June, 3",
    area: 72000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-48148.jpg"}
];
document.addEventListener("DOMContentLoaded", () => {
    createTempleCard(temples);
});
const oldTemplesLink = document.querySelector("#Old")
oldTemplesLink.addEventListener("click", () => {
    const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 2000);
    createTempleCard(oldTemples);
});
const newTemplesLink = document.querySelector("#New")
newTemplesLink.addEventListener("click", () => {
    const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
    createTempleCard(newTemples);
});
const largeTemplesLink = document.querySelector("#Large")
largeTemplesLink.addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area >= 90000);
    createTempleCard(largeTemples);
});
const smallTemplesLink = document.querySelector("#Small")
smallTemplesLink.addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 90000);
    createTempleCard(smallTemples);
});
const allTemplesLink = document.querySelector("#Home")
allTemplesLink.addEventListener("click", () => {
    createTempleCard(temples);
});
function createTempleCard(filteredTemples) {
    const container = document.querySelector(".temple-pictures");
    container.innerHTML = "";
    filteredTemples.forEach((temple) => {
        let card = document.createElement("section");
        let templeName = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");
        templeName.textContent = temple.templeName;
        location.innerHTML = `Location: ${temple.location}`;
        dedicated.innerHTML = `Dedicated: ${temple.dedicated}`;
        area.innerHTML = `Area: ${temple.area} sq. ft.`;
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} temple`;
        image.loading = "lazy";
        card.appendChild(image);
        card.appendChild(templeName);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        container.appendChild(card);
    });
}