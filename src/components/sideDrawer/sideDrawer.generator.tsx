import { useContext } from 'react'
import PiThemeContext from '../../core/globalVariables/themeContext'
import { PiSideDrawerProps } from './sideDrawer'
import { PiSideDrawerClass } from './sideDrawer.css'
/**
 *
 * @param props as  PiSideDrawerProps
 * @returns Atlaskit TextField template
 */

function AtlasKitTemplate({ width, ...props }: PiSideDrawerProps) {
  const theme = useContext(PiThemeContext)
  const { isOpen, onBackdropClose, children } = props
  let drawerClasses = 'side-drawer'
  if (props.isOpen) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <div className={PiSideDrawerClass(theme, width)}>
      {isOpen && (
        <>
          <div className={drawerClasses}>{children}</div>
          <div className="backdrop" onClick={onBackdropClose} />
        </>
      )}
    </div>
  )
}
/**
 *
 * @param props as  PiSideDrawerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export default function generateSideDrawerTemplate({ ...props }: PiSideDrawerProps) {
  return AtlasKitTemplate(props)
}
