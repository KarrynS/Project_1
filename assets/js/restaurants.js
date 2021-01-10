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
    // createListing(restaurant);
    renderListing(restaurant);
  })
})

// Set the body to a variable
var body = document.body;

function renderListing(restaurant) {
  var resRow = $("<tr class='resRow'>");
  var resImg = $("<td>").append($("<img>").attr("src", restaurant.thumb ? restaurant.thumb : "assets/img/no-image.jpg").attr("width", "125"))
  var resName = $("<td>").text(restaurant.name);
  var resRating = $(`<td style='color: #${restaurant.user_rating.rating_color}'>`).text(`${restaurant.user_rating.aggregate_rating} (${restaurant.user_rating.rating_text})`);
  var resCost = $("<td>").text(restaurant.currency + restaurant.average_cost_for_two);

  $("#costTitle").text(`Average ${restaurant.currency} (for two)`)

  resRow.on("click", () => window.location.href = `resdetailpage.html?id=${restaurant.id}`)
  resRow.append(resImg, resName, resRating, resCost);

  $("#resResults").append(resRow);
}

// function createListing(restaurant) {
//   // Create all necessary elements
//   var overallBanner = document.createElement("div");
//   overallBanner.addEventListener("click", function() {
//     window.location.href = `resdetailpage.html?id=${restaurant.id}`;
//   })

//   // For each restaurant you need:
//   var restaurantBanner = document.createElement("div");
//   var resName = document.createElement("div");
//   var picture = document.createElement("div");
//   var rating = document.createElement("div");
//   var cost = document.createElement("div");
//   var image = document.createElement("img");

//   image.src = restaurant.thumb
  


//   //$("img").on('error', function() {
//     //$(this).attr("src", "/assets/img/nophoto.jpg");

//   // Append all of our elements
//   body.appendChild(overallBanner);
//   overallBanner.appendChild(restaurantBanner);
//   restaurantBanner.appendChild(resName);
//   restaurantBanner.appendChild(picture);
//   restaurantBanner.appendChild(rating);
//   restaurantBanner.appendChild(cost);
//   picture.appendChild(image);

//   // Set the text content of relevant elements
//   resName.textContent = restaurant.name;
//   // picture.textContent = "Image";
//   rating.textContent = restaurant.user_rating.aggregate_rating;
//   cost.textContent = restaurant.currency + restaurant.average_cost_for_two;

//   // Set attributes for elements
//   overallBanner.setAttribute("class", "flex-parent");
//   restaurantBanner.setAttribute("class", "flex-child flex-parent");
//   resName.setAttribute("class", "flex-child name");
//   picture.setAttribute("class", "flex-child picture");
  
//   //Display alternative image
//     image.setAttribute("alt", "Image not found")
//     image.setAttribute("onerror", "this.onerror=null;this.src='assets/img/no-image.jpg'");
  
//   rating.setAttribute("class", "flex-child rating");
//   cost.setAttribute("class", "flex-child cost");
// }