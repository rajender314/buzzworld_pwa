/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import { BaseProps } from '../../core/globalVariables/piConstant'
import generateSideDrawerTemplate from './sideDrawer.generator'

export type PiWidthType = 'wide' | 'narrow' | 'medium' | 'full' | 'extended'

export class PiSideDrawerProps extends BaseProps {
  isOpen?: boolean

  children: ReactNode

  onClose?: (e: any) => void

  onCloseComplete?: (e: any) => void

  onBackdropClose?: (e: any) => void

  width?: PiWidthType
}

/**
 *
 * @param props this component takes PiSideDrawerProps as input
 * @returns  returns input component based on library type
 */
export default function PiSideDrawer(props: PiSideDrawerProps) {
  const newprops = new PiSideDrawerProps()
  return generateSideDrawerTemplate({ ...newprops, ...props })
}
