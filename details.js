/* details.js - Handle Details Page */
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const plane = fleetData.find(p => p.id === id);

if (plane) {
    document.getElementById('d-name').innerText = plane.name;
    document.getElementById('d-type').innerText = `${plane.manufacturer} | ${plane.type}`;
    document.getElementById('d-img').src = plane.image;
    document.getElementById('d-desc').innerText = plane.description;
    
    document.getElementById('d-pax').innerText = plane.specs.passengers;
    document.getElementById('d-range').innerText = plane.specs.range;
    document.getElementById('d-speed').innerText = plane.specs.speed;
    
    document.title = `${plane.name} - Details`;
} else {
    document.querySelector('.details-container').innerHTML = '<h1>Plane not found.</h1>';
}