function getRestaurants(lat, lon, cuisineId, radius, cb) {
  var settings = {
    async: true,
    crossDomain: true,
    url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&radius=${radius}&cuisines=${cuisineId}`,
    method: "GET",
    headers: {
      "user-key": "cc4feb66d0d2aefeb3be88d334f570b7",
    }
  }

  $.ajax(settings).done(function(response) {
    console.log(response.restaurants);
    if (cb) cb(response.restaurants);
  })
}