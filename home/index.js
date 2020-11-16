var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -24.95538, lng: -53.4680036},
    zoom: 18
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -24.95538, lng: -53.4680036},
    title: "PUCPR",
    map: mapa
  });

}