
function initMap() {
	var longlat = {lat: 29.4241, lng: -98.4936};
	var map = new google.maps.Map(document.getElementById('contact-map'), {
		zoom: 8,
		center: longlat
	});

	var marker = new google.maps.Marker({
		position: longlat,
		map: map
	});
};