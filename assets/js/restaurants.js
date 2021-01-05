// Set the body to a variable
var body = document.body;

// Create all necessary elements
var overallBanner = document.createElement("div");

// For each restaurant you need:
var restaurantBanner = document.createElement("div");
var resName = document.createElement("div");
var picture = document.createElement("div");
var rating = document.createElement("div");
var cost = document.createElement("div");
var image = document.createElement("img");

// Append all of our elements
body.appendChild(overallBanner);
overallBanner.appendChild(restaurantBanner);
restaurantBanner.appendChild(resName);
restaurantBanner.appendChild(picture);
restaurantBanner.appendChild(rating);
restaurantBanner.appendChild(cost);
picture.appendChild(image);

// Set the text content of relevant elements
resName.textContent = "Restaurant Name";
picture.textContent = "Image";
rating.textContent = "Rating";
cost.textContent = "Cost";

// Set classes for elements
overallBanner.setAttribute('class', "flex-parent");
restaurantBanner.setAttribute('class', "flex-child flex-parent");
resName.setAttribute('class', "flex-child name");
picture.setAttribute('class', "flex-child picture");
rating.setAttribute('class', "flex-child rating");
cost.setAttribute('class', "flex-child cost");
//image.setAttribute('class', 'src', 'http://www.google.com.au')