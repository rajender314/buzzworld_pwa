import styled from "styled-components";
import { regularFont } from "../../../styles";

export const DateRangePickerDiv = styled.div`
  display: flex;
  flex-direction: column;
  &.fs-14 {
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
  }

  &.dt-pkr-bg-unset span[aria-live="assertive"] ~ div {
    /* border: 0.125rem solid #d0daec !important; */
    border-radius: 4px;

    max-height: 36px !important;
    min-height: 36px !important;
    background-color: var(--ds-background-input, #f7faff);
    border-color: var(--ds-border-input, #d0daec) !important;
  }
  &.dt-pkr-bg-unset span[aria-live="assertive"] ~ div:hover {
    background-color: var(--ds-background-input, #fff);
  }
  &.dt-pkr-bg-unset span[aria-live="assertive"] ~ div:focus-within {
    border-color: var(--ds-border-focused, #4c9aff) !important;
    background-color: var(--ds-background-input, #fff);
  }
  div[role="presentation"] {
    margin-bottom: 6px !important;
  }

  .date-range-input {
    height: 36px;
    width: 100%;
    border: 2px solid var(--greyCardBorder);
    border-radius: 6px;
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    ${regularFont}
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--modelTitleColor);

    padding-left: 7px;
    &:focus {
      border: 1px solid red;
    }
    &::placeholder {
      color: var(--ds-text-subtlest, #5e6c84);
      padding-left: 4px;
      font-size: clamp(
        var(--min-font-size),
        calc(2vw + 2px),
        var(--max-font-size)
      );
      ${regularFont}
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
    }
    &.multi-select {
      height: 40px;
    }
  }
  &.so-line-date > div > div > div > label {
    /* color: #00a67e; */
    color: #4e586d;

    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    font-weight: bold;
    line-height: 1.65;
  }
  &.so-line-date {
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    ${regularFont}
    label {
      font-weight: 400 !important;
    }
  }
`;
export const PoDateErrormsg = styled.span`
  color: #f60a31;
  font-size: 12px;
`;
