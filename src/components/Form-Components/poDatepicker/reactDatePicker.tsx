import { BaseProps } from '../../../core/globalVariables/piConstant'
import generateDateTimePickerTemplate from './reactDatePicker.generator'

export class PiReactDatePickerProps extends BaseProps {
  label?: string

  name: string = 'dateTimeField'

  helpText?: string

  appearance?: 'standard' | 'none' | 'subtle' = 'standard'

  disabled?: boolean

  placeholderText?: string

  dateFormat?: string = 'MM/DD/YYYY'

  value?: string

  selected?: Date | null | undefined

  onChange?: (date: Date) => void

  minDate?: Date | null | undefined | string

  maxDate?: Date | null | undefined | string

  isClearable?: boolean

  peekNextMonth?: boolean

  showMonthDropdown?: boolean

  showYearDropdown?: boolean

  dropdownMode: string = 'select'

  filterDate?: (date: Date) => void
}

/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiReactDatePicker(props: PiReactDatePickerProps) {
  const newprops = new PiReactDatePickerProps()
  return generateDateTimePickerTemplate({ ...newprops, ...props })
}
