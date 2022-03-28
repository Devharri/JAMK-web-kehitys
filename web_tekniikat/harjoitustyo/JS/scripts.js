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
        delayTime = 500;
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


let lastKnownScrollPosition = 0;
let ticking = false;

function HideSections() {
  var d = document.getElementById('TESTIDIV');
  var testipiilo = document.getElementById('TESTIPIILO');
  d.style.display = "none";
  d.style.height = "0px";
  testipiilo.style.opacity = "0.0";
}

function doSomething(scrollPos) {
  var d = document.getElementById('TESTIDIV');
  var testipiilo = document.getElementById('TESTIPIILO');
    //  block of code to be executed if the condition is true
    //  block of code to be executed if the condition is false
    
    if (scrollPos >= 5) {
      calcoffset1 = scrollPos;
      d.style.display = "flex";
      d.style.height = calcoffset1+"px";
    } else {
      d.style.height = "0px";
    }

    if (scrollPos > 100 && scrollPos < 430){
      offsetti = scrollPos*2;
      testipiilo.style.opacity = "0."+ offsetti;
    } else if (scrollPos >= 430){
      testipiilo.style.opacity = "1.0";
    } else {
      testipiilo.style.opacity = "0.0";
    }


    if (scrollPos <= 430) {
      calcoffset = (600-(scrollPos*1.4));
      d.style.position ="relative";
      d.style.top = calcoffset+"px";
    } else{
      d.style.top = "0px";
      d.style.height = "auto";
      

    }
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      
    });
  
});