function getCoordsFromLocation(location) {
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=Shepparton%20Victoria&format=json&accept-language=en&limit=1&polygon_threshold=0.0",
    method: "GET",
    headers: {
      "x-rapidapi-key": "ixAie5Ghfgmsh9LoyF33FoV3i8jkp1u32SjjsnGIH86iebObCj",
      "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
