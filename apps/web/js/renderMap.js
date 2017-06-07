function renderMap(data){

        var map;
        var bounds = new google.maps.LatLngBounds();
        var mapOptions = {
            mapTypeId: 'hybrid',
            scrollwheel: false
        };

        // Display a map on the page
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //map.setTilt(45);

        // Loop through our array of markers & place each one on the map 
        var markers = []
        
        
        for( var i = 0; i < data.length; i++ ) {
            
            var position = new google.maps.LatLng(data[i].meta_box.latitude, data[i].meta_box.longitude);
            bounds.extend(position);
            
            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: data[i].meta_box.titulo,
                data: data[i],
                icon: "http://hnserver.com.br/~earth4geo/server/wp-content/uploads/icone-50-1.png"
            });
            markers.push(marker);
            
            
            // Allow each marker to have an info window    
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    PubSub.publish('carrega-ver-mais', marker.data);
                }
            })(marker, i));
            
        }
    
        // Automatically center the map fitting all markers on the screen
        console.log(bounds)
        map.fitBounds(bounds);
    
    
        var options = {
            imagePath: request + '/apps/web/js/markercluster/images/m'
        };
        var markerCluster = new MarkerClusterer(map, markers, options);

        // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
        /*var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
            this.setZoom(4);
            google.maps.event.removeListener(boundsListener);
        });*/
}