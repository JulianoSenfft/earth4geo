function addPostMapForm(){
    
    var addMap;
    var markersArray = [];
    var latlng = new google.maps.LatLng(-22.8986933, -43.0930278);

    var options = {
        zoom: 5,
        mapTypeId: 'hybrid',
        center: latlng
    };
        
    addMap = new google.maps.Map(document.getElementById("postFormMap"), options);
    var geocoder = new google.maps.Geocoder();

    google.maps.event.addListener(addMap, 'click', function(event) {

        placeMarker(event.latLng);
        geocoder.geocode({ 'latLng': event.latLng }, 
            function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        //preencheCampos(endereco, cep, pais, estado, cidade, latLong)
                        preencheCampos( results[0].formatted_address, extractFromAdress(results[0].address_components, "postal_code"), extractFromAdress(results[0].address_components, "country", "short"), extractFromAdress(results[0].address_components, "administrative_area_level_1", "short"), extractFromAdress(results[0].address_components, "locality"), event.latLng.lat, event.latLng.lng );
                    }
                }
            }
        );
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            placeMarker(pos);
            addMap.setCenter(pos);
            
            
            geocoder.geocode({ 'latLng': pos }, 
                function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            
                            //preencheCampos(endereco, cep, pais, estado, cidade, latLong)
                            preencheCampos( results[0].formatted_address, extractFromAdress(results[0].address_components, "postal_code"), extractFromAdress(results[0].address_components, "country", "short"), extractFromAdress(results[0].address_components, "administrative_area_level_1", "short"), extractFromAdress(results[0].address_components, "locality"), pos.lat, pos.lng );
                            console.log(results[0])
                        }
                    }
                }
            );
            
            
        }, function() {
            handleLocationError(true, placeMarker, addMap.getCenter());
        });
    } else {
        handleLocationError(false, placeMarker, addMap.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    }
    
    //GMAP FUNCTIONS
    function placeMarker(location) {
        deleteOverlays();

        var marker = new google.maps.Marker({
            position: location, 
            map: addMap
        });
        markersArray.push(marker);
    }
    
    function deleteOverlays() {
        if (markersArray) {
            for (i in markersArray) {
                markersArray[i].setMap(null);
            }
        markersArray.length = 0;
        }
    }
    
    function extractFromAdress(components, type, lengthName){
        for (var i=0; i<components.length; i++)
            for (var j=0; j<components[i].types.length; j++)
                if (components[i].types[j]==type){
                    if(lengthName == "short"){
                        return components[i].short_name;
                    }else{
                        return components[i].long_name;
                    }
                    
                }
        return "";
    }
    
    jQuery('#new-post-modal').on('show.bs.modal', function() {
       resizeMap();
    })

    function resizeMap() {
       if(typeof addMap =="undefined") return;
       setTimeout( function(){resizingMap();} , 400);
    }
    
    function resizingMap() {
       if(typeof addMap =="undefined") return;
       var center = addMap.getCenter();
       google.maps.event.trigger(addMap, "resize");
       addMap.setCenter(center); 
    }
    
    function preencheCampos(endereco, cep, pais, estado, cidade, lat, long){
        
        jQuery("#endereco").val(endereco)
        jQuery("#cep").val(cep)
        jQuery("#pais").val(pais)
        jQuery("#estado").val(estado)
        jQuery("#cidade").val(cidade)
        jQuery("#latitude").val(lat)
        jQuery("#longitude").val(long)
    }
}