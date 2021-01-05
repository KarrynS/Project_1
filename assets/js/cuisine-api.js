// cc4feb66d0d2aefeb3be88d334f570b7
// https://developers.zomato.com/api/v2.1/cuisines?lat=-37.8142176&lon=144.9631608

const urlParams = new URLSearchParams(window.location.search);

var cuisineList = $("#cuisine-list");

function createCardForCuisine(cuisineType, cuisineID) {
  var cell = $("<div class='cell'>");
  var card = $("<div class='card'>").on('click', () => window.location.href = `Restaurants.html?id=${cuisineID}&lat=${urlParams.get("lat")}&lon=${urlParams.get("lon")}&range=5000`);
  var img = $("<img class='data-name' alt='header' />");
  img.attr('src', 'https://placehold.it/350x300')
  var cardInfo = $("<div class='card-info'>");
  var cuisineHeader = $("<h1>").text(cuisineType); 
  
  cardInfo.append(cuisineHeader);
  card.append(img);
  card.append(cardInfo);
  cell.append(card);

  

  cuisineList.append(cell);
  }

$("#searchButton").on("click", function(e) {
  getCoordsFromLocation($("#findtext").val().trim(), function(result) {

    urlParams.set("lat", result.lat);
    urlParams.set("lon", result.lon);

    var settings = {    async: true,
      crossDomain: true,
      url:
        `https://developers.zomato.com/api/v2.1/cuisines?lat=${result.lat}&lon=${result.lon}`,
      method: "GET",
      headers: {
        "user-key": "cc4feb66d0d2aefeb3be88d334f570b7"
      }
    };

    $.ajax(settings).done(function(response) {
      cuisineList.empty();
      response.cuisines.forEach(function(cuisine) {
        // console.log(cuisine);
        var cuisineType = cuisine.cuisine.cuisine_name;
        var cuisineID = cuisine.cuisine.cuisine_id;
        createCardForCuisine(cuisineType, cuisineID);
      
      })
    });
  });
});