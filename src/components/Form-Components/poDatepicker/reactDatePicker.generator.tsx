/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { ATALASLIT_LIBRARY } from '../../../core/globalVariables/piConstant'
import { PiReactDatePickerProps } from './reactDatePicker'
import Typography from '../../typography'
import PiThemeContext from '../../../core/globalVariables/themeContext'
import { PiReactDatePickerClass } from './reactDatePicker.css'
import 'react-datepicker/dist/react-datepicker.css'

/**
 *
 * @param props as  PiReactDatePickerProps
 * @returns Atlaskit Date and time picker template
 */
function AtlasKitTemplate({
  label,
  name,
  libraryType,
  helpText,
  ...props
}: PiReactDatePickerProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiReactDatePickerClass(theme)}>
      <div className="picker-label">
        {label && (
          <div className="field-label-div">
            <Typography component="label">{label}</Typography>
            <span className="mandatory-star">*</span>
          </div>
        )}
      </div>
      <DatePicker {...(props as ReactDatePickerProps)} />
      {helpText && <Typography component="error">{helpText}</Typography>}
    </div>
  )
}
/**
 *
 * @param props as  PiReactDatePickerProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiReactDatePickerProps) {
  const defaultProps = {
    disabled: props.disabled,
    helperText: props.helpText,
    placeholderText: props.placeholderText,
    // min: props.minDate,
    // max: props.maxDate,
    format: `${props.dateFormat}`,
  }
  return defaultProps
}
/**
 *
 * @param props as  PiReactDatePickerProps
 * @returns Deafult Date and time picker template
 */
function DefaultTemplate(props: PiReactDatePickerProps) {
  const defaultProps = generateDefaultProps(props)
  const { label, helpText } = props
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>{label}</p>
      <input type="date" {...defaultProps} />
      {helpText && <span>{helpText}</span>}
    </div>
  )
}

/**
 *
 * @param props as  PiReactDatePickerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export default function generateDateTimePickerTemplate(props: PiReactDatePickerProps) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  }
  return DefaultTemplate(props)
}
