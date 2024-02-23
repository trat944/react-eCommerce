import { User } from "./async_functions"

export const logoutFunction = (user: User | null) => {
  if (user) {
    user = null;
  }
}