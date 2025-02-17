import { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const PermissionApiComponent = lazy(() => import('../permission-api-component'))
const Accessdenied = lazy(() => import('../../modules/authentication/Accessdenied'))
const QuoteDetailView = lazy(() => import('../../modules/Quotes/Quotes-detail-view'))
const ErrorPage = lazy(() => import('../page-not-found/page-not-found'))
const DefaultPage = lazy(() => import('../default-page'))
export default function Layout() {
  const routes = [
    {
      path: '/',
      component: PermissionApiComponent,
    },
    {
      path: '/quote_for_parts/:id',
      component: QuoteDetailView,
      showHeader: true,
    },
    {
      path: '/system_quotes/:id',
      component: QuoteDetailView,
      showHeader: true,
    },

    {
      path: '/loading...',
      component: PermissionApiComponent,
    },
    {
      path: '/accessdenied',
      component: Accessdenied,
    },
    {
      path: '/default-page',
      component: DefaultPage,
    },
    {
      path: '*',
      component: ErrorPage,
    },
  ]
  return (
    <Switch>
      {routes.map(route => (
        <Route exact path={route.path} key={route.path}>
          <Suspense fallback={null}>
            <route.component />
          </Suspense>
        </Route>
      ))}
    </Switch>
  )
}
