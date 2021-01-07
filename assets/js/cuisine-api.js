// cc4feb66d0d2aefeb3be88d334f570b7
// https://developers.zomato.com/api/v2.1/cuisines?lat=-37.8142176&lon=144.9631608

var cuisineList = $("#cuisine-list");

function createCardForCuisine(cuisineType, cuisineID) {
  var cell = $("<div class='cell'>");
  var card = $("<div class='card'>");
  var img = $("<img class='data-name' alt='cuisine-image' />");
  img.attr('src', `https://b.zmtcdn.com/data/images/cuisines/unlabelled_v2_1/${cuisineID}.jpg`)
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
        //console.log(cuisine.cuisine.cuisine_name);
        var cuisineType = cuisine.cuisine.cuisine_name;
        var cuisineID = cuisine.cuisine.cuisine_id;
        createCardForCuisine(cuisineType, cuisineID);
      })
    });
  });
});