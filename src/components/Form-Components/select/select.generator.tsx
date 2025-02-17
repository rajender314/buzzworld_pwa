import React, { useContext } from "react";
import Select from "@atlaskit/select";
import { SelectProps } from "./select";
import PiThemeContext from "../../../core/globalVariables/themeContext";
import { SelectClass } from "./select.css";
import Typography from "../../typography";

/**
 *
 * @param props as  SelectProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateSelectTemplate({ ...props }: SelectProps) {
  return AtlasKitTemplate(props);
}

/**
 *
 * @param props as  SelectProps
 * @returns Atlaskit Select template
 */
function AtlasKitTemplate({
  helpText,
  label,
  isMandatory,
  ...props
}: SelectProps) {
  const theme = useContext(PiThemeContext);
  return (
    <div className={SelectClass(theme)}>
      <div className="pi-select-wrapper">
        <div className="select-label">
          {label && (
            <div className="field-label-div">
              <Typography component="label">{label}</Typography>
              {isMandatory && <span className="mandatory-star">*</span>}
            </div>
          )}
        </div>
        <Select
          classNamePrefix={props.classNamePrefix || "react-select"}
          noOptionsMessage={() => props.noOptionsMessage
              ? props.noOptionsMessage
              : `No ${label} Found`}
          // className='select-input'
          {...(props as any)}
        />
        {helpText && <span className="form-error-msg">{helpText}</span>}
      </div>
    </div>
  );
}
