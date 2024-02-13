import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './inputs.css'
import { ChangeEvent } from 'react';

type Props = {
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
}

export const UsernameInput: React.FC<Props> = ({onInputChange}) => {

  const onAddValue = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  }

  return (
    <div className="user_input">
      <FontAwesomeIcon icon={faUser} />
      <input onChange={onAddValue} type="text" placeholder='Username' />
    </div>
  );
};