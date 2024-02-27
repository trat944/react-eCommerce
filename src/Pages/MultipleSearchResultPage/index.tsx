import './multipleSearchResultPage.css'
import { ProductCardSimple } from "../../components/common/ProductCardSimple";
import { PageLayout } from "../../components/layout/Pagelayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Recommendations } from "../../components/common/Recommendations";
import { useBackButton } from "../../hooks/useBackButton";
import { Product } from '../../utils/async_functions';
import { useLocation } from 'react-router-dom';
import { useHandleContext } from '../../hooks/useContextProduct';

export const MultipleSearchResultPage = () => {
  const location = useLocation();
  const foundProducts: Product[] = location.state.foundProducts;
  const allProducts = useHandleContext().array;
  const goBackButton = useBackButton();

  return (
    <PageLayout>
      <h4>Items found:</h4>
      <div className="products_container">
        {foundProducts.map((product) => 
          <ProductCardSimple key={product.id} item = {product} />
        )}
      </div>
      <FontAwesomeIcon onClick={goBackButton} className="back_button" icon={faAngleLeft} />
      <Recommendations selectedProducts={foundProducts} products={allProducts} />
    </PageLayout>
  );
};
