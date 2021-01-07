var urlParams = new URLSearchParams(window.location.search);
var restId = urlParams.get('id');

//var restId = "16577492";

//Establishing AJAX call for restaurant reviews
function restaurantReviews() {
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://developers.zomato.com/api/v2.1/reviews?res_id=" + restId,
        method: "GET",
        headers: {
        "user-key": "cc4feb66d0d2aefeb3be88d334f570b7",
        }
    };
    
    $.ajax(settings).done(function(response) {
        console.log(response.user_reviews)
        //Appending reviews to HTML
        var userReviews = response.user_reviews;

        for (var i=0; i < userReviews.length; i++) {
            var divCard = $("<div class='review-card'>");
            var divImg = $("<div class='image-div'>");
            var img = $("<img id='review-img' alt='user photo'/>");
            var divSection = $("<div class='section-div'>");
            var header = $("<h5 id='review-name'>" + response.user_reviews[i].review.user.name + "</h5>");
            var para = $("<p id='review-text'>" + response.user_reviews[i].review.review_text + "</p>");
            divSection.append(header, para);
            divImg.append(img);
            divCard.append(divImg, divSection);
            $("#reviews").append(divCard);
            img.attr("src", response.user_reviews[i].review.user.profile_image);
        }
    })
};
restaurantReviews();


