/* script.js - Commercial Planes Logic */

const grid = document.getElementById('plane-grid');
const filterMan = document.getElementById('man-filter');
const filterType = document.getElementById('type-filter');

function render() {
    grid.innerHTML = '';

    const selMan = filterMan.value;
    const selType = filterType.value;

    const filtered = fleetData.filter(plane => {
        const matchMan = selMan === 'all' || plane.manufacturer === selMan;
        const matchType = selType === 'all' || plane.type === selType;
        return matchMan && matchType;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<h3 style="text-align:center; width:100%;">No flights found.</h3>';
        return;
    }

    filtered.forEach(plane => {
        const html = `
            <a href="details.html?id=${plane.id}" class="plane-card">
                <div class="card-img-box">
                    <img src="${plane.image}" alt="${plane.name}">
                </div>
                <div class="card-details">
                    <span class="tag">${plane.manufacturer}</span>
                    <h2>${plane.name}</h2>
                    <div class="spec-grid">
                        <span>${plane.type}</span>
                        <span>${plane.specs.passengers} Seats</span>
                    </div>
                </div>
            </a>
        `;
        grid.innerHTML += html;
    });
}

// Listeners
filterMan.addEventListener('change', render);
filterType.addEventListener('change', render);
document.addEventListener('DOMContentLoaded', render);