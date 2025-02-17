import { useState } from 'react'
import { CommonHeaders, HeaderText, Logo } from './CommonHeader.component'
import HeaderLogo from '../../assets/images/header-logo.svg'
import ToastNotification from '../ToastNotification'
import { TostContainer } from '../ToastNotification/ToastNotification.component'
import EndpointUrl from '../../core/apiEndpoints/endPoints'
import { token } from '../../services'
import { removeLocalStorage } from '../../core/localStorage/localStorage'
import { SpinnerDiv } from '../Quote-components/Quote-detail-view-content/Quote-notes/quote-notes-components'
import PiSpinner from '../spinner'
import Avatar from '../../assets/images/avator.svg'
import HeaderDropdown from '../HeaderDropdown/header-drop-down'

type Props = {
  quoteId: string
  customerName: string
  ProfileImg: any
  defaultPage: boolean
}

export default function CommonHeader({ quoteId, customerName, ProfileImg, defaultPage }: Props) {
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)

  const onLogout = () => {
    setShowPopup(true)
  }
  const onCancel = () => {
    setShowPopup(false)
  }
  const onYes = () => {
    setLoading(true)
    setShowPopup(false)

    window.location.href =
      `${process.env.REACT_APP_API_URL}` +
      `${EndpointUrl.logoutApi}?token=${token}&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
    removeLocalStorage('token')
    removeLocalStorage('userPermission')
    removeLocalStorage('payload')
  }
  const Options = [
    {
      label: 'Logout',
      value: '1',
    },
  ]
  const onClose = () => {
    setShowPopup(false)
  }
  return (
    <>
      <CommonHeaders className={loading ? 'opacity-on-load' : ''}>
        {loading && (
          <SpinnerDiv className="opacity-on-loading">
            <PiSpinner color="primary" size={50} libraryType="atalskit" />
          </SpinnerDiv>
        )}
        <Logo className="iidm_logo">
          <img src={HeaderLogo} alt="buzzworld-logo" />
        </Logo>
        {quoteId && customerName && (
          <HeaderText>
            <p> {quoteId}</p>
            <span>{customerName}</span>
          </HeaderText>
        )}

        <HeaderDropdown
          options={Options}
          profileImage={ProfileImg !== '' ? ProfileImg : Avatar}
          onChange={onLogout}
          defaultPage={defaultPage}
        />
      </CommonHeaders>
      {showPopup && (
        <TostContainer style={{ zIndex: '1' }}>
          <ToastNotification
            onCancel={onCancel}
            onApprove={onYes}
            onClose={onClose}
            title="Confirmation"
            content="Are you sure you want to Logout ?"
            submitappearance="primary"
            submitButtonlabel="Yes"
            secondaryButtonlabel="No"
            isToastFooter
            isToastloading={false}
          />
        </TostContainer>
      )}
    </>
  )
}
