function initMap() {   
    if (navigator.geolocation) {
        try{
            navigator.geolocation.getCurrentPosition(function(position) {
                var myLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                setPos(myLocation);
            });
        }
        catch (err) {
            var myLocation = {
                lat: 51.0535,
                lng: 3.7304
            }
        }
    } else {
        var myLocation = {
            lat: 51.0535,
            lng: 3.7304
        }
        setPos(myLocation);
    }

}
            
function setPos(myLocation) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLocation,
        zoom: 15,
        scrollwheel: true,
    });
                
                
    // DATASETS
                
    $(document).ready(function() {
        $.getJSON("https://ranidevr1.github.io/datasets_herex/indoor-wifi.json", function(json1) {
            $.each(json1, function(key, data) {
                var latLng = new google.maps.LatLng(data.lat, data.lng); 
                // Creating a marker and putting it on the map
                var marker = new google.maps.Marker({
                    position: latLng,
                    title: data.title,
                    map: map,
                    icon: pin_indoor
                });
                marker.setMap(map);
                var contentStringIndoor = '<div><h3>' + this.NAAM + '</h3><br><strong> Adres: </strong>' + this.STRAAT + ' ' + this.HUISNR + '<br><strong> Gemeente: </strong>' + this.POSTCODE + ' ' + this.GEMEENTE + '<br><strong>Telefoon: </strong>' + this.TELEFOON + '<br><strong> E-mail: </strong>' + this.EMAIL + '<br></div>';
                var infowindowIndoor = new google.maps.InfoWindow({
                    content: contentStringIndoor
                });
                marker.addListener('click', function() {
                    infowindowIndoor.open(map, marker);
                });
            });
        });  
    }); 
                
    $(document).ready(function() {
        $.getJSON("https://ranidevr1.github.io/datasets_herex/outdoor-wifi.json", function(json2) {
            $.each(json2, function(key, data) {
                var latLng = new google.maps.LatLng(data.lat, data.lng); 
                // Creating a marker and putting it on the map
                var marker = new google.maps.Marker({
                    position: latLng,
                    title: data.title,
                    map: map,
                    icon: pin_outdoor
                });
                marker.setMap(map);
                var contentStringOutdoor = '<div><h3>' + this.NAAM + '</h3><br><strong> Adres: </strong>' + this.STRAAT + ' ' + this.HUISNR + '<br><strong> Gemeente: </strong>' + this.POSTCODE + ' ' + this.GEMEENTE + '<br><strong>Telefoon: </strong>' + this.TELEFOON + '<br><strong> E-mail: </strong>' + this.EMAIL + '<br></div>';
                var infowindowOutdoor = new google.maps.InfoWindow({
                    content: contentStringOutdoor
                });
                marker.addListener('click', function() {
                    infowindowOutdoor.open(map, marker);
                });
            });
        });  
    });               
            
    
    // LOCATIE
                
    var pinpoint_location = {
        url: 'img/pinpoint_locatie.png',
        size: new google.maps.Size(25, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 35),
        scaledSize: new google.maps.Size(25, 40)
    };
                
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: myLocation,
        icon: pinpoint_location
    });
                
                
    // PINPOINTS
                
    var pin_indoor = {
        url: 'img/pinpoint_indoor.png',
        size: new google.maps.Size(25, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 35),
        scaledSize: new google.maps.Size(25, 40)
    };
                
    var pin_outdoor = {
        url: 'img/pinpoint_outdoor.png',
        size: new google.maps.Size(25, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 35),
        scaledSize: new google.maps.Size(25, 40)
    };
                
                
    // INFOWINDOW
                
    var contentStringLocatie = '<div><strong> Jouw locatie </strong></div>';
    var infowindowLocatie = new google.maps.InfoWindow({
        content: contentStringLocatie
    });
    marker.addListener('click', function() {
        infowindowLocatie.open(map, marker);
    });
            
            }
            
            
function processResults(results, status, pagination) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
    } else {
        createMarkers(results);
    }
}
            
function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
}  