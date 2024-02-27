import { User } from "./async_functions";

export const calculateTotalMoney = (
  user: User | null,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
  settotal: React.Dispatch<React.SetStateAction<number>>,
  setsubTotal: React.Dispatch<React.SetStateAction<number>>,
  shipping: number
  ) => {
  if (user && user.cart) {
    setTrigger(true);
    let cartSubtotal = 0;
    user.cart.forEach(product => {
      cartSubtotal += parseFloat(product.price);
    })
    setsubTotal(parseFloat(cartSubtotal.toFixed(2)));
    settotal(parseFloat((cartSubtotal + shipping).toFixed(2)));
    setTimeout(() => {
      setTrigger(false);
    }, 100);
  }
}