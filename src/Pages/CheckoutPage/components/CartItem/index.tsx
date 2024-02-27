import { useContext, useState } from 'react'
import { Product } from '../../../../utils/async_functions'
import { UserContext } from '../../../../hooks/useContextUser'
import { addQuantity, decreaseQuantity } from '../../../../utils/changeProductQuantity'
import './cartItem.css'


type Props = {
  product: Product | undefined
  count: number
  trigger: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartItem = ({product, count, trigger}: Props) => {
  const user = useContext(UserContext).state.user;
  const [quantity, setQuantity] = useState(count)

  return (
    <>
      {quantity > 0 && (
      <div className="full_container">
        <div className="item_container">
          <img className='product_image' src={product?.image} alt="" />
          <div className="details_container">
            <h3 className='product_name'>{product?.name}</h3>
            <span>Category: {product?.category}</span>
            <span>{product?.price}€</span>
          </div>
        </div>
        <div className="quantity_container">
          <button onClick={() => product && decreaseQuantity(setQuantity, quantity, product, user, trigger)} className='remove_from_cart'>-</button>
          <span>{quantity}</span>
          <button onClick={() => product && addQuantity(setQuantity, quantity, product, user, trigger)}  className='add_to_cart'>+</button>
        </div>
      </div> )}
    </>
  )
}

