import { BaseProps } from '../../core/globalVariables/piConstant'
import generateSpinnerTemplate from './spinner.generator'

export class PiSpinnerProps extends BaseProps {
  apperance?: 'inherit' | 'invert' = 'inherit'

  size?: number

  color: 'secondary' | 'inherit' | 'primary' = 'inherit'
}

/**
 *
 * @param props this component takes PiSpinnerProps as input
 * @returns  returns component based on library type
 */
export default function PiSpinner(props: PiSpinnerProps) {
  const newprops = new PiSpinnerProps()
  return generateSpinnerTemplate({ ...newprops, ...props })
}
