var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -24.95538, lng: -53.4680036},
    zoom: 18
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -24.95538, lng: -53.4680036},
    title: "SmartCode Sede 1",
    map: mapa
  });
  var marcador2 = new google.maps.Marker({
    position: {lat: -24.9553158, lng: -53.4708827},
    title: "SmartCode Sede 2",
    map: mapa
  });

}