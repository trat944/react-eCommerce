export const onCheckUsername = (userName: string, usernameError: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (userName.length <= 1 || /[^\w\s]/.test(userName) || userName.length > 20) usernameError(true);
  else usernameError(false);
}

export const onCheckPassword = (userPassword: string, passwordError: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (userPassword.length <= 1 || userPassword.length > 20) passwordError(true);
  else passwordError(false);
}