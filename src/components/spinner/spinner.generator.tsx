/* eslint-disable react/jsx-props-no-spreading */
import AtlasSpinner from '@atlaskit/spinner'
import { PiSpinnerProps } from './spinner'
import { ATALASLIT_LIBRARY } from '../../core/globalVariables/piConstant'
/**
 *
 * @param props as  PiSpinnerProps
 * @returns Spinner template
 */
function AtlasKitTemplate({ ...props }: PiSpinnerProps) {
  return <AtlasSpinner {...props} />
}

/**
 *
 * @param props as  PiSpinnerProps
 * @returns Default Spinner template
 */
function defaultTemplate(props: PiSpinnerProps) {
  return <div style={{ width: props.size }} />
}
/**
 *
 * @param props as  PiSpinnerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export default function generateSpinnerTemplate({ libraryType, ...props }: PiSpinnerProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  }
  return defaultTemplate(props)
}
