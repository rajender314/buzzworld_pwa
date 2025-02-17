/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react'
import AtlasTextfield, { TextFieldProps } from '@atlaskit/textfield'
import { InputProps } from './input'
import InputClass from './input.css'
import PiThemeContext from '../../../core/globalVariables/themeContext'
import Typography from '../../typography'
/**
 *
 * @param props as  InputProps
 * @returns Atlaskit TextField template
 */
function AtlasKitTemplate({ label, helpText, isMandatory, ...props }: InputProps) {
  const theme = useContext(PiThemeContext)
  console.log(isMandatory)

  return (
    <div className={InputClass(theme)}>
      {/* {label && <PiTypography component='label'>{label}</PiTypography>} */}
      <div className="select-label">
        {label && (
          <div className="field-label-div">
            <Typography component="label">{label}</Typography>
            {isMandatory && <span className="mandatory-star">*</span>}
          </div>
        )}
      </div>
      <AtlasTextfield
        {...(props as TextFieldProps)}
        onClick={(e: any) => {
          if (props.type === 'string') {
            const input: any = e.target
            const end: any = e.target.value.length
            input.setSelectionRange(end, end)
            input.focus()
          }
        }}
      />
      {helpText && <div>{helpText}</div>}
    </div>
  )
}
/**
 *
 * @param props as  InputProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export default function generateInputTemplate({ ...props }: InputProps) {
  return AtlasKitTemplate(props)
}
