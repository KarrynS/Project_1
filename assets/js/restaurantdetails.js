var restId = "16577492";

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
      console.log(response.menu_url);
      console.log(response.photos_url);
      console.log(response.all_reviews);

    //Adding restaurant name
    var restName = response.name;
    $("#restName h1").text(restName);

    //Adding opening hours
    var restHours = response.timings;
    $("#hours").text(restHours);

    //Adding address
    var restAddress = response.location.address;
    $("#address").text(restAddress);

    //Adding phone 
    var restPhone = response.phone_numbers
    $("#phone").text(restPhone);

    //Adding menu -- **not working properly**
    var restMenu = response.menu_url;
    $("#menu").append("<img src='"+ restMenu +"'>");
    
    //Adding photos -- **not working properly**
    var restPhotos = response.photos_url;
    restPhotos.forEach(function() {
        $("#photo-small").append("<img src'"+ restPhotos +"'>");
    })

    //Adding reviews
    
    })
  };
restaurantDetails();

//https://www.zomato.com/melbourne/chin-chin-3-cbd/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop