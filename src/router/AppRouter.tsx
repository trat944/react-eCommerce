import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import { UserProvider } from '../hooks/useContextUser';
import { PrivateRoute } from './PrivateRoute';
import { MainRoutes } from './MainRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>

      <UserProvider>

        <Routes>
          <Route path='/' element= { <Login/> } />
        
          <Route path='/*' element={
            <PrivateRoute>
              <MainRoutes />
            </PrivateRoute>
          } />
        
        </Routes>

      </UserProvider>

    </BrowserRouter>
  )
}

