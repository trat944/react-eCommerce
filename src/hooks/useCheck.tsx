import { useState, FormEvent } from "react";
import { onCheckUsername, onCheckPassword } from "../utils/formValidators";

export const useCheck = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  })
  const [showUsernameError, setShowUsernameError] = useState<boolean>(false);
  const [showUserPasswordError, setShowUserPasswordError] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [foundUser, setFoundUser] = useState<boolean>(false);
  
  const onCheckInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    onCheckUsername(user.name, setShowUsernameError);
    onCheckPassword(user.password, setShowUserPasswordError);
  }

  return {
    onCheckUsername,
    onCheckPassword,
    onCheckInput,
    user,
    setUser,
    showUsernameError,
    showUserPasswordError,
    formSubmitted,
    foundUser,
    setFoundUser
  }
}


