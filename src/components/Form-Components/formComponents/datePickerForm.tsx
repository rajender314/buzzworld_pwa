import { Field } from 'formik'
import moment from 'moment'
import PiDatePicker from '../datepicker'
import { PiDatePickerProps } from '../datepicker/datePicker'

export default function PiDatepickerForm(formField: PiDatePickerProps) {
  const { name, onChange, label, placeholder, minDate, maxDate, isMandatory, isDisabled } =
    formField
  return (
    <Field name={name}>
      {({ field, form: { setFieldValue }, meta }: any) => {
        const handleValueChange = (e: any) => {
          console.log(moment(e).isBefore(moment(new Date()).format('YYYY-MM-DD')))
          const dateValid = moment(e).isBefore(moment(new Date()).format('YYYY-MM-DD'))
          if (dateValid === true) {
            return
          }
          setFieldValue(field.name, e)
          // formField.onChange(e)
          if (onChange) {
            onChange(e)
          }
        }
        return (
          <PiDatePicker
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            label={label}
            placeholder={placeholder}
            minDate={minDate}
            maxDate={maxDate}
            onChange={handleValueChange}
            value={field.value}
            defaultValue={field.defaultValue}
            helpText={meta.touched && meta.error ? meta.error : ''}
            isMandatory={isMandatory}
            isDisabled={isDisabled}
            onKeyPress={(e: any) => {
              const key = e.charCode ? e.charCode : e.keyCode
              console.log(key)
              e.target.value = ''
              // if ((key === 46 || key === 101) && formField.type === 'number') {
              //  e.preventDefault()
              //  return false
              // } else if (formField.type === 'string') {
              //  var t = e.target.value
              //  e.target.value =
              //    t.indexOf('.') >= 0
              //      ? t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), 2)
              //      : t
              //  return true
              // } else {
              //  return true
              // }
            }}
          />
        )
      }}
    </Field>
  )
}
