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




