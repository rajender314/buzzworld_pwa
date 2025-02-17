import { css } from '@emotion/css'
import { ThemeContextType } from '../../core/globalVariables/themeContext'

const PiAddressClass = (props: ThemeContextType) => css`
  display: flex;
  align-items: center;
  padding: 0px;
  .quote-block {
    .label-text {
      color: ${props.lablelDescription};
      font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
      line-height: 20px;
      font-weight: 700;
    }
    .address-data {
      display: flex;
      color: ${props.lablelDescription};
      align-items: center;
      font-weight: 400;
      font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
    }
  }
`
export default PiAddressClass
