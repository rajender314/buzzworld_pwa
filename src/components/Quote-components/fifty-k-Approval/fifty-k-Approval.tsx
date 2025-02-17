import { useEffect, useRef, useState } from "react";
import { Field, Formik } from "formik";
import { useParams } from "react-router-dom";
import { PiTextareaForm } from "../../Form-Components/formComponents";
import Button from "../../Form-Components/button";
import {
  AsyncLabel,
  Footer,
  FormBody,
  FormContainer,
  SideDrawerContainer,
} from "../ten-k-Approval/ten-k-Approval-form-components";
import ToastNotification from "../../ToastNotification";
import { TostContainer } from "../../ToastNotification/ToastNotification.component";
import PiRadioGroup from "../../Form-Components/radioGroup";
import { FormFieldContainer } from "./fifty-k-Approval-components";
import { getQuoteApprovalFormData } from "../Quote-helpers/quote-helpers";
import EndpointUrl from "../../../core/apiEndpoints/endPoints";
import { triggerApi } from "../../../services";
import { ApiResponse } from "../../../services/schema/schema";
import { SpinnerDiv } from "../Quote-detail-view-content/Quote-notes/quote-notes-components";
import PiSpinner from "../../spinner";

type Props = {
  displayFields?: any;
  approvalInputData?: any;
  sendModelData: (e: any) => {};
  sendQnLabel: any;
  saveQuestionsList?: any;
  quoteDetails?: any;
  sendQuoteapproveaction?: any;
};

