import { useEffect, useState } from "react";
import { fetchProducts, Product } from "../../utils/async_functions";
import { ProductCard } from "../../components/common/ProductCard";
import './categoryPage.css'
import { PageLayout } from "../../components/layout/Pagelayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Recommendations } from "../../components/common/Recommendations";

type Props = {
  category: string
  description: string
};

export const CategoryPage = ({category, description}: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts: Product[] = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchAndSetProducts();
  }, []);

  const selectedProducts = products.filter((product) => product.category === category);

  return (
    <PageLayout>
      <h4>{description}</h4>
      <div className="products_container">
        {selectedProducts.map((product) => 
          <ProductCard key={product.id} item = {product} />
        )}
      </div>
      <Link to={'/homepage'}>
        <FontAwesomeIcon className="back_button" icon={faAngleLeft} />
      </Link>
      <Recommendations selectedProducts= {selectedProducts} />
    </PageLayout>
  );
};
