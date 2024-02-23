import { PageLayout } from "../../components/layout/Pagelayout";
import { ProductButtons } from "./components/ProductButtons";
import { ProductDetails } from "./components/ProductDetails";
import { useHandleContext } from "../../hooks/useContextProduct"
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import './productPage.css'
import { useBackButton } from "../../hooks/useBackButton";
import { Reviews } from "../../components/common/Reviews";

export const ProductPage = () => {
  const {array} = useHandleContext();
  const {productid} = useParams();
  const goBackButton = useBackButton();

  const targetedProduct = array.find(product => product.id == Number(productid));

  return (
    <PageLayout>
      <ProductDetails targetedProduct={targetedProduct} />
      <ProductButtons targetedProduct={targetedProduct} />
      <FontAwesomeIcon onClick={goBackButton} className="back_button" icon={faAngleLeft} />
      <Reviews />
    </PageLayout>
  )
}