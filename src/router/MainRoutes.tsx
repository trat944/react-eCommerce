import { Homepage } from '../Pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import { CategoryPage } from '../Pages/CategoryPage';
import { ProductPage } from '../Pages/ProductPage';
import { ProductsContext } from '../hooks/useContextProduct';
import { CheckoutPage } from '../Pages/CheckoutPage';


export const MainRoutes = () => {
  return (
    <ProductsContext>
      <Routes>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/homepage/mirror' element={<CategoryPage category="mirror" description="Discover our newest fashionable mirrors" />} />
        <Route path='/homepage/metal' element={<CategoryPage category="metal" description="Delve into our finest metal art!" />} />
        <Route path='/homepage/wooden' element={<CategoryPage category="wooden" description="The best wood that lasts forever!" />} />
        <Route path='/homepage/panel' element={<CategoryPage category="panel" description="Give your home a new style with our panels!"/>} />
        <Route path='/homepage/clock' element={<CategoryPage category="clock" description="Tired of old clocks?" />} />
        <Route path='/:productid' element= {<ProductPage />}  />
        <Route path='/cart' element= {<CheckoutPage />}  />
      </Routes>
    </ProductsContext>
  )
}
