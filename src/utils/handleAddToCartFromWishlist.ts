import { Product, User } from "./async_functions";

export const handleAddToCartFromWishlist = (
  event: React.MouseEvent<HTMLButtonElement>, 
  product: Product,
  user: User,
  addToCart: Function,
  trigger: React.Dispatch<React.SetStateAction<boolean>>,
  wishlist: Product[],
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>,
  ) => {
    if (user) {
      addToCart(user, product, trigger);
      removeFromWishlistArray(user, product);
      updateStateofWishlistItems(wishlist, product, setWishlist);
      removeWishlistItemContainer(event);
    }
  };
  
  const removeFromWishlistArray = (user: User, product: Product) => {
    const index = user?.whishlist?.findIndex(item => item.id === product.id);
    if (index && index >= 0) user?.whishlist?.splice(index, 1);
  }

  const updateStateofWishlistItems = (wishlist: Product[], product: Product, setWishlist: React.Dispatch<React.SetStateAction<Product[]>>,) => {
    const updatedWishlist = wishlist.filter(item => item.id !== product.id);
      setWishlist(updatedWishlist);
  }

  const removeWishlistItemContainer = (event: React.MouseEvent<HTMLButtonElement>,) => {
    const productContainer: HTMLElement | null = event.currentTarget.closest('.wishlist-item-container');
      if (productContainer) {
        productContainer.style.display = 'none';
      }
  }