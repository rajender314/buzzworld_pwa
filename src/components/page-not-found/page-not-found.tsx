import { useState } from 'react'
import ErrorImg from '../../assets/images/Error404.svg'
import { ErrorContainer, ErrorImgContainer } from './page-not-found.component'
import CommonHeader from '../Commonheader'
import EndpointUrl from '../../core/apiEndpoints/endPoints'
import { token } from '../../services'
import { removeLocalStorage } from '../../core/localStorage/localStorage'
import Button from '../Form-Components/button'
import { SpinnerDiv } from '../Quote-components/Quote-detail-view-content/Quote-notes/quote-notes-components'
import PiSpinner from '../spinner'

export default function ErrorPage() {
  const [loading, setLoading] = useState(false)

  const logout = () => {
    setLoading(true)
    window.location.href =
      `${process.env.REACT_APP_API_URL}` +
      `${EndpointUrl.logoutApi}?token=${token}&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
    removeLocalStorage('token')
    removeLocalStorage('userPermission')
    removeLocalStorage('payload')
  }
  return (
    <>
      <CommonHeader ProfileImg="" defaultPage quoteId="" customerName="" />
      {loading && (
        <SpinnerDiv className="opacity-on-loading">
          <PiSpinner color="primary" size={50} libraryType="atalskit" />
        </SpinnerDiv>
      )}
      <ErrorContainer className={loading ? 'is-loading' : ''}>
        <ErrorImgContainer>
          <img src={ErrorImg} alt="error" />
          <p>Page Not Found</p>
          <Button
            appearance="primary"
            label="Logout"
            onClick={logout}
            libraryType="atalskit"
            isDisabled={loading}
          />
        </ErrorImgContainer>
      </ErrorContainer>
    </>
  )
}
