import * as Yup from "yup";

export const ApprovalTwentykValidationsSchema = Yup.object({
  timeline: Yup.object().required("Please Select Timeline").nullable(),
  pain: Yup.string().required("Please Enter Pain").trim().nullable(),
  decision_making_process: Yup.string()
    .required("Please Enter Decision Making Process")
    .trim()
    .nullable(),
});
