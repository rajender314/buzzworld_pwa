import React, { useContext } from 'react'
import PiThemeContext from '../../core/globalVariables/themeContext'
import {
  PiTextH1,
  PiTextH2,
  PiTextH3,
  PiTextH4,
  PiTextH5,
  PiTextH6,
  PiTextP,
  PiTextPBold,
  PiTextTH,
  PiTextCaption,
  PiTextS,
  PiTextXS,
  PiTextDefault,
  PiTextLabel,
  PiTextSuccess,
  PiTextError,
  PiTextWarning,
} from './typography.css'

type PiComponentType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'pbold'
  | 'th'
  | 'small'
  | 'xs'
  | 'caption'
  | 'label'
  | 'success'
  | 'error'
  | 'warning'
  | 'default'
export class TypographyProps {
  component?: PiComponentType

  className?: string
}
function GenerateTag(component: PiComponentType) {
  const theme = useContext(PiThemeContext)
  const defaultTags = {
    h1: {
      tag: 'h1',
      class: PiTextH1(theme),
    },
    h2: {
      tag: 'h2',
      class: PiTextH2(theme),
    },
    h3: {
      tag: 'h3',
      class: PiTextH3(theme),
    },
    h4: {
      tag: 'h4',
      class: PiTextH4(theme),
    },
    h5: {
      tag: 'h5',
      class: PiTextH5(theme),
    },
    h6: {
      tag: 'h6',
      class: PiTextH6(theme),
    },
    p: {
      tag: 'p',
      class: PiTextP(theme),
    },
    pbold: {
      tag: 'p',
      class: PiTextPBold(theme),
    },
    th: {
      tag: 'p',
      class: PiTextTH(theme),
    },
    small: {
      tag: 'small',
      class: PiTextS(theme),
    },
    xs: {
      tag: 'small',
      class: PiTextXS(theme),
    },
    caption: {
      tag: 'small',
      class: PiTextCaption(theme),
    },
    label: {
      tag: 'label',
      class: PiTextLabel(theme),
    },
    success: {
      tag: 'label',
      class: PiTextSuccess(theme),
    },
    error: {
      tag: 'label',
      class: PiTextError(theme),
    },
    warning: {
      tag: 'label',
      class: PiTextWarning(theme),
    },
    default: {
      tag: 'span',
      class: PiTextDefault(theme),
    },
  }
  return defaultTags[component]
}
function Typography(props: React.PropsWithChildren<TypographyProps>) {
  const { component, children } = props
  const template = GenerateTag(component || 'default')
  return React.createElement(template.tag, { className: template.class }, `${children}`)
}

export default React.memo(Typography)
