import './homepage.css';
import { UserContext } from '../../hooks/useContext';
import { useContext } from 'react';


export const Homepage = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>index</div>
  )
}

