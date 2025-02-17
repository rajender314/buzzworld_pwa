import { Field } from 'formik'
import PiSelect from '../select'
import { SelectProps } from '../select/select'

export default function SelectForm({ onChange, options, ...formField }: SelectProps) {
  return (
    <Field name={formField.name}>
      {({ field, form: { setFieldValue }, meta }: any) => {
        const handleValueChange: any = (e: any, actionMeta: any) => {
          setFieldValue(field.name, e)
          if (onChange) {
            onChange(e, actionMeta)
          }
        }
        return (
          <PiSelect
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            name={field.name}
            label={formField.label}
            placeholder={formField.placeholder}
            options={options}
            onChange={handleValueChange}
            value={field.value}
            defaultValue={field.defaultValue}
            helpText={!field.value && meta.error ? meta.error : ''}
            isMulti={formField.isMulti}
            isDisabled={formField.isDisabled}
            isSearchable={formField.isSearchable}
            isClearable={formField.isClearable}
            onInputChange={formField.onInputChange}
            onFocus={formField.onFocus}
            classNamePrefix={formField.classNamePrefix}
            isMandatory={formField.isMandatory}
            formatOptionLabel={formField.formatOptionLabel}
            noOptionsMessage={() => formField.noOptionsMessage || `No ${formField.label} Found`}
          />
        )
      }}
    </Field>
  )
}
