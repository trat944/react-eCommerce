import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './totalCount.css'
import { UserContext } from '../../../../hooks/useContextUser';
import { calculateTotalMoney } from '../../../../utils/calculateTotalMoney';

export const TotalCount = () => {
  const user = useContext(UserContext).state.user;
  const [subTotal, setsubTotal] = useState(0);
  const [shipping, setShipping] = useState(15);
  const [total, settotal] = useState(0);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    calculateTotalMoney(user, setTrigger, settotal, setsubTotal, shipping);
  }, [trigger]);

  const handleShippingChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setShipping(parseFloat(event.target.value));
  };

  return (
    <div className="totalCount_container">
      <div className='subTotal_container'>
        <span className='subTotal'>Subtotal</span>
        <span>{subTotal}€</span>
      </div>
      <div className='shipping_container'>
        <span className='shipping'>Shipping</span>
        <select
          name="shipping-method"
          id="shipping"
          onChange={handleShippingChange}
          value={shipping}
          className="shipping-select"
        >
          <option value={15}>Standard -- 15€</option>
          <option value={31.99}>Urgent -- 31,99€</option>
          <option value={52}>Express -- 52€</option>
        </select>
      </div>
      <div className='total_container'>
        <span className='total'>Total</span>
        <span>{total}€</span>
      </div>
    </div>
  )
}

