import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../../../core/localStorage/localStorage'
import { toQuery } from '../../../core/utils'
import PiSpinner from '../../../components/spinner/spinner'
import { SpinnerDiv } from '../../../components/Quote-components/Quote-detail-view-content/Quote-notes/quote-notes-components'

export default function Authorization() {
  const authorizationUrl = `${process.env.REACT_APP_AUTHORIZATION_URL}`
  const clientId = `${process.env.REACT_APP_CLIENT_ID}`
  const redirectUri = `${process.env.REACT_APP_REDIRECT_URI}`
  const appServerUrl = `${process.env.REACT_APP_SERVER_URL}`

  const access_token = getLocalStorage('token')

  const [isToken, setIsToken] = useState(false)

  useEffect(() => {
    if (!access_token) {
      ;(async () => {
        const urlparams = new URLSearchParams(window.location.search)

        if (urlparams.has('code')) {
          const params = {
            grant_type: `${process.env.REACT_APP_GRANT_TYPE}`,
            client_id: `${process.env.REACT_APP_CLIENT_ID}`,
            client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
            redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}`,
            code: urlparams.get('code'),
          }
          fetch(`${appServerUrl}/token`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
              'content-type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(json => {
              if (json.access_token) {
                setLocalStorage('token', json.access_token)
                setIsToken(true)
                document.cookie = '12121, sdssdd'
              } else {
                removeLocalStorage('token')
                setIsToken(false)
              }
              setTimeout(() => {
                window.location.reload()
              }, 1000)
            })
        } else {
          const payload = {
            client_id: clientId,
            redirect_uri: redirectUri,
            response_type: 'code',
            smart_link: window.location.pathname,
          }

          const search = toQuery(payload)
          setLocalStorage('payload', JSON.stringify(payload))

          window.location.href = `${authorizationUrl}?${search}`
          if (payload.smart_link !== '/') {
            setLocalStorage('payload', JSON.stringify(payload))
          }
        }
      })()
    } else {
      // const smartLink = getLocalStorage("payload")
      //  ? JSON.parse(getLocalStorage("payload") as string)
      //  : null;
      // if (smartLink) {
      //  history.push(smartLink.smart_link);
      // } else {
      //  history.push("/loading...");
      // }
    }
  }, [])

  return (
    <>
      {/* {isToken && history.push("/loading...")}
      {!isToken && (
        <SpinnerDiv>
          <PiSpinner color="primary" size={50} libraryType="atalskit" />
        </SpinnerDiv>
      )} */}

      <>
        {isToken && <Redirect exact from="/" to="/loading..." />}
        {!isToken && (
          <SpinnerDiv>
            <PiSpinner color="primary" size={50} libraryType="atalskit" />
          </SpinnerDiv>
        )}
      </>
    </>
  )
}
