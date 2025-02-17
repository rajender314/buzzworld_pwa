/* eslint-disable no-unused-vars */

import { BaseProps } from '../../../core/globalVariables/piConstant'
import generateInputTemplate from './input.generator'

export class InputProps extends BaseProps {
  label?: string

  name: string = 'inputField'

  onKeyDown?: (e: KeyboardEvent) => void

  onKeyPress?: (e: KeyboardEvent) => void

  onChange?: (e: any) => void

  helpText?: string

  appearance?: 'standard' | 'none' | 'subtle' = 'standard'

  isCompact?: boolean

  isDisabled?: boolean

  isReadOnly?: boolean

  width?: string | number

  placeholder?: string

  type?: string = 'text'

  className?: string

  value?: string

  maxLength?: number

  autofocus?: boolean

  ref?: any

  elemBeforeInput?: any

  isIcons?: boolean

  emitSave?: any

  emitUndo?: any

  isMandatory?: boolean

  onClick?: any
}

/**
 *
 * @param props this component takes InputProps as input
 * @returns  returns input component based on library type
 */
export default function Input(props: InputProps) {
  const newprops = new InputProps()
  return generateInputTemplate({ ...newprops, ...props })
}
