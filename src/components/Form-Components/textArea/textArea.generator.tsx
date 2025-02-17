/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react'
import AtlasTextArea from '@atlaskit/textarea'
import { TextAreaProps } from './textArea'
import TextAreaClass from './textArea.css'
import PiThemeContext from '../../../core/globalVariables/themeContext'
import Typography from '../../typography'
/**
 *
 * @param props as  TextAreaProps
 * @returns Atlaskit Textarea template
 */
function AtlasKitTemplate({ label, helpText, isMandatory, ...props }: TextAreaProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={TextAreaClass(theme)}>
      <div className="select-label">
        {/* {label && <PiTypography component='label'>{label}</PiTypography>} */}
        {label && (
          <div className="field-label-div">
            <Typography component="label">{label}</Typography>
            {isMandatory && <span className="mandatory-star">*</span>}
          </div>
        )}
      </div>
      <AtlasTextArea {...props} />
      {helpText && <span className="form-error-msg">{helpText}</span>}
    </div>
  )
}
/**
 *
 * @param props as  TextAreaProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export default function generateTextAreaTemplate({ ...props }: TextAreaProps) {
  return AtlasKitTemplate(props)
}
