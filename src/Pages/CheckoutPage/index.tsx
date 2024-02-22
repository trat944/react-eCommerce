import { useContext } from 'react'
import { PageLayout } from '../../components/layout/Pagelayout'
import './checkoutPage.css'
import { CartItem } from './components/CartItem'
import { UserContext } from '../../hooks/useContextUser'

export const CheckoutPage = () => {
  const user = useContext(UserContext).state.user;

  return (
    <PageLayout>
      <CartItem  />
    </PageLayout>
  )
}


/// items en carrito, a la dcha foto, nombre y precio, que se actualiza por unidad.
//                    a la izq la cantidad + - para aumentar / disminuir

/// precio total, con shipping, y la suma total

/// debajo los items en whislist, con un boton cada uno de añadir a carrito

/// botones de Checkout y Back

/// You may like