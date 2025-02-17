import { css } from '@emotion/css'
import { ThemeContextType } from '../../../core/globalVariables/themeContext'

const TextAreaClass = (props: ThemeContextType) => css`
  width: 100%;
  text-align: left;
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
  div {
    border-style: none;
  }
  textarea {
    margin: 4px 0 8px 0;
    align-items: flex-start;
    padding: 14px 14px 8px;
    background: ${props.fieldBgColor} !important;
    border: 2px solid ${props.primaryColor} !important;
    box-sizing: border-box;
    border-radius: 4px;
    &:hover {
      background: ${props.white} !important;
      border: 2px solid ${props.inputHoverBorder} !important;
    }
    &:focus {
      background: ${props.white} !important;
      border: 2px solid ${props.inputFocusBorder} !important;
    }
  }
  .form-error-msg {
    color: #f60a31;
    font-size: 12px;
  }
  /*.error > textarea {
    border: 2px solid ${props.error} !important;
  }

  .success > textarea {
    border: 2px solid ${props.success} !important;
  }*/
`
export default TextAreaClass
