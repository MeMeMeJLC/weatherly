var Geo={};
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success,error);
}
else {
    alert('sorry, you have no geolocation');
}

function error(err) {
    alert("sorry, we can't find you for some reason. error code = " + err.code + " " + err.message);
}

function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;

    var api_key = '31b66c553f1a25dc';
    var weather = "http://api.wunderground.com/api/” + api_key + ”/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";

    $.ajax({
        url : weather,
        dataType : "jsonp",
        success : function(data) {
            var location =data['location']['city'];
            var temp = data['current_observation']['temp_f'];
            var img = data['current_observation']['icon_url'];
            var desc = data['current_observation']['weather'];
            var wind = data['current_observation']['wind_string'];
        
            //setting the spans to the correct parameters
            $('#location').html(location);
            $('#temp').html(temp);
            $('#desc').html(desc);
            $('#wind').html(wind);
            //filling the image src attribute with the image url
            $('#img').attr('src', img);
         }
    });


}