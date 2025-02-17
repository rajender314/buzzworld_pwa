import { BaseProps } from '../../../core/globalVariables/piConstant'
import { generateDatePickerTemplate } from './datePicker.generator'

export class PiDatePickerProps extends BaseProps {
  label?: string

  name: string = 'dateField'

  // eslint-disable-next-line no-unused-vars
  onKeyDown?: (e: KeyboardEvent) => void

  helpText?: string

  appearance?: 'standard' | 'none' | 'subtle' = 'standard'

  isDisabled?: boolean

  placeholder?: string

  dateFormat?: string = 'MM/DD/YYYY'

  onChange?: any

  defaultValue?: string

  minDate?: string

  maxDate?: string

  value?: string

  isOpen?: boolean

  isIcons?: boolean

  emitSave?: any

  emitUndo?: any

  isMandatory?: boolean

  id?: string

  onKeyPress?: any

  testId?: any
}

/**
 *
 * @param props this component takes PiDatePickerProps as input
 * @returns  returns input component based on library type
 */
export default function PiDatePicker(props: PiDatePickerProps): any {
  const newProps = new PiDatePickerProps()
  return generateDatePickerTemplate({ ...newProps, ...props })
}
