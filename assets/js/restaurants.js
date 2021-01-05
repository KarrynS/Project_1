var urlParams = new URLSearchParams(window.location.search);
var cuisineID = urlParams.get('id');
var lat = urlParams.get('lat');
var lon = urlParams.get('lon');
var range = urlParams.get('range');

// get the restaurants from the url params
// getRestaurants(lat, lon, cuisineId, radius, cb)
getRestaurants(lat, lon, cuisineID, range, function(response) {
  // console.log(response)
  response.forEach(function(restaurant) {
    var restaurant = restaurant.restaurant;
    console.log(restaurant)
    createListing(restaurant);
  })
})

// Set the body to a variable
var body = document.body;

function createListing(restaurant) {
  // Create all necessary elements
  var overallBanner = document.createElement("div");

  // For each restaurant you need:
  var restaurantBanner = document.createElement("div");
  var resName = document.createElement("div");
  var picture = document.createElement("div");
  var rating = document.createElement("div");
  var cost = document.createElement("div");
  var image = document.createElement("img");
  image.src = restaurant.thumb;

  // Append all of our elements
  body.appendChild(overallBanner);
  overallBanner.appendChild(restaurantBanner);
  restaurantBanner.appendChild(resName);
  restaurantBanner.appendChild(picture);
  restaurantBanner.appendChild(rating);
  restaurantBanner.appendChild(cost);
  picture.appendChild(image);

  // Set the text content of relevant elements
  resName.textContent = restaurant.name;
  // picture.textContent = "Image";
  rating.textContent = restaurant.user_rating.aggregate_rating;
  cost.textContent = "Cost";

  // Set classes for elements
  overallBanner.setAttribute("class", "flex-parent");
  restaurantBanner.setAttribute("class", "flex-child flex-parent");
  resName.setAttribute("class", "flex-child name");
  picture.setAttribute("class", "flex-child picture");
  rating.setAttribute("class", "flex-child rating");
  cost.setAttribute("class", "flex-child cost");
  //image.setAttribute('class', 'src', 'http://www.google.com.au')
}