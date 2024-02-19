import { Homepage } from '../Pages/Homepage';
import { Routes, Route } from 'react-router-dom';


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/homepage' element={<Homepage />} />
    </Routes>
  )
}
