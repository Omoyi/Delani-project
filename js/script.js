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
  $(n11).mouseOver(function(){
    $("n1").show();
    $("n1").addclass("nb1");
  });
});

$(document).ready(function(event){
  $("#container").submit(function(){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var comment = $("textarea#comment").val();
    alert(name + "we have received your message. Thank you for reaching out to us.");
    event.preventDefault();
  });
});



