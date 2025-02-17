import { BaseProps } from '../../../core/globalVariables/piConstant'
import generateTextAreaTemplate from './textArea.generator'

export type resizeTypes = 'auto' | 'vertical' | 'horizontal' | 'none'
export class TextAreaProps extends BaseProps {
  label?: string

  name: string = 'textAreaField'

  helpText?: string

  isDisabled?: boolean

  isReadOnly?: boolean

  placeholder?: string

  appearance?: 'standard' | 'none' | 'subtle' = 'standard'

  isCompact?: boolean

  minimumRows?: number = 3

  value?: string

  defaultValue?: string

  maxHeight?: string

  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void

  maxLength?: number

  isIcons?: boolean

  emitSave?: any

  emitUndo?: any

  isMandatory?: any
}

/**
 *
 * @param props this component takes TextAreaProps as input
 * @returns  returns component based on library type
 */
export default function TextArea(props: TextAreaProps): any {
  const newprops = new TextAreaProps()
  return generateTextAreaTemplate({ ...newprops, ...props })
}
