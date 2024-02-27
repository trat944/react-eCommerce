import { Link } from 'react-router-dom'
import { Product } from '../../../utils/async_functions'
import './productCardForCarousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addToWishlist } from '../../../utils/addToWishlist'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { useContext } from 'react'
import { UserContext } from '../../../hooks/useContextUser'


type Props = {
  item: Product
  trigger?: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProductCardForCarousel = ({ item, trigger }: Props) => {
  const loggedUser = useContext(UserContext).state.user;
  return (
    <div className="card_full_container">
       
      <Link to={`/${item.id}`}>
        <div className="card_container">
          <img src={item.image} alt="" />
          <h2>{item.name}</h2>
          <span>{item.price}€</span>
        </div>
      </Link>
      {loggedUser && item && !trigger && (<FontAwesomeIcon onClick={() => addToWishlist(loggedUser, item)} className='whislist_icon' icon={faHeart} />)}
    </div>
  )
}

