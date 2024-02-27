import { useCallback, useContext, useState } from 'react';
import './wishlist.css'
import { UserContext } from '../../../../hooks/useContextUser';
import { ProductCardSimple } from '../../../../components/common/ProductCardSimple';
import { addToCart } from '../../../../utils/addToCartBtn';
import { Product } from '../../../../utils/async_functions';
import { handleAddToCartFromWishlist } from '../../../../utils/handleAddToCartFromWishlist';

type Props = {
  trigger: React.Dispatch<React.SetStateAction<boolean>>
}

export const Wishlist = ({trigger}: Props) => {
  const user = useContext(UserContext).state.user;
  const [wishlist, setWishlist] = useState<Product[]>(user?.whishlist || []);

  const handleAddToCart = useCallback((event: React.MouseEvent<HTMLButtonElement>, product: Product) => {
    if (user) {
      handleAddToCartFromWishlist(event, product, user, addToCart, trigger, wishlist, setWishlist);
    }
  }, [user, addToCart, trigger, wishlist, setWishlist]);

  return (
    wishlist.map(product => {
      return (
        !user?.cart?.includes(product) && (
          <div key={product.id} className="wishlist-item-container">
            <ProductCardSimple item={product} />

            {user && product && (
              <button
                onClick={(event) => handleAddToCart(event, product)}
                className="add_to_cart_checkout"
                >Add to Cart
              </button>
            )}
          </div>
          )
      )
    })
  )
}