var urlParams = new URLSearchParams(window.location.search);
var restId = urlParams.get('id');

//var restId = "16507624";

//Ajax call to receive restaurant menus
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

  $.ajax(settings).then(function(response){
    console.log("response = ", response);
    console.log("Meal courses " + response.daily_menus[1].daily_menu.name);
    console.log("Meal type " + response.daily_menus[1].daily_menu.dishes[0].dish.name);
    console.log("Meal price " + response.daily_menus[1].daily_menu.dishes[0].dish.price);
  
    var dailyMenuMeals = response.daily_menus;
    
    //for loop to get courses and appending to HTML
    for (var i=0; i<dailyMenuMeals.length; i++) {
      var divCard = $("<div class='menu-card'>");
      var divCourse = $("<div class='menu-course'>" );
      divCourse.text(dailyMenuMeals[i].daily_menu.name);
      divCard.append(divCourse);
    
      //second for loop to get meals within courses and appending to HTML
      for (var j=0; j < dailyMenuMeals[i].daily_menu.dishes.length; j++) {
        var divName = $("<p class='menu-name'>" + dailyMenuMeals[i].daily_menu.dishes[j].dish.name + "</p>");
      //var divDish = $("<p class='menu-name'>");
        divCard.append(divName);
        console.log(dailyMenuMeals[i].daily_menu.dishes[j].dish.name);
      }
      $("#menu").append(divCard);
    } 
  
  //if no menu is available
  }).fail(function(error){
    
    console.log("error = ", error)
    console.log(error.responseJSON.message)
    var errorMessage = $("<p class='error'>" + error.responseJSON.message + "</p>");
    $("#menu").append(errorMessage);

  });
}
restaurantMenu();


