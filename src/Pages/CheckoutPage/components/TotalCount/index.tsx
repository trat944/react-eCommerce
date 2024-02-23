import { useContext, useEffect, useState } from 'react';
import './totalCount.css'
import { UserContext } from '../../../../hooks/useContextUser';

export const TotalCount = () => {
  const user = useContext(UserContext).state.user;
  const [subTotal, setsubTotal] = useState(0);
  const [shipping] = useState(15);
  const [total, settotal] = useState(0)

  useEffect(() => {
    if (user && user.cart) {
      let cartSubtotal = 0;
      user.cart.forEach(product => {
        cartSubtotal += parseFloat(product.price);
      })
      setsubTotal(parseFloat(cartSubtotal.toFixed(2)));
      settotal(parseFloat((cartSubtotal + shipping).toFixed(2)));
    }
  }, [user]);

  return (
    <div className="totalCount_container">
      <div className='subTotal_container'>
        <span className='subTotal'>Subtotal</span>
        <span>{subTotal}€</span>
      </div>
      <div className='shipping_container'>
        <span className='shipping'>Shipping</span>
        <span>{shipping}€</span>
      </div>
      <div className='total_container'>
        <span className='total'>Total</span>
        <span>{total}€</span>
      </div>
    </div>
  )
}

