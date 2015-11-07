/**
 * Created by Kevin on 11/7/2015.
 */


function initialize() {
    var panorama = new google.maps.StreetViewPanorama(
    var fenway = {lat: 42.345573, lng: -71.098326};
        document.getElementById('pano'), {
            position: fenway,
            pov: {
                heading: 34,
                pitch: 10
            }
        });
    map.setStreetView(panorama);
}