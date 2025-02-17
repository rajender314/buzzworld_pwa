import * as Yup from "yup";

export const ApprovalTenkValidationsSchema = Yup.object({
  competitions: Yup.string()
    .required("Please Enter Competition")
    .trim()
    .nullable(),
  budgetry_type: Yup.object().required("Please Select Type").nullable(),
  budgetry_amount: Yup.string()
    .required("Please Enter Budgetary Amount")
    .matches(/^\d*(\.\d{0,2})?$/gm, "Please Enter Valid Number")
    .matches(/^(?![,.0]*$)/gm, "Price Cannot be Zero")
    .nullable(),
  key_decision_maker: Yup.string()
    .required("Please Enter Key Decision Maker")
    .trim()
    .nullable(),
});
