import { useContext } from 'react';
import './wishlist.css'
import { UserContext } from '../../../../hooks/useContextUser';
import { ProductCardSimple } from '../../../../components/common/ProductCardSimple';
import { addToCart } from '../../../../utils/addToCartBtn';

export const Wishlist = () => {
  const user = useContext(UserContext).state.user;

  return (
    user?.whishlist?.map(product => {
      return (
         <div key={product.id} className="wishlist-item-container">
          <ProductCardSimple item={product} />

          {user && product && (<button 
          onClick={() => addToCart(user, product)}   
          className="add_to_cart">Add to Cart</button>)}
        </div>  
      )
    })
  )
}