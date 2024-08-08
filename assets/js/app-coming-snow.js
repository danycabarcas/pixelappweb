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
    $('.aonomy-coming-contact a').on('click', function() {
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

/*--==============================================
=            MailChimp Subscription            =
==============================================--*/

(function($) { 
  "use strict"; 
  $('#signup').on('submit', function() {
        $("#message").html("<div class='alert alert-info'>" +"Adding your email address..." + "</div>");
        $.ajax({
            url: 'assets/form/subscription.php', // proper url to your "subscription.php" file
            type: 'POST', // <- IMPORTANT
            data: $('#signup').serialize() + '&ajax=true',
            success: function(msg) {
                var message = $.parseJSON(msg),
                    result = '';
                if (message.status === 'pending') { // success
                    result = "<div class='alert alert-success alert-dismissible fade show' role='alert'>" +
                      "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                        "<span aria-hidden='true'>&times;</span>" +
                      "</button>" +
                      "<strong>Success!</strong> Please click the confirmation link that will be emailed to you shortly."+
                    "</div>";
                } else { // error
                    result = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
                  "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                    "<span aria-hidden='true'>&times;</span>" +
                  "</button>" +
                  "<strong>Error: </strong>" + message.detail; +
                "</div>";
                }
                $('#message').html(result); // display the message
            }
        });
        return false;
    });
})(jQuery);

/*--====================================
=            Contact From            =
====================================--*/

(function($) { 
  "use strict"; 

  $('#aonomy-form').validator().on('submit', function (event) {
    if (event.isDefaultPrevented()) {
      event.preventDefault();
    }else{
      event.preventDefault();
      $("#msg").html("<div class='alert alert-info'>" +"Sending email..." + "</div>");
      $.ajax({
        dataType: 'JSON',
        url: 'assets/form/sendmail.php',
        type: 'POST',
        data: $('#aonomy-form').serialize(),
        success: function(response){
          if(response){
            console.log(response);
            if(response['signal'] == 'ok'){
             $('#msg').html("<div class='alert alert-success alert-dismissible fade show' role='alert'>" +
                  "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                    "<span aria-hidden='true'>&times;</span>" +
                  "</button>" +
                  "<strong>Success: </strong>" + response['msg'] +
                "</div>");
              $('input, textarea').val(function() {
                 return this.defaultValue;
              });
            }
            else{
              $('#msg').html("<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
              "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                "<span aria-hidden='true'>&times;</span>" +
              "</button>" +
              "<strong>Error: </strong>" + response['msg'] +
            "</div>");
            }
          }
        },
        error: function(){
          $('#msg').html("<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
              "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                "<span aria-hidden='true'>&times;</span>" +
              "</button>" +
              "<strong>Errors occur.</strong> Please try again later.</div>" +
            "</div>");
        },
      });
    }
  }) 
})(jQuery);

/*--=====================================
=              Particles Js             =
======================================--*/

(function($) { 
  "use strict"; 
  $(window).on("load", function() {
    particlesJS.load('particles-js', 'assets/json/snow.json', function() {
      console.log('callback - particles.js config loaded');
    });
  });
})(jQuery);


/*--=============================================
=            Coming Soon Countdown            =
=============================================--*/

(function($) { 
  "use strict"; 
  $('.aonomy-countdown').countdown('2019/01/01', function(event) {
    $('.aonomy-countdown-days').html(event.strftime('%D'));
    $('.aonomy-countdown-hours').html(event.strftime('%H'));
    $('.aonomy-countdown-minutes').html(event.strftime('%M'));
    $('.aonomy-countdown-seconds').html(event.strftime('%S'));
  });
})(jQuery);