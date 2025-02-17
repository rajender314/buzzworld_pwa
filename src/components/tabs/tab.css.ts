import { css } from '@emotion/css'
import { ThemeContextType } from '../../core/globalVariables/themeContext'

const PiTabClass = (props: ThemeContextType) => css`
  .css-127ggxn-TabListWithMode {
    padding: 0 16px;
    border-bottom: 2px solid ${props.primaryBG};
  }

  .css-127ggxn-TabListWithMode::before {
    display: none;
  }

  div[role='tab'] {
    overflow: hidden;
    span {
      color: ${props.primaryBG};
    }
  }
  div[role='tablist'] {
    gap: 16px;
    &::before {
      background-color: unset !important;
    }
  }

  div[role='tab'],
  div[role='tab'][aria-selected='true'] {
    // background: ${props.tabHeaderBG};
    color: ${props.tabColor};
    font-weight: 400;
    font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
    padding: 10px 0;
  }

  div[role='tab']::after {
    content: '';
    width: 100% !important;
    height: 2px !important;
    background-color: ${props.tabBorder};
    border-radius: none !important;
    border: none !important;
    left: 0 !important;
    right: 0 !important;
    transform: translateX(-100%) !important;
    transition: all 0.3s ease;
    bottom: 0 !important;
    position: absolute !important;
  }

  div[role='tab']:hover {
    color: ${props.tabBorder};
  }

  div[role='tab'][aria-selected='true']::after {
    transform: translateX(0) !important;
  }

  div[role='tab'][aria-selected='true'] {
    color: ${props.tabBorder} !important;
    font-weight: 700;
    font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  }
`
export default PiTabClass
