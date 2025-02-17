import { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import {
  PiInputForm,
  PiSelectForm,
} from "../../Form-Components/formComponents";
import {
  FormContainer,
  FormBody,
  Footer,
  SideDrawerContainer,
} from "./ten-k-Approval-form-components";
import Button from "../../Form-Components/button";
import EndpointUrl from "../../../core/apiEndpoints/endPoints";
import { triggerApi } from "../../../services";
import { ApiResponse } from "../../../services/schema/schema";
import { getQuoteApprovalFormData } from "../Quote-helpers/quote-helpers";
import PiSpinner from "../../spinner";
import { SpinnerDiv } from "../Quote-detail-view-content/Quote-notes/quote-notes-components";
import { ApprovalTenkValidationsSchema } from "../Approval-questions-validation/Tenk-Approval-validations-schema";
import { TostContainer } from "../../ToastNotification/ToastNotification.component";
import ToastNotification from "../../ToastNotification";

type Props = {
  displayFields?: any;
  approvalInputData?: any;
  sendModelData: (e: any) => {};
  sendQnLabel: any;
  saveQuestionsList?: any;
  quoteDetails?: any;
  sendQuoteapproveaction?: any;
};

export default function TenkApprovalForm({
  approvalInputData,
  displayFields,
  sendModelData,
  sendQnLabel,
  saveQuestionsList,
  quoteDetails,
  sendQuoteapproveaction,
}: Props) {
  const approvalName = "10k+ Questions";
  const [loading, setLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({
    budgetry_type: "",
    budgetry_amount: "",
    key_decision_maker: "",
    competitions: "",
  });
  const [budgetryList, setBudgetryList] = useState([]);
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

  const { id }: any = useParams();
  useEffect(() => {
    (async () => {
      const data: any = await getQuoteApprovalFormData(
        "10k_quote_approval",
        approvalInputData
      );
      setApprovalFormDataById(data);
      if (
        approvalInputData &&
        approvalInputData.eventFrom === "quote" &&
        approvalInputData.quoteInfo
      ) {
        initialValues.key_decision_maker = approvalInputData.quoteInfo
          .quote_requested_by
          ? approvalInputData.quoteInfo.quote_requested_by.label
          : "";
      }
      if (
        data &&
        approvalInputData &&
        approvalInputData.eventFrom === "quote"
      ) {
        setBudgetryList(data.dropdowns.type);
        if (displayFields && displayFields.values) {
          initialValues.budgetry_amount =
            displayFields.values.budgetry_amount;
          initialValues.budgetry_type = displayFields.values.budgetry_type;
          initialValues.key_decision_maker =
            displayFields.values.key_decision_maker;
          initialValues.competitions = displayFields.values.competitions;
          setInitialValues(initialValues);
        }
        sendQnLabel({ qnLabel: approvalName });

        setLoading(false);
      } else if (data && !approvalInputData) {
        setBudgetryList(data.dropdowns.type);
        if (data && data.values) {
          initialValues.budgetry_amount = data.values.budgetry_amount;
          initialValues.budgetry_type = data.values.budgetry_type;
          initialValues.key_decision_maker = data.values.key_decision_maker;
          initialValues.competitions = data.values.competitions;
          setInitialValues(initialValues);
        }
        sendQnLabel({ qnLabel: approvalName });

        setLoading(false);
      }
    })();
  }, [displayFields, initialValues]);

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

  function handleRef(e: any) {
    formik.current = e;
  }

  function handleSubmit(data: any) {
    if (approvalInputData && approvalInputData.eventFrom === "quote") {
      if (btnLabel === "Save" || btnLabel === "Save & Next") {
        submit10kApproval(data, "approved");
      } else {
        setShowApprovalPopup(true);
        setConfirmText(
          "Are you sure you want to submit this quote for approval ?"
        );
        setSecondaryBtnlabel("Decline");
      }
    }
  }
  function submit10kApproval(data: any, type: string) {
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
            if (saveQuestionsList && saveQuestionsList.length === 1) {
              setBtnLabel("Approve");
            } else {
              setBtnLabel("Save & Next");
              sendModelData({ success: true, formType: "10k" });
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
        setLoading(false);
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
        "Are you sure you want to proceed with rejecting this quote ?"
      );
    }
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
  const onClosePopup = () => {
    setShowApprovalPopup(false);
  };
  return (
    <SideDrawerContainer>
        <FormContainer>
          <Formik
            validationSchema={ApprovalTenkValidationsSchema}
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

                    <PiSelectForm
                      label="Type"
                      libraryType="atalskit"
                      name="budgetry_type"
                      placeholder="Select Type"
                      options={budgetryList}
                      classNamePrefix="react-select"
                      isMandatory
                      isClearable
                    />

                    <PiInputForm
                      name="competitions"
                      label="Competition"
                      libraryType="atalskit"
                      isMandatory
                      placeholder="Enter Competition"
                    />
                    <PiInputForm
                      name="budgetry_amount"
                      label="Budgetry Amount"
                      libraryType="atalskit"
                      isMandatory
                      placeholder="Enter Budgetry Amount"
                    />
                    <PiInputForm
                      name="key_decision_maker"
                      label="Key Decision Maker"
                      libraryType="atalskit"
                      isMandatory
                      placeholder="Enter Key Decision Maker"
                    />
                  </FormBody>
                  <Footer>
                    <Button
                      appearance="primary"
                      label={
                        saveQuestionsList && saveQuestionsList.length > 1
                          ? "Save & Next"
                          : btnLabel
                      }
                      libraryType="atalskit"
                      onClick={formik.handleSubmit}
                      isDisabled={loading}
                    />
                  </Footer>
                  {/* {showPopup && (
                    <TostContainer>
                      <ToastNotification
                        onCancel={onCancel}
                        onApprove={onApprove}
                        title={"Approval Questions"}
                        content={toastMsg}
                        isToastFooter={false}
                      />
                    </TostContainer>
                  )} */}
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
