
var savedCuisines = [];

//Rendering Search Function and adding previous search to list
function renderSearch () {
    $("#searchButton").on("click", function(event) {
    event.preventDefault();
    var cuisineSearch = $("#findtext").val().trim();
    console.log(cuisineSearch);

    //Retrieving from local storage and updating search result
    savedCuisines = localStorage.getItem("savedCuisines");
    savedCuisines = JSON.parse(savedCuisines);
    if ( !savedCuisines ){
      savedCuisines = [];
    }
    savedCuisines.push(cuisineSearch);

    //Saving previous searches to local storage
    localStorage.setItem("savedCuisines", JSON.stringify(savedCuisines));

     //Appending previous searches to sidebar
     $("#offCanvasNestedOverlap").empty();
     for ( i = 0; i < savedCuisines.length; i++) {
       var prevCuisine = $("<div class='prevCuisine'></div");
       prevCuisine.text(savedCuisines[i]).attr("data-name", savedCuisines[i]);
       console.log(savedCuisines[i])
       $("#offCanvasNestedOverlap").prepend(prevCuisine);
       } 
    })
}
renderSearch();
