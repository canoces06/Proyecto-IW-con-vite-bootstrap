import React, { useEffect } from 'react';

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');


searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = '';

    restaurants
        .filter(restaurant => restaurant.name.toLowerCase().includes(query))
        .forEach(restaurant => {
            resultsContainer.innerHTML += `  <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
            <div class="rounded shadow overflow-hidden">
                <img src = "${restaurant.image}"
            alt = "${restaurant.name}" class="w-100 img-cover" >

        </div>
                <div class="p-4">
                    <h3 class="fs-3 fw-bold m-2">${restaurant.name}</h3>
                    <p class="m-2">${restaurant.description}</p>
                    <p class="text m-2"><strong>Dirección: </strong>${restaurant.address}</p>
                </div>
        </div>
        `;
            
        });
}); 