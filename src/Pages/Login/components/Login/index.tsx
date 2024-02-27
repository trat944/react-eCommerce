import './login.css';
import { PasswordInput, UsernameInput } from '../Inputs';
import { useEffect, useContext } from 'react';
import { fetchUsers, User } from '../../../../utils/async_functions';
import { useCheck } from '../../../../hooks/useCheck';
import { UserContext } from '../../../../hooks/useContextUser';
import { useNavigate } from 'react-router-dom';

export const LoginContainer = () => {
  const navigate = useNavigate()

  const {onCheckInput, showUsernameError, showUserPasswordError, formSubmitted, setFoundUser, foundUser, user, setUser} = useCheck();
  const { dispatch } = useContext(UserContext);

  const onComparingUsers = async() => {
    if (!showUsernameError && !showUserPasswordError) {
      const users: User[] = await fetchUsers();
      const loggedUser = users.find(userFetched => (
        userFetched.name.trim().toLowerCase() === user.name.trim().toLowerCase() && userFetched.password
         === user.password
      ))
      if (loggedUser) {
        navigate('/homepage')
        dispatch({ type: "LOGIN", payload: loggedUser });
        setFoundUser(false);
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
        <UsernameInput onInputChange = {setUser} />
        {showUsernameError && <span className='error'>Please, enter a valid username.</span>}
        <PasswordInput onInputChange = {setUser} />
        {showUserPasswordError && <span className='error'>Please, enter a valid password.</span>}
        {foundUser && <span className='error'>No user found.</span>}
        <span>Don´t have an account? Create one</span>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}