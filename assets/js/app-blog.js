/*--=====================================
=            Aonomy Fixed Navbar        =
======================================--*/

(function($) { 
  "use strict"; 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
      $('.aonomy-top').addClass("scroll-header");
    }
    else{
      $('.aonomy-top').removeClass("scroll-header");
    }
  });
})(jQuery);

/*--=====================================
=             Aonomy Preloader          =
======================================--*/

(function($) { 
  "use strict"; 
  $(window).on('load', function() {
    $(".aonomy-preloader").fadeOut("slow");
  });
})(jQuery);

/*--=====================================
=         Aonomy Smooth Scroll          =
======================================--*/

if (typeof href === 'undefined') {
  (function($) {
    "use strict"; 
    $('.navbar-nav a').on('click', function() {
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top-158
      }, 1000);
       return false;
    });
  })(jQuery);
}

/*--=====================================
=      Aonomy Animation on Scroll       =
======================================--*/

(function($) { 
  "use strict"; 
  $(window).on('load', function() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      disable: 'mobile'
    });
  });
})(jQuery);

/*--=====================================
=        Aonomy Parallax Effect         =
======================================--*/

(function($) { 
  "use strict"; 
  $(window).stellar({
    horizontalScrolling: false,
    verticalOffset: 0,
    horizontalOffset: 0
  });
})(jQuery);

/*--=====================================
=            Google Map Setting         =
======================================--*/

function initMap() {
  "use strict"; 
  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
    [
      {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{color: '#c9b2a6'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{color: '#dcd2be'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ae9e90'}]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#93817c'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{color: '#a5b076'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#447530'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#f5f1e6'}]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{color: '#fdfcf8'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#f8c967'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#e9bc62'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{color: '#e98d58'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{color: '#db8555'}]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{color: '#806b63'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{color: '#8f7d77'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ebe3cd'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{color: '#b9d3c2'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#92998d'}]
      }
    ],
    {name: 'Styled Map'});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.763673, lng: -73.925750},
    zoom: 11,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

/*--=====================================
=              Particles Js             =
======================================--*/

(function($) { 
  "use strict"; 
  $(window).on("load", function() {
    particlesJS.load('particles-js', 'assets/json/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  });
})(jQuery);

/*=====================================
=            Search Button            =
=====================================*/

(function($) {
  "use strict";
  $('.aonomy-search-form input[type="submit"]').val('');
})(jQuery);


