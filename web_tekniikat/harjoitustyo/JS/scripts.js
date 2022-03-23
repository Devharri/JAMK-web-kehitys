// <GotoTop-button>
//Get the button
var mybutton = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// </GotoTop-button>

//<Navbar functions>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav responsive") {
    x.className = "topnav";
  }
}
//</Navbar functions>

// <Scroll smooth>
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var delayTime = 0;

      //Get browser and use different scrolling delays
      //Opera
      if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        delayTime = 700;
      }
      //Edge
      else if (navigator.userAgent.indexOf("Edg") != -1) {
        delayTime = 700;
      }
      //Chrome, delay is delay before function
      else if (navigator.userAgent.indexOf("Chrome") != -1) {
        delayTime = 50;
      }
      //Safari, delay is animation time
      else if (navigator.userAgent.indexOf("Safari") != -1) {
        delayTime = 700;
      }
      //Firefox
      else if (navigator.userAgent.indexOf("Firefox") != -1) {
        delayTime = 700;
      }
      //IE
      else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
      {
        delayTime = 700;
      }
      //Unknown
      else {
        delayTime = 700;
      }


      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, delayTime, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// </Scroll smooth>