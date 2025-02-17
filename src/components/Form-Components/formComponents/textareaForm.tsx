import React from 'react'
import { Field } from 'formik'
import PiTextArea from '../textArea'
import { TextAreaProps } from '../textArea/textArea'

export default function TextareaForm({
  onChange,
  ...formField
}: TextAreaProps) {
  const handleValueChange: any = (e: any) => {
    if (onChange) {
      onChange(e)
    }
  }
  return (
    <Field name={formField.name}>
      {({ field, form, meta }: any) => (
        <PiTextArea
          {...field}
          onChange={(e) => {
            handleValueChange(e)
            form.setFieldValue(e.target.name, e.target.value)
          }}
          value={field.value}
          defaultValue={field.defaultValue}
          label={formField.label}
          placeholder={formField.placeholder}
          helpText={meta.touched && meta.error ? meta.error : ''}
          isDisabled={formField.isDisabled}
          maxLength={formField.maxLength}
          isMandatory={formField.isMandatory}
        />
      )}
    </Field>
  )
}
