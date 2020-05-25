(function($) {
  "use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body').vide({
    mp4: "mp4/bg.mp4",
    poster: "img/bg-mobile-fallback.jpg"
  }, {
    posterType: 'jpg'
  });
  $("body").on("contextmenu",function(e){
    console.clear();
    console.log('You might want to contribute to the code instead of just inspecting it! \nhttps://github.com/nikhilkoranne/nikhilkoranne.github.io');
    return false;
  });
  $('body').bind('paste', function (e) {
    e.preventDefault();
  });

})(jQuery); // End of use strict
