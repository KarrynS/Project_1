var restId = "16774318";

function restaurantDetails() {
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://developers.zomato.com/api/v2.1/restaurant?res_id=" + restId,
      method: "GET",
      headers: {
        "user-key": "cc4feb66d0d2aefeb3be88d334f570b7",
      }
    };
  
    $.ajax(settings).done(function(response) {
      console.log(response);
    })
  };

