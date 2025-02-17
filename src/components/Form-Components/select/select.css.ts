import { css } from '@emotion/css'
import { ThemeContextType } from '../../../core/globalVariables/themeContext'

export const SelectClass = (props: ThemeContextType) => css`
  width: 100%;
  .select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.save-reset-icons {
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
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
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
  div[class$='-menu'] {
    margin: 3px !important;
    div[class$='-MenuList'] {
      padding: 0px !important;
    }
  }
  /*.pi-select-wrapper {
    div {
      .css-1bx7l6n-control {
        border-radius: 4px;
        margin: 4px 0 8px 0;
        background-color: ${props.primaryDisabledBG};
        border: 2px solid ${props.primaryColor};
        font-size: 14px;
        height: 36px !important;
        line-height: 1;
        &:hover {
          background: ${props.inputHoverBG};
          border-color: ${props.inputHoverBorder};
        }
        &:focus {
          background: ${props.white};
          border-color: ${props.inputFocusBorder};
        }
      }
    }
  }*/

  /*}*/
  /*.pi-select-wrapper > div > div {
    border-radius: 4px;
    margin: 4px 0 8px 0;
    background-color: ${props.primaryDisabledBG};
    border: 2px solid ${props.primaryColor};
    font-size: 14px;
    height: 36px !important;
    line-height: 1;
    &:hover {
      background: ${props.inputHoverBG};
      border-color: ${props.inputHoverBorder};
    }
    &:focus {
      background: ${props.white};
      border-color: ${props.inputFocusBorder};
    }
  }*/

  .react-select__control {
    border-radius: 4px;
    margin: 4px 0 8px 0;
    background-color: ${props.fieldBgColor};
    border: 2px solid ${props.primaryColor};
    font-size: 14px;
    height: 36px !important;
    line-height: 1;
    &:hover {
      background: ${props.white};
      border-color: ${props.inputHoverBorder};
    }
    &:focus {
      background: ${props.white};
      border-color: ${props.inputFocusBorder};
    }
  }
  .css-rij6sy-ValueContainer {
    padding: 0 8px !important;
  }
  /*.css-qyxenl-control {
    margin: 4px 0 8px 0;
    height: 36px !important;
    &:hover {
      background: ${props.inputHoverBG};
      border: 2px solid ${props.inputHoverBorder};
    }
    font-size: 14px;
    background: ${props.white};
    border: 2px solid ${props.inputFocusBorder};
  }*/
  .css-12fvnfc-option {
    box-shadow: none;
    background-color: ${props.inputHoverBG};
  }
  .css-j6sl50-option {
    box-shadow: none;
    background-color: ${props.inputFocusBorder};
    color: ${props.white};
  }
  .css-8acq3y-option {
    box-shadow: none;
    background-color: ${props.inputFocusBorder};
    color: ${props.white};
  }
  .css-otwtzu-option:active {
    background-color: ${props.inputHoverBG};
  }
  .css-12fvnfc-option:active {
    background-color: ${props.inputHoverBG};
  }
  .form-error-msg {
    color: #f60a31;
    font-size: 12px;
  }
`
