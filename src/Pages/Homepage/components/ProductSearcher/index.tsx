import { Navigate } from 'react-router-dom';
import { useHandleContext } from '../../../../hooks/useContextProduct';
import { Product, fetchProducts } from '../../../../utils/async_functions';
import './productSearcher.css'

import  { ChangeEvent, useEffect, useState } from 'react'



export const ProductSearcher = () => {
  const allProducts = useHandleContext();
  const [inputValue, setinputValue] = useState('');
  const [searchedProduct, setSearchedProduct] = useState<Product | undefined>(undefined);
  const [searchFailed, setSearchFailed] = useState(false);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts: Product[] = await fetchProducts();
      allProducts.setArray(fetchedProducts);
    };

    fetchAndSetProducts();
  }, []);
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event?.target.value)
  }

  const searchForProduct = () => {
    const found = allProducts.array.find(product => product.name.toLowerCase() === inputValue.toLowerCase());
    if (found) setSearchedProduct(found);
    else setSearchFailed(true);
  }

  return (
    <>
      <div className="searcher-container">
        <input 
        className='product-searcher'
        type="text"
        placeholder='Search product'
        value= {inputValue}
        onChange={handleInputChange}
        />
        <button onClick={searchForProduct} className='search-btn' type='submit'>Search</button>

        {searchedProduct && <Navigate to={`/${searchedProduct.id}`} />}
      </div>
      {searchFailed && <span className='search-error'>No product found with that name</span>}
    </>
  )
}
