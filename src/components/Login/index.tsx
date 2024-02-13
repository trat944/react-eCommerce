import './login.css';
import { PasswordInput } from '../Inputs/PasswordInput';
import { UsernameInput } from '../Inputs/UsernameInput';
import { useState, FormEvent, useEffect } from 'react';
import { fetchUsers, User } from '../../utils/async_functions';

export const LoginContainer = () => {

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

  useEffect(() => {
    if (formSubmitted) onComparingUsers();
  }, [showUsernameError, showUserPasswordError, formSubmitted]);

  const onComparingUsers = async() => {
    if (!showUsernameError && !showUserPasswordError) {
      const users: User[] = await fetchUsers();
      const newUser: User = {
        name: userName,
        password: userPassword
      }
      const matchedUserIndex = users.findIndex(user => user.name === newUser.name);
      if (matchedUserIndex !== -1) {
        if (users[matchedUserIndex].password === newUser.password) {
          console.log('Welcome User')
        } else setFoundUser(true);
      } else setFoundUser(true);
    }
  }

  return (
    <div className="login_container">
      <form onSubmit={onCheckInput}>
        <h2>Login</h2>
        <UsernameInput onInputChange = {setUserName} />
        {showUsernameError && <span className='error'>Please, enter a valid username.</span>}
        <PasswordInput onInputChange = {setUserPassword} />
        {showUserPasswordError && <span className='error'>Please, enter a valid password.</span>}
        {foundUser && <span className='error'>No user found.</span>}
        <span>Don´t have an account? Create one</span>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}