import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './inputs.css'
import { ChangeEvent } from 'react';

type Props = {
  onInputChange: React.Dispatch<React.SetStateAction<{
    name: string;
    password: string;
  }>>;
}

export const UsernameInput: React.FC<Props> = ({onInputChange}) => {

  const onAddValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newUserName = event.target.value;
    onInputChange(user => ({
      ...user,
      name: newUserName
    }));
  }

  return (
    <div className="user_input">
      <FontAwesomeIcon icon={faUser} />
      <input name='username' onChange={onAddValue} type="text" placeholder='Username' />
    </div>
  );
};
