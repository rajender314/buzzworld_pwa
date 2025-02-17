/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react'
import { RadioGroup as AtlasRadioGroup } from '@atlaskit/radio'
import { PiRadioGroupProps, RadioOptionsType } from './radioGroup'
import PiRadioClass from './radio.css'
import { ATALASLIT_LIBRARY } from '../../../core/globalVariables/piConstant'
import PiThemeContext from '../../../core/globalVariables/themeContext'
import Typography from '../../typography'
/**
 *
 * @param props as  PiRadioGroupProps
 * @returns Atlaskit Radio Group template
 */
function AtlasKitTemplate({ libraryType, helpText, label, ...props }: PiRadioGroupProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiRadioClass(theme)} style={{ margin: '4px -6px' }}>
      {label && <Typography>{label}</Typography>}
      <AtlasRadioGroup {...props} />
      {helpText && <Typography>{helpText}</Typography>}
    </div>
  )
}

/**
 *
 * @param props as  PiRadioGroupProps
 * @returns default Radio Group template
 */
function defaultTemplate(props: PiRadioGroupProps) {
  return (
    <div>
      {props.options.map((option: RadioOptionsType) => (
        <>
          <p>{option.label}</p>
          <input type="radio" value={option.value} name={props.name} />
        </>
      ))}
    </div>
  )
}
/**
 *
 * @param props as  PiRadioGroupProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export default function generateRadioGroupTemplate(props: PiRadioGroupProps) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  }
  return defaultTemplate(props)
}