export default function FiftykApproval({
  approvalInputData,
  displayFields,
  sendModelData,
  sendQnLabel,
  saveQuestionsList,
  quoteDetails,
  sendQuoteapproveaction,
}: Props) {
  const { id }: any = useParams();
  const approvalName = "50k+ Questions";
  const [loading, setLoading] = useState(true);
  const formik = useRef<any>(null);
  const [approvalFormDataById, setApprovalFormDataById]: any = useState();
  const [btnLabel, setBtnLabel] = useState<string>("Save");
  const [showApprovalPopup, setShowApprovalPopup] = useState<boolean>(false);
  const [secondaryBtnlabelbel, setSecondaryBtnlabel] =
    useState<string>("Cancel");
  const [toastBtnlabel, setToastbtnlabel] = useState<string>("Approve");
  const [submitAppearance, setSubmitappearance] = useState<string>("primary");
  const [toastTitle, setToasttitle] = useState<string>("Confirmation");
  const [confirmText, setConfirmText] = useState<any>("");
  const [showtoastFooter, setShowToastFooter] = useState<boolean>(true);
  const [toastloading, setToastloading] = useState<boolean>(false);
  const [decline_comments, setdecline_comments] = useState<string>("");
  const [initialValues, setInitialValues] = useState({
    last_Look: "no",
    current_customer: "no",
    special_Pricing: "no",
    programming_needed: "no",
    reasons: "",
  });
  const lastLook = [
    {
      label: "Yes",
      value: "yes",
    },
    {
      label: "No",
      value: "no",
    },
  ];

  useEffect(() => {
    (async () => {
      const data: any = await getQuoteApprovalFormData(
        "50k_quote_approval",
        approvalInputData
      );
      sendQnLabel({ qnLabel: approvalName });

      setApprovalFormDataById(data);
      if (
        data &&
        approvalInputData &&
        approvalInputData.eventFrom === "quote"
      ) {
        if (displayFields && displayFields.values) {
          initialValues.last_Look = displayFields.values.last_Look;
          initialValues.current_customer =
            displayFields.values.current_customer;
          initialValues.special_Pricing =
            displayFields.values.special_Pricing;
          initialValues.programming_needed =
            displayFields.values.programming_needed;
          initialValues.reasons = displayFields.values.reasons;
          setInitialValues(initialValues);
        }

        setLoading(false);
      } else if (data && !approvalInputData) {
        if (data && data.values) {
          initialValues.last_Look = data.values.last_Look;
          initialValues.current_customer = data.values.current_customer;
          initialValues.special_Pricing = data.values.special_Pricing;
          initialValues.programming_needed = data.values.programming_needed;
          initialValues.reasons = data.values.reasons;
          setInitialValues(initialValues);
        }

        setLoading(false);
      }
    })();
  }, [displayFields]);

  const selecPicked = (e: any) => {
    formik.current.setFieldValue("last_Look", e.target.value);
  };
  const selectcurrent = (e: any) => {
    formik.current.setFieldValue("current_customer", e.target.value);
  };
  const selectPricing = (e: any) => {
    formik.current.setFieldValue("special_Pricing", e.target.value);
  };
  const selectProgramming = (e: any) => {
    formik.current.setFieldValue("programming_needed", e.target.value);
  };
  function handleRef(e: any) {
    formik.current = e;
  }

  function handleSubmit(data: any) {
    if (approvalInputData && approvalInputData.eventFrom === "quote") {
      if (btnLabel === "Save") {
        submit50kApproval(data, "approved");
      } else {
        setShowApprovalPopup(true);
        setConfirmText(
          "Are you sure you want to submit this quote for approval ?"
        );
        setSecondaryBtnlabel("Decline");
      }
    }
  }
  const directApprove = (type?: string) => {
    setToastloading(true);
    const param = {
      type: type || quoteDetails.label_code,
      quote_id: id || "",
      decline_comments: decline_comments || "",
    };
    const apiObject = {
      payload: param,
      method: "POST",
      apiUrl: `${EndpointUrl.QuoteApproval}`,
      headers: {},
    };
    triggerApi(apiObject)
      .then((response: ApiResponse) => {
        if (response.result.success) {
          if (type && type === "rejected") {
            setShowToastFooter(false);
            setToasttitle("Quote Rejected");
            setConfirmText(
              `Order ID:${
                quoteDetails && quoteDetails.quote_no
                  ? quoteDetails.quote_no
                  : "---"
              }`
            );
            setToastloading(false);
            setTimeout(() => {
              setShowApprovalPopup(false);
              sendQuoteapproveaction({ isApproved: true });
            }, 2000);
          } else {
            setShowToastFooter(false);
            setToasttitle("Quote Approved successfully!");
            setConfirmText(
              `Order ID:${
                quoteDetails && quoteDetails.quote_no
                  ? quoteDetails.quote_no
                  : "---"
              }`
            );
            setToastloading(false);

            setTimeout(() => {
              setShowApprovalPopup(false);
              sendQuoteapproveaction({ isApproved: true });
            }, 2000);
          }
        } else {
          setTimeout(() => {
            setToastloading(false);
          }, 4000);
        }
      })
      .catch((err: string) => {
        console.log(err);
        setToastloading(false);
      });
  };
  function submit50kApproval(data: any, type: string) {
    setLoading(true);
    const param = {
      quote_form_values: data,
      type,
      quote_form_id: approvalFormDataById.id,
      quote_id: approvalInputData.quote_id,
    };
    const apiObject = {
      payload: param,
      method: "POST",
      apiUrl: displayFields
        ? EndpointUrl.QuoteInternalApprovalQues
        : `${EndpointUrl.QuoteApproval}`,
      headers: {},
    };
    triggerApi(apiObject)
      .then((response: ApiResponse) => {
        if (response.result.success) {
          if (approvalInputData && approvalInputData.eventFrom === "quote") {
            if (saveQuestionsList && saveQuestionsList.length === 3) {
              setBtnLabel("Approve");
            } else {
              setBtnLabel("Save");
            }
            setLoading(false);
          }
        } else {
          setConfirmText(response.result.data);
          setLoading(false);
        }
      })
      .catch((err: string) => {
        console.log(err);
      });
  }

  const onCancel = () => {
    if (secondaryBtnlabelbel === "Cancel") {
      setShowApprovalPopup(false);
      setToastbtnlabel("Approve");
      setSubmitappearance("primary");
      setToasttitle("Confirmation");
    } else {
      setSecondaryBtnlabel("Cancel");
      setToastbtnlabel("Reject");
      setSubmitappearance("reject");
      setToasttitle("Reject?");
      setConfirmText(
        "Are you sure you want to proceed with rejecting this quote ? "
      );
    }
  };
  const onClosePopup = () => {
    setShowApprovalPopup(false);
  };
  const onApprove = () => {
    if (toastBtnlabel !== "Reject") {
      directApprove();
    } else if (toastBtnlabel === "Reject") {
      directApprove("rejected");
    }
  };
  const getDeclinecomments = (e: any) => {
    setdecline_comments(e && e.decline_comments ? e.decline_comments : "");
  };
  return (
    <SideDrawerContainer>
        <FormContainer>
          <Formik
              validationSchema={null}
              onSubmit={handleSubmit}
              initialValues={initialValues}
              innerRef={handleRef}
            >
              {({ ...formik }: any) => (
                  <>
                    <FormBody className={loading ? "opacity-on-load" : ""}>
                      {loading && (
                        <SpinnerDiv className="opacity-loader">
                          <PiSpinner
                            color="primary"
                            size={50}
                            libraryType="atalskit"
                          />
                        </SpinnerDiv>
                      )}
                      <FormFieldContainer>
                        <AsyncLabel
                          htmlFor="async-select-example"
                          className="css-re7y6x"
                        >
                          Last Look
                        </AsyncLabel>
                        <Field name="last_Look">
                          {({ field, form, meta }: any) => (
                            <PiRadioGroup
                                libraryType="atalskit"
                                name="last_Look"
                                onChange={selecPicked}
                                options={lastLook}
                                value={field.value}
                                isDisabled={false}
                              />
                          )}
                        </Field>
                      </FormFieldContainer>

                      <FormFieldContainer>
                        <AsyncLabel
                          htmlFor="async-select-example"
                          className="css-re7y6x"
                        >
                          Current Customer
                        </AsyncLabel>
                        <Field name="current_customer">
                          {({ field, form, meta }: any) => (
                            <PiRadioGroup
                                libraryType="atalskit"
                                name="current_customer"
                                onChange={selectcurrent}
                                options={[
                                  {
                                    label: "Yes",
                                    value: "yes",
                                  },
                                  {
                                    label: "No",
                                    value: "no",
                                  },
                                ]}
                                value={field.value}
                                isDisabled={false}
                              />
                          )}
                        </Field>
                      </FormFieldContainer>
                      <FormFieldContainer>
                        <AsyncLabel
                          htmlFor="async-select-example"
                          className="css-re7y6x"
                        >
                          Non Standard Pricing
                        </AsyncLabel>
                        <Field name="special_Pricing">
                          {({ field, form, meta }: any) => (
                            <PiRadioGroup
                                libraryType="atalskit"
                                name="special_Pricing"
                                onChange={selectPricing}
                                options={[
                                  {
                                    label: "Yes",
                                    value: "yes",
                                  },
                                  {
                                    label: "No",
                                    value: "no",
                                  },
                                ]}
                                value={field.value}
                                isDisabled={false}
                              />
                          )}
                        </Field>
                      </FormFieldContainer>

                      <FormFieldContainer>
                        <AsyncLabel
                          htmlFor="async-select-example"
                          className="css-re7y6x"
                        >
                          Programming Needed
                        </AsyncLabel>
                        <Field name="programming_needed">
                          {({ field, form, meta }: any) => (
                            <PiRadioGroup
                                libraryType="atalskit"
                                name="programming_needed"
                                onChange={selectProgramming}
                                options={[
                                  {
                                    label: "Yes",
                                    value: "yes",
                                  },
                                  {
                                    label: "No",
                                    value: "no",
                                  },
                                ]}
                                value={field.value}
                                isDisabled={false}
                              />
                          )}
                        </Field>
                      </FormFieldContainer>
                      <FormFieldContainer>
                        <PiTextareaForm
                          name="reasons"
                          label="Reasons"
                          libraryType="atalskit"
                          placeholder="Enter Reasons"
                          maxLength={255}
                          isDisabled={false}
                        />
                      </FormFieldContainer>
                    </FormBody>

                    <Footer className="fifty-k-form-footer">
                      <Button
                        appearance="primary"
                        label={btnLabel}
                        libraryType="atalskit"
                        onClick={formik.handleSubmit}
                        isDisabled={loading}
                      />
                    </Footer>

                    {showApprovalPopup && (
                      <TostContainer>
                        <ToastNotification
                          onCancel={onCancel}
                          onApprove={onApprove}
                          onClose={onClosePopup}
                          title={toastTitle}
                          content={confirmText}
                          submitappearance={submitAppearance}
                          submitButtonlabel={toastBtnlabel}
                          secondaryButtonlabel={secondaryBtnlabelbel}
                          isToastFooter={showtoastFooter}
                          isToastloading={toastloading}
                          sendRejectnotes={getDeclinecomments}
                        />
                      </TostContainer>
                    )}
                  </>
                )}
            </Formik>
        </FormContainer>
      </SideDrawerContainer>
  );
}
