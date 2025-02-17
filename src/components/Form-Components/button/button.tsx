import React from 'react'
import { BaseProps } from '../../../core/globalVariables/piConstant'
import generateButtonTemplate from './button.generator'

export type ApperanceType = 'primary' | 'secondary' | 'link' | 'reject'
export type PiSizeType = 'xs' | 'small' | 'medium' | 'large'

export class ButtonProps extends BaseProps {
  appearance: ApperanceType = 'primary'

  label: string = ''

  isDisabled?: boolean

  shouldFitContainer?: boolean

  isLoading?: boolean

  size?: PiSizeType = 'small'

  type?: 'submit' | 'button' | 'reset' = 'button'

  onClick?: () => void

  iconBefore?: React.ReactChild

  iconAfter?: React.ReactChild

  className?: string
}

/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns component based on library type
 */
export default function Button(props: ButtonProps) {
  const newprops = new ButtonProps()
  return generateButtonTemplate({ ...newprops, ...props })
}
