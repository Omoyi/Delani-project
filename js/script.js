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





