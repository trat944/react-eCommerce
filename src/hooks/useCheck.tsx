import { useState, FormEvent } from "react";
// import { fetchUsers, User } from "../utils/async_functions";

export const useCheck = () => {
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [showUsernameError, setShowUsernameError] = useState<boolean>(false);
  const [showUserPasswordError, setShowUserPasswordError] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [foundUser, setFoundUser] = useState<boolean>(false);
  
  const onCheckInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    onCheckUsername();
    onCheckPassword();
  }
  
  const onCheckUsername = () => {
    if (userName.length <= 1 || /[^\w\s]/.test(userName) || userName.length > 20) setShowUsernameError(true);
    else setShowUsernameError(false);
  }
  
  const onCheckPassword = () => {
    if (userPassword.length <= 1 || userPassword.length > 20) setShowUserPasswordError(true);
    else setShowUserPasswordError(false);
  }

  return {
    onCheckUsername,
    onCheckPassword,
    onCheckInput,
    userName,
    setUserName,
    userPassword,
    setUserPassword,
    showUsernameError,
    showUserPasswordError,
    formSubmitted,
    foundUser,
    setFoundUser
  }
  
  // useEffect(() => {
  //   if (formSubmitted) onComparingUsers();
  // }, [showUsernameError, showUserPasswordError, formSubmitted]);
  
  // const onComparingUsers = async() => {
  //   if (!showUsernameError && !showUserPasswordError) {
  //     const users: User[] = await fetchUsers();
  //     const newUser: User = {
  //       name: userName,
  //       password: userPassword
  //     }
  //     const matchedUserIndex = users.findIndex(user => user.name === newUser.name);
  //     if (matchedUserIndex !== -1) {
  //       if (users[matchedUserIndex].password === newUser.password) {
  //         console.log('Welcome User')
  //       } else setFoundUser(true);
  //     } else setFoundUser(true);
  //   }
  // }
}


