import * as Yup from "yup";

export const ApprovalValidationSchema = Yup.object().shape({
  competitions: Yup.string()
    .required("Please Enter Competition")
    .trim()
    .nullable(),
  budgetry_type: Yup.object().required("Please Select Type").nullable(),
  // budgetry_amount: Yup.number().required("Please enter Budgetary Amount").min(1, 'Budgetary Amount cannot be zero').nullable(),
  budgetry_amount: Yup.string()
    .required("Please Enter Budgetary Amount")
    .matches(/^\d*(\.\d{0,2})?$/gm, "Please Enter Valid Number")
    .nullable(),
  key_decision_maker: Yup.string()
    .required("Please Enter Key Decision Maker")
    .trim()
    .nullable(),
});
