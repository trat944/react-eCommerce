import { useEffect } from "react";
import { fetchProducts, Product } from "../../utils/async_functions";
import { ProductCardSimple } from "../../components/common/ProductCardSimple";
import './categoryPage.css'
import { PageLayout } from "../../components/layout/Pagelayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Recommendations } from "../../components/common/Recommendations";
import { useHandleContext } from "../../hooks/useContextProduct";
import { useBackButton } from "../../hooks/useBackButton";

type Props = {
  category: string
  description: string
};

export const CategoryPage = ({category, description}: Props) => {
  const productsFromArray = useHandleContext();
  const goBackButton = useBackButton();

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts: Product[] = await fetchProducts();
      productsFromArray.setArray(fetchedProducts);
    };

    fetchAndSetProducts();
  }, []);

  const selectedProducts = productsFromArray.array.filter((product) => product.category === category);

  return (
    <PageLayout>
      <h4>{description}</h4>
      <div className="products_container">
        {selectedProducts.map((product) => 
          <ProductCardSimple key={product.id} item = {product} />
        )}
      </div>
      <div className="back_button_container">
        <FontAwesomeIcon onClick={goBackButton} className="back_button" icon={faAngleLeft} />
        <span>Back to Homepage</span>
      </div>
      {productsFromArray.array.length > 0 && <Recommendations selectedProducts={selectedProducts} products={productsFromArray.array} />}
    </PageLayout>
  );
};
