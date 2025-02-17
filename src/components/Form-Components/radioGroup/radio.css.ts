import { css } from '@emotion/css'
import { ThemeContextType } from '../../../core/globalVariables/themeContext'

const PiRadioClass = (props: ThemeContextType) => css`
  .css-1xhjk83-Radio {
    background: ${props.primaryDisabledBG} !important;
    border: 0.125rem solid ${props.primaryColor} !important;
    &:hover {
      background: ${props.inputHoverBG} !important;
      border: 0.125rem solid ${props.inputHoverBorder} !important;
    }
    &:checked {
      background: ${props.inputFocusBorder} !important;
      border: 0.125rem solid ${props.inputFocusBorder} !important;
    }
  }
  .css-xrsww6-Radio {
    padding: 2px 4px;
    font-size: 14px;
  }
  .css-1xhjk83-Radio::after {
    width: calc(6px * 12 / 7) !important;
    height: calc(6px * 12 / 7) !important;
  }
`
export default PiRadioClass
