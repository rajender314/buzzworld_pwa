import { BaseProps } from '../../core/globalVariables/piConstant'
import generateAddressTemplate from './address.generator'

export type AddressElements = {
  id?: number
  address1?: string
  address2?: string
  street?: string
  city?: string
  state?: string
  country?: string
  zip?: number
}
export class PiAddressProps extends BaseProps {
  label?: string

  data?: AddressElements
}

/**
 *
 * @param props this component takes PiSpinnerProps as input
 * @returns  returns component based on library type
 */
export default function PiAddress(props: PiAddressProps) {
  const newprops = new PiAddressProps()
  return generateAddressTemplate({ ...newprops, ...props })
}
