document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelectorAll('#map').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyDsb0LE0TfHPdY0yKWvtD7XkNQkpZKW_MM&language=';
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5231, lng: -122.6765},
    zoom: 8
  });
}