import { Field } from 'formik'
import PiInput from '../input'
import { InputProps } from '../input/input'

export default function InputForm({ onChange, ...formField }: InputProps) {
  // const showSuccess = formField.showSuccess ? 'success' : ''
  const handleValueChange: any = (e: any) => {
    if (onChange) {
      onChange(e)
    }
  }

  function formatPhoneNumbers(value: any) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value
    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '')
    // phoneNumberLength is used to know when to
    // apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length
    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior
    // that occurs if you  format the area code to early
    if (phoneNumberLength < 4) return phoneNumber
    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }

  return (
    <Field name={formField.name}>
      {({ field, form, meta }: any) => (
        <PiInput
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
          onChange={e => {
            handleValueChange(e)
            if (formField.type === 'phone_number') {
              const formattedPhoneNumber = formatPhoneNumbers(e.target.value)
              console.log(formattedPhoneNumber)
              form.setFieldValue(e.target.name, formattedPhoneNumber)
            } else {
              form.setFieldValue(e.target.name, e.target.value)
            }
          }}
          onKeyPress={(e: any) => {
            const key = e.charCode ? e.charCode : e.keyCode
            console.log(key)
            if ((key === 32 || key === 46 || key === 101) && formField.type === 'number') {
              e.preventDefault()
              return false
            }
            if (formField.type === 'string') {
              const t = e.target.value
              e.target.value =
                t.indexOf('.') >= 0 ? t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), 2) : t
              return true
            }
            return true
          }}
          label={formField.label}
          type={formField.type}
          placeholder={formField.placeholder}
          // className={meta.touched && meta.error ? 'error' : showSuccess}
          helpText={meta.touched && meta.error ? meta.error : ''}
          isDisabled={formField.isDisabled}
          maxLength={formField.maxLength}
          isMandatory={formField.isMandatory}
        />
      )}
    </Field>
  )
}
