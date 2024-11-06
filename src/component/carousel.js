import React from "react"
import './Carousel.css'



import image_18 from './Untitled-design-2024-07-12T153738.368.webp'

function ImageCarousels() {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide gradiant3" data-bs-ride="carousel"  >

        <div class="carousel-inner">
          <div class="carousel-item active">

            <div class="cards-wrapper">
              <div class="card" >
                <img src={image_18} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kisan Vyapar Grain App</h5>
                </div></div>
              <div class="card" >
                <img src={image_18} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kisan Vyapar Grain App</h5>

                </div></div>
              <div class="card" >
                <img src={image_18} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kisan Vyapar Grain App</h5>
                </div>

              </div>

            </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper">
              <div class="card" >
                <img src={image_18} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kisan Vyapar Grain App</h5>
                </div></div>
              <div class="card" >
                <img src={image_18} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kisan Vyapar Grain App</h5>

                </div></div>
              <div class="card" >
                <img src={image_18} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kisan Vyapar Grain App</h5>
                </div>

              </div>

            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden" style={{ color: "red" }}>Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>


  )
}

export default ImageCarousels

