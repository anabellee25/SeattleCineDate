 // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
    //   <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8NiCJndcIn85_FDZyrsNSCwKpXYEddCY &libraries=places">

   var latitude = "";
   var longitude = "";

    function initAutocomplete() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13,
        mapTypeId: 'roadmap'
      });

      // Create the search box and link it to the UI element.
      var input = document.getElementById('pac-input');
      var searchBox = new google.maps.places.SearchBox(input);
      // Bias the SearchBox results towards current map's viewport.
      map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });

      $("#map").append(map);
    }
 
    var latitude = places[0].geometry.location.lat() 
    var longitude = places[0].geometry.location.lng()
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=" + latitude + "&longitude=" + longitute + "&api_key=QFHErTvRFbDe_tV7InD9eJtJgWqIUxsjrBZ0F_MNkvHFd6bMj4Bo-Tb5mC1MkkNpUeogb4poxe-EvLILWp7d0p2t8KUhR_k1AqpX_lrhbqtrPeRSQ3En3p93wK38W3Yx&limit=10";

    $.ajax ({
      url: queryURL,
      method: "GET"
  })
  .then(function(response){
      var results = response.data;
      console.log(results)
  })