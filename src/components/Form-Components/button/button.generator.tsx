import { useContext } from 'react'
import AtlasButton, { LoadingButton } from '@atlaskit/button'
import { cx } from '@emotion/css'
import { ButtonProps } from './button'

import {
  ButtonLinkClass,
  ButtonPrimaryClass,
  ButtonRejectClass,
  ButtonSecondaryClass,
} from './button.css'
import PiThemeContext from '../../../core/globalVariables/themeContext'

/**
 *
 * @param props as  ButtonProps
 * @returns Atlaskit Button template
 */
function AtlasKitTemplate({
  label,
  isLoading,
  appearance,
  size,
  className,
  ...props
}: ButtonProps) {
  const theme = useContext(PiThemeContext)
  const piClass = {
    link: ButtonLinkClass,
    primary: ButtonPrimaryClass,
    secondary: ButtonSecondaryClass,
    reject: ButtonRejectClass,
  }
  const clsName = piClass[appearance]
  return props && isLoading ? (
    <LoadingButton
      isDisabled={props.isDisabled}
      shouldFitContainer={props.shouldFitContainer}
      type={props.type}
      onClick={props.onClick}
      iconBefore={props.iconBefore}
      iconAfter={props.iconAfter}
      isLoading
      className={cx(className, clsName ? clsName(theme, size) : '')}
    >
      {label}
    </LoadingButton>
  ) : (
    <AtlasButton
      isDisabled={props.isDisabled}
      shouldFitContainer={props.shouldFitContainer}
      type={props.type}
      onClick={props.onClick}
      iconBefore={props.iconBefore}
      iconAfter={props.iconAfter}
      className={cx(className, clsName ? clsName(theme, size) : '')}
    >
      {label}
    </AtlasButton>
  )
}
/**
 *
 * @param props as  ButtonProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export default function generateButtonTemplate({ ...props }: ButtonProps) {
  return AtlasKitTemplate(props)
}

/**
 *
 * @param props as  ButtonProps
 * @returns Default Button template
 */
// function DefaultTemplate({ label, ...props }: ButtonProps) {
//   const defaultProps = generateDefaultProps({ label, ...props });

//   return <button {...defaultProps}>{label}</button>;
// }

/**
 *
 * @param props as  ButtonProps
 * @returns props suitable for default template after conversion
 */
// function generateDefaultProps(props: ButtonProps) {
//   const defaultProps = {
//     onClick: props.onClick,
//     disabled: props.isDisabled,
//     type: props.type,
//   };
//   return defaultProps;
// }
