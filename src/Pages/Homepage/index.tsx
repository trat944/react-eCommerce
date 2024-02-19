import './homepage.css';
import { PageLayout } from '../../components/layout/Pagelayout';
import { Characteristics } from '../../components/common/Characteristics';
import { Reviews } from '../../components/common/Reviews';
import { WelcomeContainer } from './components/WelcomeContainer';
import { CategoryContainer } from './components/CategoryContainer';


export const Homepage = () => {

  return (
    <PageLayout>
      <WelcomeContainer />
      <CategoryContainer />
      <Characteristics />
      <Reviews />
    </PageLayout>
  )
}