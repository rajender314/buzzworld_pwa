/* eslint-disable no-unused-vars */
import { css } from "@emotion/css";
import { ThemeContextType } from "../../../core/globalVariables/themeContext";

export const PiReactDatePickerClass = (props: ThemeContextType) => css`
  width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
        border-radius: 4px;
        /* margin: 4px 0 8px 0; */
        background-color: ${props.fieldBgColor};
        border: 2px solid ${props.primaryColor};
        font-size: 14px;
        height: 36px;
        width: 100%;
        padding: 2px 6px;
        margin: 0;
        color: var(--ds-text, #091e42);

        &:hover {
          background: ${props.white};
          border: 2px solid ${props.inputHoverBorder};
        }
        &:focus {
          background: ${props.white};
          border: 2px solid ${props.inputFocusBorder};
        }
        &:focus-visible {
          background: ${props.white};
          border: 1px solid ${props.primaryBG} !important;
          outline: none;
        }
      }
    }
  }
  .react-datepicker-popper {
    .react-datepicker {
      background: #ffffff;
      box-shadow: 0px 1px 9px rgb(10 31 68 / 10%),
        0px 0px 1px rgb(10 31 68 / 8%), 0px 8px 10px rgb(10 31 68 / 10%);
      border-radius: 12px;
      padding: 16px;
      border-color: transparent;
      .react-datepicker__triangle {
        display: none;
      }
      .react-datepicker__header {
        background-color: #ffffff;
        border-bottom: 1px solid transparent;
      }
      .react-datepicker__day-names {
        .react-datepicker__day-name {
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: #767b7c;
        }
      }
      select {
        font-weight: 400;
        font-size: 14px;
        border-color: #ccc;
        background: #fff;
        color: #68787a;
        border: 1px solid #bbc7ca;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 8px;
        margin: 6px;
        min-width: 111px;

        background: transparent;
        /* background-image: url("data:image/svg+xml;utf8,<svg fill='grey' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>"); */
        background-repeat: no-repeat;
        background-position-x: 97%;
        background-position-y: 5px;
        &:focus {
          outline: none;
        }
      }

      select-options {
        &:hover {
          background-color: ${props.secondaryActiveBg};
        }
        &:active {
          background-color: ${props.secondaryActiveBg};
        }
      }
      .react-datepicker__month-container {
        .react-datepicker__header {
        }
      }
    }
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: ${props.primaryBG} !important;
    border-radius: 50%;
    color: #fff !important;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    // border-radius: 0.3rem;
    background-color: ${props.primaryHoverBG};
    border-radius: 50%;
    color: ${props.white} !important;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: ${props.primaryHoverBG};
    border-radius: 50%;
    color: #fff !important;
  }
  .react-datepicker-popper[data-placement^="bottom"] {
    padding-top: 0;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #1b2324;
    margin-bottom: 8px;
  }
  .react-datepicker__navigation {
    top: 16px;
  }
  .react-datepicker__navigation--next {
    right: 16px;
  }
  .react-datepicker__navigation--previous {
    left: 16px;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;
    display: inline-block;
    width: 1.9rem;
    margin: 0.166rem;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 2.2;
    text-align: center;
  }
  .react-datepicker__header__dropdown.react-datepicker__header__dropdown--select {
    margin-bottom: 8px;
  }

  .react-datepicker__day--selected {
    background-color: ${props.primaryHoverBG};
    border-radius: 50%;
    color: ${props.white} !important;
  }
  .react-datepicker__day--disabled,
  .react-datepicker__day--disabled:hover,
  .react-datepicker__day--disabled:focus {
    opacity: 0.4; /* Decrease opacity of past dates */
    pointer-events: none; /* Disable interaction with past dates */
  }

  .react-datepicker__close-icon::after {
    cursor: pointer;
    background-color: var(--ds-surface, #ffffff);
    padding: 2px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    content: "×";
  }
`;
