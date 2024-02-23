import { useContext, useEffect, useState } from 'react'
import { PageLayout } from '../../components/layout/Pagelayout'
import './checkoutPage.css'
import { CartItem } from './components/CartItem'
import { UserContext } from '../../hooks/useContextUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useBackButton } from '../../hooks/useBackButton'
import { TotalCount } from './components/TotalCount'
import { Wishlist } from './components/Wishlist'
import { Product } from '../../utils/async_functions'
import { useHandleContext } from '../../hooks/useContextProduct'
import { Recommendations } from '../../components/common/Recommendations'

type ProductCount = {
  [productId: number]: number;
};

export const CheckoutPage = () => {
  const user = useContext(UserContext).state.user;
  const goBackButton = useBackButton();
  const allProducts = useHandleContext().array;
  const [totalItems, setTotalItems] = useState<number>(0);

  ///para poner shopping bag
  useEffect(() => {
    if (user && user.cart) {
      const newTotalItems = user.cart.length;
      setTotalItems(newTotalItems);
    } else {
      setTotalItems(0);
    }
  }, [user]);

  ///para pasar los items agrupados
  const productCount: ProductCount = {};
  user?.cart?.forEach(item => {
    const productId: number = item.id;
    productCount[productId] = productCount[productId] ? productCount[productId] + 1 : 1;
  });

  ///para agrupar items en cart y wishlist y pasarlo a recommendations
  let CartAndWishlistItems: Product[] = [];
  if (user?.cart && user.whishlist) CartAndWishlistItems = [...user?.cart, ...user.whishlist];
  console.log(CartAndWishlistItems)

  return (
    <PageLayout>
      <h1>Shopping Bag ({totalItems})</h1>
      {Object.entries(productCount).map(([productId, count]) => (
        <div key={productId}>
          <CartItem 
          product={user?.cart?.find(item => String(item.id) === productId)} 
          count= {count}
          />
        </div>
      ))}
      <TotalCount />
      <button className='checkout-btn'>Buy</button>
      <h3 className='wishlist_title'>Your Wishlist</h3>
      <div className="wishlist_container">
        <Wishlist />
      </div>
      <FontAwesomeIcon onClick={goBackButton} className="back_button" icon={faAngleLeft} />
      <Recommendations selectedProducts={CartAndWishlistItems} products={allProducts} />
    </PageLayout>
  );
};

/// botones de Checkout y Back