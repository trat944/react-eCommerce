import { FC, PropsWithChildren, useContext } from "react"
import { UserContext } from "../hooks/useContextUser"
import Login from "../Pages/Login"

export const PrivateRoute: FC<PropsWithChildren> = ( {children} ) => {
  const {state} = useContext(UserContext)
  if (state.user !== null) return children;
  else return <Login />
}
