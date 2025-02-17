import { BaseProps } from '../../../core/globalVariables/piConstant'
import { generateSelectTemplate } from './select.generator'

export type DropDownItemProps = {
  label: string
  value: string
}

export class SelectProps extends BaseProps {
  label?: string

  name: string = 'select'

  helpText?: string

  isDisabled?: boolean

  defaultValue?: DropDownItemProps

  // eslint-disable-next-line no-unused-vars
  onChange?: (e: DropDownItemProps, actionMeta?: any) => void

  value?: any

  isMulti?: boolean

  isSearchable?: boolean

  options: DropDownItemProps[] = []

  placeholder?: string = 'Select...'

  variant?: 'standard' | 'outlined' | 'filled'

  className?: string

  menuIsOpen?: boolean

  classNamePrefix?: string

  isClearable?: boolean

  onInputChange?: any

  onFocus?: any

  noOptionsMessage?: any

  isIcons?: boolean

  emitSave?: any

  emitUndo?: any

  isMandatory?: boolean

  isLoading?: any

  formatOptionLabel?: any
}

/**
 *
 * @param props this component takes SelectProps as input
 * @returns  returns component based on library type
 */
export default function Select(props: SelectProps) {
  const newprops = new SelectProps()
  return generateSelectTemplate({ ...newprops, ...props })
}
