import { useContext, useEffect, useState } from 'react';
import './totalCount.css'
import { UserContext } from '../../../../hooks/useContextUser';
import { calculateTotalMoney } from '../../../../utils/calculateTotalMoney';

export const TotalCount = () => {
  const user = useContext(UserContext).state.user;
  const [subTotal, setsubTotal] = useState(0);
  const [shipping] = useState(15);
  const [total, settotal] = useState(0);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    calculateTotalMoney(user, setTrigger, settotal, setsubTotal, shipping);
  }, [trigger]);

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

