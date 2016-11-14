$(function() {
  //All JS goes within these brackets  
  
  $("#height-submit").click(function() {
    var heightString = $("#height").val();
    var height = parseInt(heightString);

    //check if height is greater than 152.4
    if ( height >= 152.4 ) {
      $("#height-submit").hide();
      $("#height").hide();
      $("#answer").text("Get on board!");
      $("#coaster-img").attr("src", "https://media.giphy.com/media/MMQrQQ87G2MmY/giphy.gif");
    } else  {
      $("#answer").text("Hey there shorty, find another ride!")
      $("#coaster-img").attr("src", "https://media.giphy.com/media/ToMjGpkNsMxlvrj8DYc/giphy.gif");
     
  }
      
    
  });

});
