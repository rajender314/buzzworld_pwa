import { TabPanel } from '@atlaskit/tabs'
import { PropsWithChildren, memo } from 'react'

class PiTabPanelProps {}
function PiTabPanel(props: PropsWithChildren<PiTabPanelProps>) {
  const { children } = props
  return <TabPanel>{children}</TabPanel>
}

export default memo(PiTabPanel)
