
$(document).ready(function(){

    $("#navbar").hide();
    $("#flightsDiv").hide();
    $("#placesArea").hide();
    $("#map").hide();
    $("#diningArea").hide();

});

$("#submit").on("click", function(){
    $("#header").hide();
    $("#form").hide();
    $("#description").hide();

    $("#navbar").show();
    $("#flightsDiv").show();
    $("#placesArea").show();
    $("#map").show();
    $("#diningArea").show();
});

