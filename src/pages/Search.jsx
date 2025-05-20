import React from 'react'
import { restaurants } from '../data'


const search = () => {
  return (
    <div>
        {/* <!-- navigation Bar --> */}
        
    {/* <nav class="bg-dark text-white py-3">
        <div class="container mx-auto d-flex justify-content-between align-items-center">
            <h1 class="h3 fw-bold m-2">Directorio de restaurantes</h1>
            <div class="d-flex gap-4 m-2 p-1 ">
                <a href="home.html" class="link-secondary">Home</a>
                <a href="search.html" class="link-secondary">Search</a>
                <a href="new-restaurant.html" class="link-secondary bg-hover">New/Add</a>
            </div>
        </div>
    </nav> */}

    <div class="container my-4">
        <h2 class="text-center">Buscar restaurantes</h2>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Buscar por nombre" id="searchInput"/>
            <button class="btn btn-primary" type="button">Buscar</button>
        </div>
        <div id="results" class="mt-4">
            
        </div>
    </div>
    </div>
  )
}

export default search
