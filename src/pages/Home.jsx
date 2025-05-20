import React from 'react'
import { restaurants } from '../data'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'




const home = () => {
  return (

    <div id="carouselExampleCaptions" class="carousel slide m-5 " data-bs-ride="false">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg" class="d-block w-100  rounded-4" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Pizza pixie</h5>
            <p>Restaurante delicioso de pizzas napolitanas.</p>
            <p><strong>Dirección: </strong>Calle siempre alegre #34-89</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_960_720.jpg" class="d-block w-100  rounded-4" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>PastAldente</h5>
            <p>Una de las mejores comidas italianas de la ciudad. Ven y visítanos.</p>
            <p><strong>Dirección: </strong>Cr 85#34-89</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2023/09/23/15/56/ai-generated-8271284_960_720.jpg" class="d-block w-100  rounded-4" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Amborger</h5>
            <p>Encuentra las mejores hamburguesas artesanales en Amborger. Y lo mejor, a precios justos.</p>
            <p><strong>Dirección: </strong>Calle 85#34-89sur</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2021/01/01/15/32/sushi-balls-5878894_1280.jpg" class="d-block w-100 rounded-4" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Sushi Raw</h5>
            <p>Vive una nueva experiencia probando nuestros mejores sushis.</p>
            <p ><strong>Dirección: </strong>Cr 67#4-49</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  )
}
export default home


// también lo intenté con algunas cards pero me gustó más como se ve con el carousel (y también mezclé cards con el carousel pero me muestra es de a un card por slider y no se ve bien, tendría 
//que cambiar la estructura del código y darle estilo con CSS) aquí un ejemplo de una card dentro del carousel
{/* <div id="carouselExampleCaptions" class="carousel slide m-5 " data-bs-ride="false">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
            <Card id ="card" class = "justify-content-center"style={{ width: '30rem', margin: '30px'}}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </div> */}


//profe aquí abajo comenté lo que había hecho antes... arriba está el diseño nuevo del home con un carousel 

{/* // const home = () => {
//   return (


//     <div class="container-mx-auto mt-2">
//       <h2 class="fs-3 fw-bold text-secondary text-center pb-4">Restaurantes disponibles</h2>
//       <div class="row g-4 p-3 m-4 justify-content-center">
//         <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
//           <div class="bg-primary rounded shadow overflow-hidden">
//             <img src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg"
//               alt="Pizza pixie" class="w-100 img-cover" />

//           </div>
//           <div class="p-4">
//             <h3 class="fs-3 fw-bold m-2">Pizza pixie</h3>
//             <p class="m-2">Restaurante delicioso de pizzas napolitanas.</p>
//             <p class="text m-2"><strong>Dirección: </strong>Calle siempre alegre #34-89</p>
//           </div>
//         </div>

//         <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
//           <div class="rounded shadow overflow-hidden">
//             <img src="https://cdn.pixabay.com/photo/2023/09/23/15/56/ai-generated-8271284_960_720.jpg"
//               alt="Amborger" class="w-100 img-cover" />

//           </div>
//           <div class="p-4">
//             <h3 class="fs-3 fw-bold m-2">Amborger</h3>
//             <p class="m-2">Encuentra las mejores hamburguesas artesanales en Amborger. Y lo mejor,
//               a precios justos.</p>
//             <p class="text m-2"><strong>Dirección: </strong>Calle 85#34-89sur</p>
//           </div>



//         </div>
//         <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
//           <div class="bg-dark rounded shadow overflow-hidden">
//             <img src="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_960_720.jpg" alt="Pasta"
//               class="w-100 img-cover" />

//           </div>
//           <div class="p-4">
//             <h3 class="fs-3 fw-bold m-2">PastAldente</h3>
//             <p class="bg-secundary m-2">Una de las mejores comidas italianas de la ciudad. Ven y visítanos.</p>
//             <p class="text m-2"><strong>Dirección: </strong>Cr 85#34-89</p>
//           </div>


//         </div>
//         <div class="col-12 col-md-6 col-lg-3 p-3 m-3 mine">
//           <div class="bg-dark rounded shadow overflow-hidden">
//             <img src="https://cdn.pixabay.com/photo/2021/01/01/15/32/sushi-balls-5878894_1280.jpg" alt="SushiRaw"
//               class="w-100 img-cover" />

//           </div>
//           <div class="p-4">
//             <h3 class="fs-3 fw-bold m-2">Sushi Raw</h3>
//             <p class="bg-secundary m-2">Vive una nueva experiencia probando nuestros mejores sushis.</p>
//             <p class="text m-2"><strong>Dirección: </strong>Cr 67#4-49</p>
//           </div>


//         </div>

//       </div>
//     </div>
    
      
//   )
// } */}


