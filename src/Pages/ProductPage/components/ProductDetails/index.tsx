import './productDetails.css'
import { Product } from "../../../../utils/async_functions";

type Props = {
  targetedProduct: Product | undefined
}

export const ProductDetails = ({targetedProduct} : Props) => {
 
  return (
    <div className="product_container">
      <img className="product_img" src={targetedProduct?.image} alt="productImage" />
      <h1 className="product_name">{targetedProduct?.name}</h1>
      <span className="product_category">Category: {targetedProduct?.category}</span>
      <p>Price: <span className="product_price">{targetedProduct?.price}</span></p>
      <p className="product_description">{targetedProduct?.description}</p>
    </div>
  )
}