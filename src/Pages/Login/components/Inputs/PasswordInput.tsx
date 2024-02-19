import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './inputs.css'
import { ChangeEvent } from 'react';

type Props = {
  onInputChange: React.Dispatch<React.SetStateAction<{
    name: string;
    password: string;
  }>>;
}

export const PasswordInput: React.FC<Props> = ({onInputChange}) => {

  const onAddValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newUserPassword = event.target.value;
    onInputChange(user => ({
      ...user,
      password: newUserPassword
    }));
  }

  return (
    <div className="pw_input">
      <FontAwesomeIcon icon={faLock} />
      <input name='password' onChange={onAddValue} type="password" placeholder='Password' />
    </div>
  );
};