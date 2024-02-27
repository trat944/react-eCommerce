import { useNavigate } from 'react-router-dom';
import { useHandleContext } from '../../../../hooks/useContextProduct';
import { Product, fetchProducts } from '../../../../utils/async_functions';
import './productSearcher.css'
import  { ChangeEvent, useEffect, useState } from 'react'



export const ProductSearcher = () => {
  const allProducts = useHandleContext();
  const navigate = useNavigate();
  const [inputValue, setinputValue] = useState('');
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
    if (found) navigate(`/${found.id}`);
    else if (!found) {
      const productsContainingWord = allProducts.array.filter(product => {
        const words = product.name.toLowerCase().split(' ');
        return words.some(word => word === inputValue.toLowerCase());
      });
      if (productsContainingWord.length === 1) navigate(`/${productsContainingWord[0].id}`);
      else if (productsContainingWord.length > 1) navigate('/search', { state: { foundProducts: productsContainingWord } });
      else setSearchFailed(true);
    }
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

        {/* {searchedProducts && searchedProducts?.length > 1 && 
        <MultipleSearchResultPage foundProducts={searchedProducts} /> } */}
      </div>
      {searchFailed && <span className='search-error'>No product found with that name</span>}
    </>
  )
}
