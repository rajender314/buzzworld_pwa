import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Authorization from '../modules/authentication/Authentication/authentication'
import { getLocalStorage } from '../core/localStorage/localStorage'
import Layout from '../components/layout/layout'
import LayoutContainer from '../components/layout/layout-components'

export default function AppRoutes() {
  const [token, setToken] = useState('')
  const localStorageData = getLocalStorage('token') as string

  useEffect(() => {
    const tokenVal = localStorageData
    setToken(tokenVal)
  }, [localStorageData])

  /**
   * @return {string}
   */
  function getLandingRoute(): any {
    const userInfo = getLocalStorage('userPermission')
      ? JSON.parse(getLocalStorage('userPermission') as string)
      : null
    if (window.location.pathname.substring(1).split('/')[0]) {
      return window.location.pathname
    }
    if (userInfo && userInfo.user_type === '1') {
      return 'default-page'
    }
    if (userInfo && userInfo.user_type === '2') {
      return 'default-page'
    }
    return 'default-page'
  }
  return (
    <Router>
      <Switch>
        {(() => {
          if (token === '') {
            return (
              <Route>
                <Suspense fallback={null}>
                  <Authorization />
                </Suspense>
              </Route>
            )
          }
          return (
            <>
              <Redirect exact from="/" to={getLandingRoute()} />

              <LayoutContainer>
                <Layout />
              </LayoutContainer>
            </>
          )
        })()}
      </Switch>
    </Router>
  )
}
