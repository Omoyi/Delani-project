// Back-end logic / Business logic
$(document).ready(function(){
  $("#desi").click(function(){
    $("#desi").hide();
    $(".aa").show();
  });
  $(".aa").click(function(){
    $(".aa").hide();
    $("#desi").show();
  });
  $("#dev").click(function(){
    $("#dev").hide();
    $(".b").show();
  });
  $(".b").click(function(){
    $(".b").hide();
    $("#dev").show();
  });
  $("#prod").click(function(){
    $("#prod").hide();
    $(".c").show();
  });
  $(".c").click(function(){
    $(".c").hide();
    $("#prod").show();
  });
});

var myPictures = ["n11", "n22", "n33", "n44", "n55", "n66", "n77", "n88"];
myPictures.forEach(function(image) {
  $("#" + image).mouseover(function(){
    $("#" + image + " >p").show();
    $("#" + image + " >h3").show(); 
  });
  $("#" + image).mouseout(function(){
    $("#" + image + " >p").hide();
    $("#" + image + " >h3").hide();
  });
});

$(document).ready(function(event){
  $("#submit").click(function(){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var comment = $.trim($("textarea#comment").val());
    if ((name == "") || (email == "") || (comment == "")) {
      alert("Please don't skip. Fill in the form!!");
    }
    else {
      alert("Dear " + name + " we have received your message. Thank you for reaching out to us.");
    }
    event.preventDefault();
  });
});





