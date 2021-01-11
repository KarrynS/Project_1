// cc4feb66d0d2aefeb3be88d334f570b7
// https://developers.zomato.com/api/v2.1/cuisines?lat=-37.8142176&lon=144.9631608

const urlParams = new URLSearchParams(window.location.search);

var cuisineList = $("#cuisine-list");

function createCardForCuisine(cuisineType, cuisineID) {
  var cell = $("<div class='cell clearfix'>");
  var card = $("<div class='card clearfix'>").on('click', () => window.location.href = `Restaurants.html?id=${cuisineID}&city=${urlParams.get("city")}&lat=${urlParams.get("lat")}&lon=${urlParams.get("lon")}&range=5000`);
  var img = $("<img class='data-name' alt='header' />");
  img.attr('src', `https://b.zmtcdn.com/data/images/cuisines/unlabelled_v2_1/${cuisineID}.jpg`)
    var cardInfo = $("<div class='card-info'>");
  var cuisineHeader = $("<h5>").text(cuisineType); 
  
  cardInfo.append(cuisineHeader);
  card.append(img);
  card.append(cardInfo);
  cell.append(card);

  

  cuisineList.append(cell);

  $(img).on("error", function(){
    $(this).attr('src', 'data:image/png;base64,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');
    });
  }


// API call 
$("#searchButton").on("click", function(e) {
  getCoordsFromLocation($("#findtext").val().trim(), function(result) {

    urlParams.set("city", $("#findtext").val().trim());
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
        var cuisineType = cuisine.cuisine.cuisine_name;
        var cuisineID = cuisine.cuisine.cuisine_id;
        createCardForCuisine(cuisineType, cuisineID);
      })
    });
  });
});




