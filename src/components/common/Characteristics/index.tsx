import './characteristics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

export const Characteristics = () => {
  return (
    <div className="characteristics_container">
      <div>
      <FontAwesomeIcon icon={faThumbsUp} />
      <span>High Quality</span>
      </div>

      <div>
      <FontAwesomeIcon icon={faPagelines} />
      <span>Sustainable Products</span>
      </div>

      <div>
      <FontAwesomeIcon icon={faTruckFast} />
      <span>Free shipping</span>
      </div>
    </div>
  )
}