import React from 'react'
import { Field } from 'formik'
import PiRadioGroup from '../radioGroup'
import { PiRadioGroupProps } from '../radioGroup/radioGroup'

export default function PiRadioForm({
  onChange,
  options,
  ...formField
}: PiRadioGroupProps) {
  return (
    <Field name={formField.name}>
      {({ field, form: { setFieldValue }, meta }: any) => {
        const handleValueChange = (e: any) => {
          setFieldValue(field.name, e.target.value)
          if (onChange) {
            onChange(e)
          }
        }
        return (
          <PiRadioGroup
            {...field}
            label={formField.label}
            value={field.value}
            options={options}
            onChange={handleValueChange}
            helpText={meta.touched && meta.error ? meta.error : ''}
            isDisabled={formField.isDisabled}
          />
        )
      }}
    </Field>
  )
}
