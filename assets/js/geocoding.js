function getCoordsFromLocation(location, cb) {
  const settings = {
    async: true,
    crossDomain: true,
    url:
      `https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${location}&format=json&accept-language=en&limit=1&polygon_threshold=0.0`,
    method: "GET",
    headers: {
      "x-rapidapi-key": "ixAie5Ghfgmsh9LoyF33FoV3i8jkp1u32SjjsnGIH86iebObCj",
      "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    var result = {
      displayName: response[0].display_name,
      lat: response[0].lat,
      lon: response[0].lon,
    }
    if (cb) cb(result);
  });
}
