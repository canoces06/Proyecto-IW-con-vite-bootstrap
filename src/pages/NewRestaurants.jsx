import { restaurants } from '../data'


import React, { useEffect } from 'react'; 



const newRestaurants = () => { 

 
  useEffect(() => {
   
    const restaurantForm = document.getElementById("restaurantForm");

    
    if (restaurantForm) {
      const handleSubmit = (event) => {
        event.preventDefault(); 

      
        let name = document.getElementById("name").value;
        let description = document.getElementById("description").value;
        let address = document.getElementById("address").value;
        let imageUrl = document.getElementById("imageUrl").value;

        
        let restaurantCard = `
          <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
              <div class="bg-primary rounded shadow overflow-hidden">
                  <img src="${imageUrl}" alt="${name}" class="w-100 img-cover">
              </div>
              <div class="p-4">
                  <h3 class="fs-3 fw-bold m-2">${name}</h3>
                  <p class="m-2">${description}</p>
                  <p class="text m-2"><strong>Dirección: </strong>${address}</p>
              </div>
          </div>
        `;

        
        const restaurantList = document.getElementById("restaurantList");
        if (restaurantList) {
          restaurantList.innerHTML += restaurantCard;
        } else {
          console.warn("Elemento con ID 'restaurantList' no encontrado.");
        }


        // 4. Limpiamos el formulario
        restaurantForm.reset();
      };

     
      restaurantForm.addEventListener("submit", handleSubmit);

      
      return () => {
        restaurantForm.removeEventListener("submit", handleSubmit);
      };
    } else {
      console.warn("Elemento con ID 'restaurantForm' no encontrado en el DOM.");
    }
  }, []); 

  return (
    <div>
      <div className="container my-4 rounded-3" id="AgregarContainer">
        <h3 className="text-center fw-bold mb-5">Agregar Nuevo Restaurante</h3>
    
        <form id="restaurantForm"> 
          <div className="mb-3 fw-bold">
            <label htmlFor="name" className="form-label">Nombre del Restaurante</label>
            <input type="text" className="form-control" id="name" title="Escriba el nombre del restaurante" required />
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor="description" className="form-label">Descripción</label>
            <textarea className="form-control" id="description" rows="2" title="Escriba una descripción breve" required></textarea>
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor="address" className="form-label">Dirección</label>
            <input type="text" className="form-control" id="address" title="Escriba la dirección" required />
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor="imageUrl" className="form-label">URL de la Imagen</label>
            <input type="text" className="form-control" id="imageUrl" title="Pegue aquí la URL del restaurante" required />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            style={{ color: 'rgb(0, 0, 0)', width: '50%', backgroundColor: 'rgb(51, 136, 206)', marginTop: '15px' }}
          >
            Agregar Restaurante
          </button>
        </form>
      </div>

      <div className="row g-4 p-3 m-4 justify-content-right" id="restaurantList">
        
      </div>
    </div>
  );
};

export default newRestaurants;


// const newRestaurants = () => {
//   return (
//     <div>
      

//     <div class="container my-4 rounded-3" id = "AgregarContainer">
       

//         {/* <!-- Profe, todo esto lo tuve que investigar porque no sabía cómo hacerlo
//                 además, retiré los placeholders que había en los campos y los sustituí por titles que salen cuando paso el clic sobre el campo --> */}
//         <div class="container my-4">
//             <h3 class="text-center fw-bold mb-5">Agregar Nuevo Restaurante</h3>
//             <form id="restaurantForm">
//                 <div class="mb-3 fw-bold">
//                     <label for="name" class="form-label">Nombre del Restaurante</label>
//                     <input type="text" class="form-control" id="name" title="Escriba el nombre del restaurante" required/>
//                 </div>
//                 <div class="mb-3 fw-bold">
//                     <label for="description" class="form-label">Descripción</label>
//                     <textarea class="form-control" id="description" rows="2" title="Escriba una descripción breve" required></textarea>
//                 </div>
//                 <div class="mb-3 fw-bold">
//                     <label for="address" class="form-label">Dirección</label>
//                     <input type="text" class="form-control" id="address" title="Escriba la dirección" required/>
//                 </div>
//                 <div class="mb-3 fw-bold">
//                     <label for="imageUrl" class="form-label">URL de la Imagen</label>
//                     <input type="text" class="form-control" id="imageUrl" title="Pegue aquí la URL del restaurante" required/>
//                 </div>
//                 <button type="submit" class="btn btn-success" style= {{color:'rgb(0, 0, 0)', width: '50%', backgroundColor: 'rgb(51, 136, 206)', marginTop: '%'}}>Agregar Restaurante</button>
//             </form>
//         </div>
    
//         <div class="row g-4 p-3 m-4 justify-content-right" id="restaurantList">
//             {/* Aquí deberían aparecer los restaurantes agregados  */}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default newRestaurants
