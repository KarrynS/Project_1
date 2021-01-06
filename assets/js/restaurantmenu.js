var restId = "16575238";

function restaurantMenu() {
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://developers.zomato.com/api/v2.1/dailymenu?res_id=" + restId,
      method: "GET",
      headers: {
        "user-key": "cc4feb66d0d2aefeb3be88d334f570b7",
      }
    };

  $.ajax(settings).done(function(response){
    console.log(response);

  });

restaurantMenu();


}