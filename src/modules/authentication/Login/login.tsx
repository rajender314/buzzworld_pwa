import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  LoginHeader,
  LoginFieldsContainer,
  SignMicrosoftContainer,
  MicrosoftLogoContainer,
  MSLogoText,
  FlexCenter,
  FieldsContainer,
  LoginButtonContainer,
  PasswordFieldContainer,
  EyeIconContainer,
} from './login-component'
import LoginLogo from '../../../assets/images/Login-Buzzworld.svg'
import MicrosoftLogo from '../../../assets/images/microsoft-logo.svg'
import Input from '../../../components/Form-Components/input'
import Button from '../../../components/Form-Components/button/button'
import EyeoffIcon from '../../../assets/images/eye-off.svg'
import EyeonIcon from '../../../assets/images/eye-on.svg'

export default function Login() {
  const [showPassword, setShowpassword] = useState<boolean>(false)
  const history = useHistory()

  const onLogin = () => {
    history.push('/quote-detail-view')
  }
  const togglePassword = () => {
    setShowpassword(showPassword ? !showPassword : showPassword)
  }
  return (
    <>
      <LoginHeader>
        <img src={LoginLogo} alt="loading" />
      </LoginHeader>

      <FieldsContainer>
        <SignMicrosoftContainer>
          <MicrosoftLogoContainer>
            <img src={MicrosoftLogo} alt="loading" />
          </MicrosoftLogoContainer>
          <MSLogoText>Sign in with Microsoft</MSLogoText>
        </SignMicrosoftContainer>

        <FlexCenter> or</FlexCenter>
        <LoginFieldsContainer>
          <Input
            name="email"
            label="Email or username"
            isMandatory
            placeholder="Enter Email or username"
          />
          <PasswordFieldContainer>
            <Input
              name="password"
              label="Password"
              isMandatory
              placeholder="Enter Password"
              type={showPassword ? 'text' : 'password'}
            />
            <EyeIconContainer onClick={togglePassword}>
              <img src={showPassword ? EyeonIcon : EyeoffIcon} alt="loading" />
            </EyeIconContainer>
          </PasswordFieldContainer>

          <LoginButtonContainer onClick={onLogin}>
            <Button appearance="primary" label="Login" />
          </LoginButtonContainer>
        </LoginFieldsContainer>
      </FieldsContainer>
    </>
  )
}
