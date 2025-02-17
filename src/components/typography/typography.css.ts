import { css } from '@emotion/css'
import { ThemeContextType } from '../../core/globalVariables/themeContext'

const CommonFont = (props: ThemeContextType) => css`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  color: ${props.textColor};
`

export const PiTextH1 = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
`

export const PiTextH2 = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
`

export const PiTextH3 = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`

export const PiTextH4 = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
`
export const PiTextH5 = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`

export const PiTextH6 = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`

export const PiTextP = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`
export const PiTextPBold = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`
export const PiTextTH = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`
export const PiTextS = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-size: 12px;
  line-height: 16px;
`
export const PiTextXS = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: 600;
  font-size: 8px;
  line-height: 14px;
`
export const PiTextCaption = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`
export const PiTextLabel = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 4px;
`

export const PiTextDefault = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`
export const PiTextSuccess = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${props.success};
`
export const PiTextError = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${props.error};
`

export const PiTextWarning = (props: ThemeContextType) => css`
  ${CommonFont(props)};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${props.warning};
`
