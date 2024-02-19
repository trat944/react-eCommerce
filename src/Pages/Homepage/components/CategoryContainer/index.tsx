import './categoryContainer.css'
import { Link } from 'react-router-dom'

export const CategoryContainer = () => {
  return (
    <div className="category_container">
      <div className="categorySelector">
        <Link to={'/homepage/metal'}>
          <img src="/src/assets/products/metal_decor/birdOnly_metal_decor.webp" alt="Metal Art" />
          <h2>Metal Decor</h2>
        </Link>
      </div>
      <div className="categorySelector">
        <Link to={'/homepage/mirror'}>
          <img src="/src/assets/products/mirrors/mirror4.webp" alt="Mirror Art" />
          <h2>Mirror Art</h2>
        </Link>
      </div>
      <div className="categorySelector">
        <Link to={'/homepage/clock'}>
          <img src="/src/assets/products/wooden_clocks/mandala_wooden_clock.png" alt="Clocks" />
          <h2>Clocks</h2>
        </Link>
      </div>
      <div className="categorySelector">
        <Link to={'/homepage/wooden'}>
          <img src="/src/assets/products/wooden_decor/mandala_wooden_decor.png" alt="Wooden Mandala" />
          <h2>Wooden Decor</h2>
        </Link>
      </div>
      <div className="categorySelector">
        <Link to={'/homepage/panel'}>
          <img src="/src/assets/products/wooden_panels/wooden_lotus_panel.png" alt="Wooden Panels" />
          <h2>Wooden Panels</h2>
        </Link>
      </div>
    </div>

  )
}

