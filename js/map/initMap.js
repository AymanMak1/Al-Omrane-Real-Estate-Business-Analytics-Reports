
const map = L.map('map').setView([33, -2.653570542209101], 7);
function initMap(){
   var mapboxAccessToken = 'pk.eyJ1IjoiYXltYW5tYXBib3giLCJhIjoiY2ttZzRiMmJxM2JvOTJ5bjZmbnZlcXQ4byJ9.Q__qqozqOf5ESTfxSLYy5g';
   L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/dark-v10',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: ''
   }).addTo(map);
}

