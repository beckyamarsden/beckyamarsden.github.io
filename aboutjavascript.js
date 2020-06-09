function myMap() {
  var bham = {lat:52.475459, lng:-1.884524};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom:15,
    center: bham
 });

 var marker = new google.maps.Marker({
   position: bham,
   map: map,
   title: 'Custard Factory'
 });

}