import { Field } from 'formik'
import Textfield from '@atlaskit/textfield'
import Typography from '../../typography'
import { InputProps } from '../input/input'

export default function PiIconInputForm({ onChange, ...formField }: InputProps) {
  // const showSuccess = formField.showSuccess ? 'success' : ''
  const handleValueChange: any = (e: any) => {
    if (onChange) {
      onChange(e)
    }
  }
  return (
    <Field name={formField.name}>
      {({ field, form, meta }: any) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* {formField.label && (
            <PiTypography component='label'>{formField.label}</PiTypography>
          )} */}
          <div className="select-label">
            {/* {formField.label && (
              <PiTypography component='label'>{formField.label}</PiTypography>
            )} */}
            {formField.label && (
              <div className="field-label-div" style={{ display: 'flex' }}>
                <Typography component="label">{formField.label}</Typography>
                {formField.isMandatory && (
                  <span className="mandatory-star" style={{ color: 'red', paddingLeft: '4px' }}>
                    *
                  </span>
                )}
              </div>
            )}
          </div>
          <Textfield
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            onChange={(e: any) => {
              handleValueChange(e)
              form.setFieldValue(e.target.name, e.target.value)
            }}
            onKeyPress={(e: any) => {
              const key = e.charCode ? e.charCode : e.keyCode
              console.log(key)
              if ((key === 32 || key === 44) && formField.type === 'string') {
                e.preventDefault()
                return false
              }
              if ((key === 32 || key === 46 || key === 101) && formField.type === 'number') {
                e.preventDefault()
                return false
              }
              if (formField.type === 'string') {
                const t = e.target.value
                if (key !== 37 && key !== 39 && e.target.selectionStart > t.indexOf('.')) {
                  e.target.value =
                    t.indexOf('.') > 0
                      ? t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), 2)
                      : t
                  return true
                }
                return true
              }
              return true
            }}
            onKeyUp={() => {
              // var key = e.charCode ? e.charCode : e.keyCode
              // if (formField.type === 'string') {
              //  if (key === 37 || key === 39) {
              //    const input: any = e.target
              //    const end: any = e.target.value.length
              //    input.setSelectionRange(end, end)
              //    input.focus()
              //  }
              // }
            }}
            onKeyDown={() => {
              // var key = e.charCode ? e.charCode : e.keyCode
              // if (formField.type === 'string') {
              //  if (key === 37 || key === 39) {
              //    const input: any = e.target
              //    const end: any = e.target.value.length
              //    input.setSelectionRange(end, end)
              //    input.focus()
              //  }
              // }
            }}
            elemBeforeInput={formField.elemBeforeInput}
            label={formField.label}
            type={formField.type}
            placeholder={formField.placeholder}
            // className={meta.touched && meta.error ? 'error' : showSuccess}
            // helpText={meta.touched && meta.error ? meta.error : ''}
            isDisabled={formField.isDisabled}
            maxLength={formField.maxLength}
            isMandatory={formField.isMandatory}
            onClick={(e: any) => {
              if (formField.type === 'string') {
                const input: any = e.target
                const end: any = e.target.value.length
                input.setSelectionRange(end, end)
                input.focus()
              }
            }}
          />
          <small className="validation-error">{meta.touched && meta.error ? meta.error : ''}</small>
        </div>
      )}
    </Field>
  )
}
