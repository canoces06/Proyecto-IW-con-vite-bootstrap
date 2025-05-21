

import React, { useEffect } from 'react'; 
import { restaurants } from '../data'; 
const search = () => { 

  
  useEffect(() => {
   
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');
    const btnBuscar = document.getElementById('btnBuscar');

   
    const performSearch = () => {
        const query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = ''; 

       
        restaurants
            .filter(restaurant => restaurant.name.toLowerCase().includes(query))
            .forEach(restaurant => {
                
                resultsContainer.innerHTML += `
                    <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
                        <div class="rounded shadow overflow-hidden justify-content-right">
                            <img src="${restaurant.image}" alt="${restaurant.name}" class="w-100 img-cover">
                        </div>
                        <div class="p-4">
                            <h3 class="fs-3 fw-bold m-2">${restaurant.name}</h3>
                            <p class="m-2">${restaurant.description}</p>
                            <p class="text m-2"><strong>Dirección: </strong>${restaurant.address}</p>
                        </div>
                    </div>
                `;
            });

        
        if (resultsContainer.innerHTML === '') {
            resultsContainer.innerHTML = '<p class="text-center">No se encontraron restaurantes.</p>';
        }
    };

   
    if (searchInput && resultsContainer && btnBuscar) {
     
      searchInput.addEventListener('input', performSearch);
      
      btnBuscar.addEventListener('click', performSearch);


      return () => {
        searchInput.removeEventListener('input', performSearch);
        btnBuscar.removeEventListener('click', performSearch);
      };
    } else {
      
      console.warn("Elemento con ID 'searchInput' o 'results' o 'btnBuscar' no encontrado en el DOM.");
    }
  }, []); 

    return (
        <div>
    

            <div className="container my-4 rounded-3" id="searchContainer">
                <h2 className="text-center pb-3 m">Buscar restaurantes</h2>
                <div className="d-flex flex-column align-items-center"> 
                    <div className="mb-3" id="inputContainer" style={{ width: '100%', maxWidth: '400px' }}> 
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por nombre"
                            id="searchInput" 
                        />
                        <button
                            className="btn btn-primary mt-3 w-100" 
                            type="button"
                            id="btnBuscar" 
                            style={{ backgroundColor: 'rgb(51, 136, 206)' }} 
                        >
                            Buscar
                        </button>
                    </div>
                </div>
                <div id="results" className="mt-4">
                    
                </div>
            </div>
        </div>
    );
}

export default search;