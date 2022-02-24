import React from 'react'
import './Tiles.css'
function Tiles() {
  return (
    <div className='tiles-container'>
    
      <div className="card card1" >
     
        <img class="card-img-top tile-1" src="/tiles1.jpg" className='tiles_img' alt="Card" />
        <div class="card-body">
          <p class="card-text">Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. </p>
        </div>
       
      </div>
     
      <div class="card card2" >
     
        <img class="card-img-top tiles_2" src="/tiles2.jpg" alt="Card" />
        <div class="card-body">
          <p class="card-text">The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance. </p>

        </div>
       
      </div>
      
      </div>
     
    
    
  )
}

export default Tiles