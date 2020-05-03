
/* SCRIPTS.JS */

function changePic() {
    document.getElementById("profilePic").src = "images/Picture1 - Copy.jpg";
  }
  
  function normalPic() {
    document.getElementById("profilePic").src = "images/picture1.jpg";
  }


$(".go-to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

