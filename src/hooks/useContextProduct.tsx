import { createContext, useState, FC, PropsWithChildren, useContext } from "react";
import { Product } from "../utils/async_functions";

export interface ProductContextType {
  array: Product[],
  setArray: Function 
}

const products = createContext({} as ProductContextType);

export const ProductsContext : FC<PropsWithChildren<{}>> = ({children}) => {
  const [array, setArray] = useState([])
  return (
    <products.Provider value={{array, setArray}}>
      {children}
    </products.Provider>
  )
}

export const useHandleContext = () => {
  const context =  useContext(products);
  if (!context) throw new Error;
  return context;
}


