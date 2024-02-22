import { useEffect, useState } from "react"
import { Product } from "../../../utils/async_functions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import './recommendation.css'
import { ProductCardForCarousel } from "../ProductCardForCarousel"


type Props = {
  selectedProducts: Product[]
  products: Product[]
}

export const Recommendations = ({selectedProducts, products}: Props) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const relatedProductsArray: Product[] = [];

  const getRelatedProducts = () => {
    while (relatedProductsArray.length < 4) {
    const randomNumber = Math.floor(Math.random() * 20);
    if (!relatedProductsArray.includes(products[randomNumber]) && !selectedProducts.some((product) => product.id === products[randomNumber].id) ) relatedProductsArray.push(products[randomNumber]);
    }
    setRelatedProducts(relatedProductsArray);
  }

  useEffect(() => {
    getRelatedProducts()
  }, []);
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextProduct = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % relatedProducts.length);
  };

  const goToPreviousProduct = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + relatedProducts.length) % relatedProducts.length);
  };

  return (
    <div className="relatedProducts_container">
      <h2>You may also like</h2>
      <div className="products_scroll" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {relatedProducts.map(product => (
          <ProductCardForCarousel key={product.id} item={product} />
        ))}
      </div>
      <FontAwesomeIcon
      onClick={goToPreviousProduct}
      className={`left ${currentIndex === 0 ? 'disabled' : ''}`}
      icon={faAngleLeft}/>
      <FontAwesomeIcon
      onClick={goToNextProduct}
      className={`right ${currentIndex === relatedProducts.length - 1 ? 'disabled' : ''}`}
      icon={faAngleRight} />
    </div>
  );
}
