import { useContext } from 'react';
import './productButtons.css'
import { UserContext } from '../../../../hooks/useContextUser';
import { addToCart } from '../../../../utils/addToCartBtn';
import { Product } from '../../../../utils/async_functions';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

type Props = {
  targetedProduct: Product | undefined
}

export const ProductButtons = ({targetedProduct} : Props) => {
  const loggedUser = useContext(UserContext).state.user;
  
  return (
    <div className="btn_container">
      <Toaster />
      {loggedUser && targetedProduct && (<button 
      onClick={() => addToCart(loggedUser, targetedProduct)}   
      className="add_to_cart">Add to Cart</button>)}

      <Link to='/cart'>
        {loggedUser && targetedProduct && (<button 
        onClick={() => addToCart(loggedUser, targetedProduct)}   
        className="buy_now">Buy Now</button>)}
      </Link>

    </div>
  )
}
