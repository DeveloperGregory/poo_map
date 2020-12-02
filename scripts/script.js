function initMap() {
    let Nottingham = {lat: 52.95896571463205, lng: -1.1587338560794067};

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: Nottingham
    });
}

