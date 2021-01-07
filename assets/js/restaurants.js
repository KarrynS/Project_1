var urlParams = new URLSearchParams(window.location.search);
var cuisineID = urlParams.get('id');
var lat = urlParams.get('lat');
var lon = urlParams.get('lon');
var range = urlParams.get('range');

// get the restaurants from the url params
// getRestaurants(lat, lon, cuisineId, radius, cb)
getRestaurants(lat, lon, cuisineID, range, function(response) {
  //console.log(response)
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
  overallBanner.addEventListener("click", function() {
    window.location.href = `resdetailpage.html?id=${restaurant.id}`;
  })

  // For each restaurant you need:
  var restaurantBanner = document.createElement("div");
  var resName = document.createElement("div");
  var picture = document.createElement("div");
  var rating = document.createElement("div");
  var cost = document.createElement("div");
  var image = document.createElement("img");

  image.src = restaurant.thumb
  


  //$("img").on('error', function() {
    //$(this).attr("src", "/assets/img/nophoto.jpg");

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
  cost.textContent = restaurant.currency + restaurant.average_cost_for_two;

  // Set attributes for elements
  overallBanner.setAttribute("class", "flex-parent");
  restaurantBanner.setAttribute("class", "flex-child flex-parent");
  resName.setAttribute("class", "flex-child name");
  picture.setAttribute("class", "flex-child picture");
  
  //Display alternative image
    image.setAttribute("alt", "Image not found")
    image.setAttribute("onerror", "this.onerror=null;this.src='assets/img/no-image.jpg'");
  
  rating.setAttribute("class", "flex-child rating");
  cost.setAttribute("class", "flex-child cost");
}