import { Tab } from '@atlaskit/tabs'
import { PropsWithChildren, memo } from 'react'

class PiTabHeaderProps {}

function PiTabHeader(props: PropsWithChildren<PiTabHeaderProps>) {
  const { children } = props
  return <Tab>{children}</Tab>
}

export default memo(PiTabHeader)
