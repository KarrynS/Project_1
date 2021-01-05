// cc4feb66d0d2aefeb3be88d334f570b7
// https://developers.zomato.com/api/v2.1/cuisines?lat=-37.8142176&lon=144.9631608

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
    }

    $.ajax(settings).done(function(response) {
      console.log(response);
    })
  });
})