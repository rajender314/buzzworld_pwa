import { css } from '@emotion/css'
import { ThemeContextType } from '../../../core/globalVariables/themeContext'

export const PiDatePickerClass = (props: ThemeContextType) => css`
  width: 100%;
  .picker-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;
      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  div[role='presentation'] {
    margin-top: 6px;
  }
  .css-1a7rm5r-control {
    background-color: ${props.fieldBgColor};
    border: 2px solid ${props.primaryColor};
    margin: 4px 0px 8px 0px;
    font-size: 14px;
    height: 48px;
    &:hover {
      background: ${props.white};
      border: 2px solid ${props.inputHoverBorder};
    }
    &:focus {
      background: ${props.white};
      border: 2px solid ${props.inputFocusBorder};
    }
  }
  .css-qyxenl-control {
    height: 48px;
    &:hover {
      background: ${props.inputHoverBG};
      border: 2px solid ${props.inputHoverBorder};
    }
    margin: 4px 0px 8px 0px;
    background: ${props.white};
    border: 2px solid ${props.inputFocusBorder};
    font-size: 14px;
  }
  .css-60ak9x-Icon > svg {
    color: #758ca3;
  }
  .css-mqv3ay-Date[data-focused] {
    border: 1px solid #134c85;
    background-color: #134c85;
    color: #fff;
  }
  .css-mqv3ay-Date[data-today] {
    background-color: ${props.inputHoverBG};
    border: 2px solid ${props.inputHoverBG};
    color: ${props.primaryBG};
  }
  .css-mqv3ay-Date[data-today]::after {
    display: none;
  }
  .css-mqv3ay-Date[data-prev-selected] {
    background-color: #fff;
  }
  .css-mqv3ay-Date[data-selected] {
    background-color: #134c85;
    color: #fff;
    border: 1px solid #134c85;
  }
  .css-5ww0s7 .css-1a7rm5r-control {
    font-size: 14px;
  }
`
