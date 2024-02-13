import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './inputs.css'
import { ChangeEvent } from 'react';

type Props = {
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
}

export const PasswordInput: React.FC<Props> = ({onInputChange}) => {

  const onAddValue = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  }

  return (
    <div className="pw_input">
      <FontAwesomeIcon icon={faLock} />
      <input onChange={onAddValue} type="password" placeholder='Password' />
    </div>
  );
};