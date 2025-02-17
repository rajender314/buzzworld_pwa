import { PropsWithChildren, memo, useContext } from 'react'
import Tabs from '@atlaskit/tabs'
import PiTabClass from './tab.css'
import PiThemeContext from '../../core/globalVariables/themeContext'

export class PiTabGroupProps {
  selected?: number

  id: string = 'default-tab'

  // eslint-disable-next-line no-unused-vars
  onChange?: (e: number) => void

  className?: string
}
function PiTabGroup(props: PropsWithChildren<PiTabGroupProps>) {
  const { id, selected, onChange, children } = props
  const theme = useContext(PiThemeContext)
  const handleChange = (e: number) => {
    if (onChange) {
      onChange(e)
    }
  }
  return (
    <div className={`${PiTabClass(theme)} pitabs-wrapper`}>
      <Tabs id={id} selected={selected} onChange={handleChange}>
        {children}
      </Tabs>
    </div>
  )
}

export default memo(PiTabGroup)
