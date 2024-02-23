import { Product, User } from "./async_functions";

export const addQuantity = (
  setQuantity: React.Dispatch<React.SetStateAction<number>>,
  quantity: number,
  product: Product,
  user: User | null,
) => {
  setQuantity(quantity + 1);
  if (product) user?.cart?.push(product);
  console.log(user)
}
export const decreaseQuantity = (
  setQuantity: React.Dispatch<React.SetStateAction<number>>,
  quantity: number,
  product: Product,
  user: User | null,
) => {
  if (product && user && user.cart && quantity > 0) {
    setQuantity(quantity - 1);
    const index = user?.cart?.findIndex(item => item.id === product.id);
    user?.cart?.splice(index, 1);
    console.log(user)
  }
}
