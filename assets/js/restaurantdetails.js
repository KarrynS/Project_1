var restId = "16577492";

//Establishing AJAX call for Restaurant Details
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
    
    //Adding photos
    var restPhotos = response.featured_image;
    $("#photo-header").attr("src", restPhotos);

    //Adding menu
    var restMenu = response.menu_url;
    $("#menu").attr("href",restMenu)
    $("#menu").text("Restaurant Menu");
    
    })
  };
restaurantDetails();

