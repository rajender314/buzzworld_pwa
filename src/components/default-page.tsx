import { useState } from 'react'
import EndpointUrl from '../core/apiEndpoints/endPoints'
import { removeLocalStorage } from '../core/localStorage/localStorage'
import { AccessDeniedContainer } from '../modules/authentication/Accessdenied/Acessdenied.component'
import { token } from '../services'
import CommonHeader from './Commonheader'
import Button from './Form-Components/button/button'
import { SpinnerDiv } from './Quote-components/Quote-detail-view-content/Quote-notes/quote-notes-components'
import PiSpinner from './spinner'
import { DefaultpageContainer } from './default-page-components'

export default function DefaultPage() {
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
    <div>
      <CommonHeader ProfileImg="" defaultPage quoteId="" customerName="" />
      <div className={loading ? 'opacity-on-load' : ''}>
        {loading && (
          <SpinnerDiv className="opacity-on-loading">
            <PiSpinner color="primary" size={50} libraryType="atalskit" />
          </SpinnerDiv>
        )}
        <DefaultpageContainer>
          <AccessDeniedContainer>
            <h4>Please check your email for any pending quote approvals</h4>
            <Button appearance="primary" label="Logout" libraryType="atalskit" onClick={logout} />
          </AccessDeniedContainer>
        </DefaultpageContainer>
      </div>
    </div>
  )
}
