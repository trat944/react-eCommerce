import { Product } from '../../../utils/async_functions'
import './productCard.css'


type Props = {
  item: Product
}

export const ProductCard = ({ item }: Props) => {

  return (
    <div className="card_container">
      <img src={item.image} alt="" />
      <h2>{item.name}</h2>
      <span>{item.price}</span>
    </div>

  )
}

