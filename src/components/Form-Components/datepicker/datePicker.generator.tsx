import React, { Fragment, useContext } from 'react'
import {
  DatePicker as AtlasDatePicker,
  DatePickerProps
} from '@atlaskit/datetime-picker'
import { PiDatePickerProps } from './datePicker'
import { PiDatePickerClass } from './datePicker.css'
import { ATALASLIT_LIBRARY } from '../../../core/globalVariables/piConstant'
import PiThemeContext from '../../../core/globalVariables/themeContext'
import Typography from '../../typography'


/**
 *
 * @param props as  PiButtonProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateDatePickerTemplate(props: PiDatePickerProps) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } 
    return DefaultTemplate(props)
  
}

/**
 *
 * @param props as  PiDatePickerProps
 * @returns Atlaskit Button template
 */
function AtlasKitTemplate({
  label,
  libraryType,
  isMandatory,
  helpText,
  ...props
}: PiDatePickerProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiDatePickerClass(theme)}>
      <div className='picker-label'>
        {label && (
          <div className='field-label-div'>
            <Typography component='label'>{label}</Typography>
            {isMandatory && <span className='mandatory-star'>*</span>}
          </div>
        )}

      </div>
      <AtlasDatePicker {...(props as DatePickerProps)} name='dob' />
        {helpText && <Typography>{helpText}</Typography>}
    </div>
  )
}

/**
 *
 * @param props as  PiDatePickerProps
 * @returns Atlaskit Button template
 */
function DefaultTemplate(props: PiDatePickerProps) {
  const defaultProps = generateDefaultProps(props)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>{props.label}</label>
        <input type='date' {...defaultProps} />
        {props.helpText && <span>{props.helpText}</span>}
      </div>
  )
}

/**
 *
 * @param props as  PiDatePickerProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiDatePickerProps) {
  const defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    min: props.minDate,
    max: props.maxDate,
    format: `${props.dateFormat}`
  }
  return defaultProps
}
