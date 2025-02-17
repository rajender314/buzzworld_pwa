import React from 'react'

export class ThemeContextType {
  // primaryColor?= '#e3eaf6'
  primaryColor? = '#D0DAEC'

  rejectColor? = '#AF1515'

  inputHoverBG? = '#f2f7ff'

  inputHoverBorder? = '#d0daec'

  white? = '#ffffff'

  inputFocusBorder? = '#124eb0'

  error? = '#e36f69'

  success? = '#00a67e'

  warning? = '#A26A11'

  textColor? = '#6D7992'

  infoBGColor? = '#E3F2FD'

  infoColor? = '#124eb0'

  warningColor? = '#A26A11'

  warningBGColor? = '#FFB337'

  successBGColor? = '#CCEDE5'

  successColor? = '#19836A'

  dangerBGColor? = '#F8DBD9'

  dangerColor? = '#AF1515'

  tabListBorder? = '#a5abb31a'

  tabHeaderBG? = '#F7FAFF'

  tabColor? = '#6D7992'

  tabBorder? = '#124EB0'

  // primaryBG?= '#134C85'
  primaryBG? = '#124EB0'

  // primaryHoverBG?= '#1976D2'
  primaryHoverBG? = '#1D60CC'

  // primaryFocusBG?= '#2196F3'
  primaryFocusBG? = '#124EB0'

  // primaryVisitedBG?= '#1E88E5'
  primaryVisitedBG? = '#0F3A80'

  primaryDisabledBG? = '#f7faff'

  primaryBtnDisabledBG? = '#6b93b5'

  primaryActiveBG? = '#1E88E5'

  secondaryFocus? = '#BBDEFB'

  secondaryVisited? = '#90CAF9'

  avatarBg? = '#B6C1D6'

  breadCrumbColor? = '#8E99B2'

  secondaryActiveBg? = '#90CAF9'

  announceBGColor? = '#FFBB4B'

  toggleBGColor? = '#808491'

  warningoxBGColor? = '#FFF0D7'

  labelColor? = '#4E586D'

  lablelDescription? = '#4e586d'

  attachmentBg? = '#F7FAFF'

  passwordValide? = '#278C71'

  passwordNotValide? = '#B8BCCA'

  typographyTextColor? = '#2E374A'

  leftmenuBg? = '#f9fbff'

  leftmenuHoverBg? = '#e3eaf6'

  leftmenuHoverColor? = '#1976d2'

  fieldBgColor? = '#F7FAFF'
}
const PiThemeContext = React.createContext<ThemeContextType>(new ThemeContextType())

export const PiThemeContextProvider = PiThemeContext.Provider
export default PiThemeContext
