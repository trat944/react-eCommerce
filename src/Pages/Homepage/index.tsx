import './homepage.css';
import { PageLayout } from '../../components/layout/Pagelayout';
import { Characteristics } from '../../components/common/Characteristics';
import { Reviews } from '../../components/common/Reviews';
import { WelcomeContainer } from './components/WelcomeContainer';
import { CategoryContainer } from './components/CategoryContainer';
import { ProductSearcher } from './components/ProductSearcher';


export const Homepage = () => {

  return (
    <PageLayout>
      <WelcomeContainer />
      <ProductSearcher />
      <CategoryContainer />
      <Characteristics />
      <Reviews />
    </PageLayout>
  )
}