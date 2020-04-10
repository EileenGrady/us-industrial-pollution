(function() {

    var map = L.map('map', {
      zoomSnap: .1,
      center: [41.862458, -87.635606],
      zoom: 11,
      zoomControl: false,
      minZoom: 9
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

})