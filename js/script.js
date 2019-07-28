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
});
$(document).ready(function(){
  $("#dev").click(function(){
    $("#dev").hide();
    $(".b").show();
  });
  $(".b").click(function(){
    $(".b").hide();
    $("#dev").show();
  });
});  
$(document).ready(function(){
  $("#prod").click(function(){
    $("#prod").hide();
    $(".c").show();
  });
  $(".c").click(function(){
    $(".c").hide();
    $("#prod").show();
  });
});




