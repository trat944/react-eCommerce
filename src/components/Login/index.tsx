import './login.css';
import { PasswordInput } from '../Inputs/PasswordInput';
import { UsernameInput } from '../Inputs/UsernameInput';
import { useEffect } from 'react';
import { fetchUsers, User } from '../../utils/async_functions';
import { useCheck } from '../../hooks/useCheck';

export const LoginContainer = () => {

  const {onCheckInput, setUserName, showUsernameError, setUserPassword, showUserPasswordError, formSubmitted, userName, userPassword, setFoundUser, foundUser} = useCheck();

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

  useEffect(() => {
    if (formSubmitted) onComparingUsers();
  }, [showUsernameError, showUserPasswordError, formSubmitted]);



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