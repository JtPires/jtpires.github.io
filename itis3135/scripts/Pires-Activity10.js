$(document).ready(function() {


        // preload the image for each link
$("#image_list a").each(function () {
const link = $(this).attr("href");
const caption = $(this).attr("title");

var image = new Image();
image.src = link;



        // set up the event handlers for each link
$(this).click(function(event){
const link = $(this).attr("href");
const caption = $(this).attr("title");




    			// get the image URL and caption for each image and animate the caption

$("#caption, #image").fadeOut(3000, function() {
$("#image").attr("src", link);
$("#caption").text(caption);
$("#caption, #image").fadeIn(3000);
$("#caption").animate({fontSize: "2em"});

});



            // cancel the default action of each link
event.preventDefault();
});
});





    // move the focus to the first link
$("a:first").focus();



}); // end ready