import { TabList } from '@atlaskit/tabs'
import { PropsWithChildren, memo } from 'react'
import PiTabHeader from './tabHeader'

class PiTabsProps {
  items?: string[]
}
function PiTabHeaderPanel(props: PropsWithChildren<PiTabsProps>) {
  const { items, children } = props
  return (
    <TabList>
      {children}
      {items && items.map((row: string) => <PiTabHeader>{row}</PiTabHeader>)}
    </TabList>
  )
}

export default memo(PiTabHeaderPanel)
