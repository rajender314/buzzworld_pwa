import { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import EndpointUrl from '../core/apiEndpoints/endPoints'
import { triggerApi } from '../services'
import { ApiResponse } from '../services/schema/schema'
import { getLocalStorage, setLocalStorage } from '../core/localStorage/localStorage'

export default function PermissionApiComponent() {
  const history = useHistory()

  const userPermissions = useCallback(() => {
    const apiObject = {
      payload: {},
      method: 'GET',
      apiUrl: `${EndpointUrl.userPermissions}`,
      headers: {},
    }
    triggerApi(apiObject).then((response: ApiResponse) => {
      if (response.result.success) {
        let userPermissionsData = []
        userPermissionsData = response.result.data
        const smartLink = getLocalStorage('payload')
          ? JSON.parse(getLocalStorage('payload') as string)
          : null

        setLocalStorage('userPermission', JSON.stringify(userPermissionsData))
        if (smartLink && smartLink.smart_link !== '/') {
          history.push(smartLink.smart_link)
        } else {
          history.push('/default-page')
        }
      }
    })
  }, [history])

  useEffect(() => {
    userPermissions()
  }, [userPermissions])

  return <div />
}
