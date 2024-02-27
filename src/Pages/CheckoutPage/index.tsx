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
  const [trigger, setTrigger] = useState(false);
  const [cartAndWishlistItems, setCartAndWishlistItems] = useState([] as Product[]);

  ///Calculate total items
  useEffect(() => {
    if (user && user.cart) {
      const newTotalItems = user.cart.length;
      setTotalItems(newTotalItems);
    } else {
      setTotalItems(0);
    }
  }, [trigger]);

  ///Group equal items
  const productCount: ProductCount = {};
  user?.cart?.forEach(item => {
    const productId = item.id;
    productCount[productId] = productCount[productId] ? productCount[productId] + 1 : 1;
  });

  ///Group cart and wishlist items not to appear on the recommendations component
  useEffect(() => {
    if (user?.cart && user.whishlist) setCartAndWishlistItems([...user?.cart, ...user.whishlist])
  }, [])


  return (
    <PageLayout>
      <h1>Shopping Bag ({totalItems})</h1>
      {Object.entries(productCount).map(([productId, count]) => (
        <div key={productId}>
          <CartItem 
          product={user?.cart?.find(item => String(item.id) === productId)} 
          count= {count}
          trigger={setTrigger}
          />
        </div>
      ))}
      {totalItems === 0 && <span className='noItems'>No items in your cart</span>}
      {totalItems > 0 && (
        <>
          <TotalCount />
          <button className='checkout-btn'>Buy</button>
        </>
      )}
      <h3 className='wishlist_title'>Your Wishlist</h3>
      <div className="wishlist_container">
        <Wishlist trigger={setTrigger}/>
      </div>
      <FontAwesomeIcon onClick={goBackButton} className="back_button" icon={faAngleLeft} />
      <Recommendations selectedProducts={cartAndWishlistItems} products={allProducts} trigger={setTrigger} />
    </PageLayout>
  );
};