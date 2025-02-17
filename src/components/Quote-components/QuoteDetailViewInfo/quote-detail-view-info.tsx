import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import {
  FieldContentContainer,
  FieldLabel,
  FieldValue,
  DetailViewContainer,
  QuoteDetailViewMainContainer,
  SideDrawerW40,
  SaveApproveQuestionTabs,
  NoUserFound,
  AddressContainer,
} from "./quote-detail-view-info-components";
import {
  Footer,
  ProgressBar,
} from "../ten-k-Approval/ten-k-Approval-form-components";
import Button from "../../Form-Components/button";
import { TostContainer } from "../../ToastNotification/ToastNotification.component";
import ToastNotification from "../../ToastNotification";
import EndpointUrl from "../../../core/apiEndpoints/endPoints";
import { triggerApi } from "../../../services";
import { ApiResponse } from "../../../services/schema/schema";
import PiSideDrawer from "../../sideDrawer";
import { PiTabGroup, PiTabPanel } from "../../tabs";
import TenkApprovalForm from "../ten-k-Approval/ten-k-Approval-form";
import TwentyFiveApprovalForm from "../twanty-five-k-Approval/twanty-five-k-Approval-form";
import FiftykApproval from "../fifty-k-Approval/fifty-k-Approval";
import {
  HeaderText,
  ProfileText,
  SecondaryHeaders,
} from "../../Secondaryheader/SecondaryHeader.component";
import BackButtonIcon from "../../../assets/images/BackArrow.svg";
import PiAddress from "../../address";

type Props = {
  type: string;
  quoteInfo: string;
  sendQuoteapproveaction?: any;
  sendApprovalQns?: any;
};
export default function QuoteDetailViewInfo({
  type,
  quoteInfo,
  sendQuoteapproveaction,
  sendApprovalQns,
}: Props) {
  const [quoteDetails, setQuoteDetails] = useState<any>(quoteInfo);
  const [confirmText, setConfirmText] = useState<any>();
  const [showPopup, setShowpopup] = useState<boolean>(false);
  const [toastloading, setToastloading] = useState<boolean>(false);
  const [showtoastFooter, setShowToastFooter] = useState<boolean>(true);
  const [openApprovalQuestions, setOpenApprovalQuestions] =
    useState<boolean>(false);
  const [toastTitle, setToasttitle] = useState<string>("Confirmation ");
  const [saveQuestionsList, setSaveQuestionsList] = useState<any>([]);
  const [toastBtnlabel, setToastbtnlabel] = useState<string>("Approve");
  const [secondaryBtnlabelbel, setSecondaryBtnlabel] =
    useState<string>("Cancel");
  const [decline_comments, setdecline_comments] = useState<string>("");
  const [displayFields, setDisplayFields] = useState({
    "10k": false,
    "25k": false,
    "50k": false,
    "10kId": null,
    "25kId": null,
    "50kId": null,
    noData: true,
    values: null,
  });
  const [submitAppearance, setSubmitappearance] = useState<string>("primary");
  const [tabIndex, setTabIndex] = useState(0);
  const { id }: any = useParams();
  const [aprovalsLabel, setAprovalsLabel] = useState<string>("10k+ Questions");
  const [loading, setLoading] = useState<boolean>(false);
  const [isDisplay10k, setIsDisplay10K] = useState<boolean>(true);
  const [isDisplay25k, setIsDisplay25K] = useState<boolean>(false);
  const [isDisplay50k, setIsDisplay50K] = useState<boolean>(false);
  const [qnsStep, setQnsStep] = useState<string>("");
  const [progressBarWidth, setProgressBarWidth] = useState<string>("25%");
  const [showpopupTextArea, setShowTextArea] = useState<boolean>(false);
  useEffect(() => {
    setQuoteDetails(quoteInfo);
  }, [quoteInfo]);
  const saveQuestionsApiCalledRef = useRef(false);

  useEffect(() => {
    if (!saveQuestionsApiCalledRef.current) {
      saveQuestionsApi();
      saveQuestionsApiCalledRef.current = true;
    }
  }, []);

  const approvalInputData = {
    eventFrom: "quote",
    quote_id: id || "",
    quoteInfo,
  };

  const saveQuestionsApi = () => {
    setLoading(true);
    const apiObject = {
      payload: {},
      method: "GET",
      apiUrl: `${EndpointUrl.QuoteApprovalValues}?quote_id=${id}&sort=asc`,
      headers: {},
    };
    triggerApi(apiObject)
      .then((response: ApiResponse) => {
        if (response.result.success) {
          setSaveQuestionsList(response.result.data);

          if (response.result.data && response.result.data.length) {
            response.result.data.map((obj: any) => {
              if (obj.code === "10k_quote_approval") {
                displayFields["10k"] = true;
                displayFields["10kId"] = obj.id;
              }
              if (obj.code === "25k_quote_approval") {
                displayFields["25k"] = true;
                displayFields["25kId"] = obj.id;
              }
              if (obj.code === "50k_quote_approval") {
                displayFields["50k"] = true;
                displayFields["50kId"] = obj.id;
              }
              return obj;
            });
            displayFields.noData = false;
            sendApprovalQns({ arrovalQns: response.result.data });

            setLoading(false);
          } else {
            displayFields.noData = true;
            setLoading(false);
          }
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 4000);
        }
      })
      .catch((err: string) => {
        console.log(err);
        setLoading(false);
      });
  };

  const submitQuoteApproval = () => {
    if (
      quoteDetails.label_code === "10k_quote_approval" ||
      quoteDetails.label_code === "25k_quote_approval" ||
      quoteDetails.label_code === "50k_quote_approval"
    ) {
      saveQuestionsList &&
        saveQuestionsList.length &&
        saveQuestionsList.map((obj: any, index: number) => {
          if (
            obj.code === quoteDetails.label_code &&
            obj.is_saved &&
            quoteDetails.is_questions_saved
          ) {
            setConfirmText(
              `Are you sure you want to submit this quote for approval ?`
            );
            setSecondaryBtnlabel("Decline");
            setToastbtnlabel("Approve");
          } else if (
            (obj.code === quoteDetails.label_code && !obj.is_saved) ||
            !quoteDetails.is_questions_saved
          ) {
            setConfirmText(`Please save approval Questions before approving ?`);
            setToastbtnlabel("Open Questions");
            setSecondaryBtnlabel("Cancel");
          }

          setShowpopup(true);
          return obj;
        });
    } else if (quoteDetails.label_code === "direct_approve") {
      setConfirmText(
        `Are you sure you want to submit this quote for approval ?`
      );
      setSecondaryBtnlabel("Decline");
      setToastbtnlabel("Approve");

      setShowpopup(true);
    }
  };

  const getQuoteInfo = () => {
    // setLoading(true);
    const apiObject = {
      payload: {},
      method: "GET",
      apiUrl: `${EndpointUrl.Quote}/${id}?quote_id=${id}`,
      headers: {},
    };
    triggerApi(apiObject)
      .then(async (response: ApiResponse) => {
        if (response.result.success) {
          const {data} = response.result;
          setQuoteDetails(data);
          setLoading(false);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 4000);
        }
      })
      .catch((err: string) => {
        setTimeout(() => {
          setLoading(false);
        }, 4000);

        console.log(err);
      });
  };
  const onCancel = () => {
    if (secondaryBtnlabelbel === "Cancel") {
      setShowpopup(false);
      setToastbtnlabel("Approve");
      setSubmitappearance("primary");
      setToasttitle("Confirmation");
      setShowTextArea(false);
    } else {
      setSecondaryBtnlabel("Cancel");
      setToastbtnlabel("Reject");
      setSubmitappearance("reject");
      setToasttitle("Reject");
      setConfirmText("Are you sure you want to reject this quote ?");
      setShowTextArea(true);
    }
  };
  const onClosePopup = () => {
    setShowpopup(false);
  };
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
              `Quote Number:${
                quoteDetails && quoteDetails.quote_no
                  ? quoteDetails.quote_no
                  : "---"
              }`
            );
            setToastloading(false);
            setTimeout(() => {
              setShowpopup(false);
              sendQuoteapproveaction({ isApproved: true });
            }, 2000);
          } else {
            setShowToastFooter(false);
            setToasttitle("Quote Approved successfully!");
            setConfirmText(
              `Quote Number:${
                quoteDetails && quoteDetails.quote_no
                  ? quoteDetails.quote_no
                  : "---"
              }`
            );
            setToastloading(false);

            setTimeout(() => {
              setShowpopup(false);
              sendQuoteapproveaction({ isApproved: true });
            }, 2000);
          }
        } else {
          setTimeout(() => {
            setToastloading(true);
          }, 4000);
        }
      })
      .catch((err: string) => {
        console.log(err);
        setToastloading(false);
      });
  };

  const onApprove = () => {
    if (
      (quoteDetails.status_code === "pending_approval_10k" ||
        quoteDetails.status_code === "pending_approval_25k" ||
        quoteDetails.status_code === "pending_approval_50k" ||
        quoteDetails.status_code === "pending_approval") &&
      confirmText ===
        "Are you sure you want to submit this quote for approval ?"
    ) {
      directApprove();
    } else if (
      (quoteDetails.status_code === "pending_approval_10k" ||
        quoteDetails.status_code === "pending_approval_25k" ||
        quoteDetails.status_code === "pending_approval_50k" ||
        quoteDetails.status_code === "pending_approval") &&
      confirmText === "Please save approval Questions before approving ?"
    ) {
      if (saveQuestionsList.length) {
        if (
          saveQuestionsList &&
          saveQuestionsList.length === 2 &&
          aprovalsLabel === "10k+ Questions"
        ) {
          setQnsStep("1/2");
          setProgressBarWidth("50%");
        } else if (
          saveQuestionsList &&
          saveQuestionsList.length === 3 &&
          aprovalsLabel === "10k+ Questions"
        ) {
          setQnsStep("1/3");
          setProgressBarWidth("25%");
        }
        displayFields.values = saveQuestionsList[0].quote_form_values;
        setDisplayFields(displayFields);
        setOpenApprovalQuestions(true);
        setShowpopup(false);
        setIsDisplay10K(true);
        setLoading(true);

        for (let i = 0; i < saveQuestionsList.length; i++) {
          if (
            !saveQuestionsList[i].is_saved &&
            !quoteDetails.is_questions_saved
          ) {
            // setTabIndex(i);
            // onTabChange(i);
            break;
          }
        }
      }
    } else if (toastBtnlabel === "Reject") {
      directApprove("rejected");
    }
  };
  const onTabChange = (e: number) => {
    if (saveQuestionsList[e].is_enable) {
      displayFields.values = null;
      displayFields.values = saveQuestionsList[e].quote_form_values;
      setDisplayFields(displayFields);
      setTabIndex(e);
    }
  };
  async function triggerApprovalEvent(e: any) {
    saveQuestionsApi();

    if (
      e &&
      e.success &&
      e.formType === "10k" &&
      saveQuestionsList &&
      saveQuestionsList.length > 1
    ) {
      if (saveQuestionsList && saveQuestionsList.length === 2) {
        setQnsStep("2/2");
        setProgressBarWidth("100%");
      } else if (saveQuestionsList && saveQuestionsList.length === 3) {
        setQnsStep("2/3");
        setProgressBarWidth("50%");
      }
      setIsDisplay25K(true);
      setIsDisplay10K(false);
      setAprovalsLabel("25k+ Qusestions");
      displayFields.values = saveQuestionsList[1].quote_form_values;
      setDisplayFields(displayFields);
    } else if (
      e &&
      e.success &&
      e.formType === "25k" &&
      saveQuestionsList &&
      saveQuestionsList.length > 2
    ) {
      if (saveQuestionsList && saveQuestionsList.length === 2) {
        setQnsStep("2/3");
      } else if (saveQuestionsList && saveQuestionsList.length === 3) {
        setQnsStep("3/3");
      }
      setProgressBarWidth("100%");

      setIsDisplay50K(true);
      setAprovalsLabel("50k+ Qusestions");
      setIsDisplay25K(false);
      setIsDisplay10K(false);
      displayFields.values = saveQuestionsList[2].quote_form_values;
      setDisplayFields(displayFields);
    }
  }
  const getDeclinecomments = (e: any) => {
    setdecline_comments(e && e.decline_comments ? e.decline_comments : "");
  };

  const getQnLabel = (e: any) => {
    setAprovalsLabel(e && e.qnLabel);
    setLoading(false);
  };
  const onBack = (formType: string) => {
    saveQuestionsApi();
    getQuoteInfo();

    if (saveQuestionsList.length === 1) {
      setOpenApprovalQuestions(false);
    } else if (formType === "25k+ Questions") {
      if (saveQuestionsList && saveQuestionsList.length === 2) {
        setQnsStep("1/2");
        setProgressBarWidth("50%");
      } else if (saveQuestionsList && saveQuestionsList.length === 3) {
        setQnsStep("1/3");
        setProgressBarWidth("25%");
      }
      setIsDisplay25K(false);
      setIsDisplay10K(true);

      displayFields.values = saveQuestionsList[0].quote_form_values;
      setDisplayFields(displayFields);
      setAprovalsLabel("10k+ Questions");
    } else if (formType === "50k+ Questions") {
      setIsDisplay50K(false);
      setIsDisplay10K(false);
      setIsDisplay25K(true);
      setQnsStep("2/3");
      setProgressBarWidth("50%");

      displayFields.values = saveQuestionsList[1].quote_form_values;
      setDisplayFields(displayFields);
    } else if (formType === "10k+ Questions") {
      setOpenApprovalQuestions(false);
    }
  };
  const getApprovalAction = (e: any) => {
    sendQuoteapproveaction({ isApproved: e.isApproved });
  };
  return (
    <>
      <QuoteDetailViewMainContainer>
        <DetailViewContainer className="view-container">
          {type === "quoteInfo" && (
            <>
              <FieldContentContainer>
                <FieldLabel>Quote Number</FieldLabel>
                <FieldValue className="quote-number">
                  {quoteDetails && quoteDetails.quote_no
                    ? `#${quoteDetails.quote_no}`
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>Status</FieldLabel>

                <FieldValue
                  className="status"
                  status={
                    quoteDetails && quoteDetails.status_code
                      ? quoteDetails.status_code
                      : ""
                  }
                >
                  {quoteDetails && quoteDetails.status
                    ? quoteDetails.status
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>Quote Type </FieldLabel>
                <FieldValue>
                  {quoteDetails &&
                  quoteDetails.quote_type &&
                  quoteDetails.quote_type.label
                    ? quoteDetails.quote_type.label
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>RFQ Received Date </FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.rfq_recieved_date
                    ? moment(quoteDetails.rfq_recieved_date).format(
                        "MM-DD-YYYY     h:mm A"
                      )
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>Quote Start Date </FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.start_date
                    ? quoteDetails.start_date
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>Project Name </FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.project_name
                    ? quoteDetails.project_name
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>Account Number </FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.account_number
                    ? quoteDetails.account_number
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
              <FieldContentContainer>
                <FieldLabel>Quote Requested By</FieldLabel>
                <FieldValue>
                  {quoteDetails &&
                  quoteDetails.quote_requested_by &&
                  quoteDetails.quote_requested_by.label
                    ? quoteDetails.quote_requested_by.label
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
              <FieldContentContainer>
                <FieldLabel>Quoted By </FieldLabel>
                <FieldValue>
                  {quoteDetails &&
                  quoteDetails.quoted_by &&
                  quoteDetails.quoted_by.label
                    ? quoteDetails.quoted_by.label
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
              <FieldContentContainer>
                <FieldLabel>Waiting On </FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.waiting_on
                    ? quoteDetails.waiting_on.label
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>Owner Name </FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.owner_name
                    ? quoteDetails.owner_name
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
              <FieldContentContainer>
                <FieldLabel>Phone Number </FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.phone_number
                    ? quoteDetails.phone_number
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
              {/* <FieldContentContainer> */}
              <AddressContainer id="add">
                <FieldLabel>Customer Address</FieldLabel>
                <PiAddress
                  data={{
                    address2: quoteDetails
                      ? quoteDetails.customer_address1
                      : "-",
                    city: quoteDetails ? quoteDetails.customer_city : "-",
                    state: quoteDetails ? quoteDetails.customer_state : "-",
                    zip: quoteDetails ? quoteDetails.customer_postal_code : "-",
                  }}
                />
              </AddressContainer>
            </>
          )}

          {type === "customerInfo" && (
            <>
              <FieldContentContainer>
                <FieldLabel>F.O.B</FieldLabel>
                <FieldValue>
                  {quoteDetails &&
                  quoteDetails.fob_id &&
                  quoteDetails.fob_id.label
                    ? quoteDetails.fob_id.label
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
              <FieldContentContainer>
                <FieldLabel>Pay Terms</FieldLabel>
                <FieldValue>
                  {quoteDetails &&
                  quoteDetails.payterms &&
                  quoteDetails.payterms.label
                    ? quoteDetails.payterms.label
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
              <FieldContentContainer>
                <FieldLabel>Taxable Status</FieldLabel>
                <FieldValue
                  status={
                    quoteDetails &&
                    quoteDetails.taxable_status &&
                    quoteDetails.taxable_status.label
                      ? quoteDetails.taxable_status.label
                      : ""
                  }
                  className="status"
                >
                  {quoteDetails &&
                  quoteDetails.taxable_status &&
                  quoteDetails.taxable_status.label
                    ? quoteDetails.taxable_status.label.toUpperCase()
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
              <FieldContentContainer>
                <FieldLabel>PO Requote</FieldLabel>
                <FieldValue>
                  {quoteDetails &&
                  quoteDetails.is_po_requote &&
                  quoteDetails.is_po_requote.label
                    ? quoteDetails.is_po_requote.label
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>PO Requote Number</FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.po_requote_numer
                    ? quoteDetails.po_requote_numer
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>Credit On Hold</FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.credit_on_hold
                    ? quoteDetails.credit_on_hold
                    : "---"}
                </FieldValue>
              </FieldContentContainer>

              <FieldContentContainer>
                <FieldLabel>Credit Limit</FieldLabel>
                <FieldValue>
                  {quoteDetails && quoteDetails.credit_limit
                    ? quoteDetails.credit_limit
                    : "---"}
                </FieldValue>
              </FieldContentContainer>
            </>
          )}
        </DetailViewContainer>

        {quoteDetails &&
          (quoteDetails.status_code === "pending_approval" ||
            quoteDetails.status_code === "pending_approval_10k" ||
            quoteDetails.status_code === "pending_approval_25k" ||
            quoteDetails.status_code === "pending_approval_50k") &&
          quoteDetails.label !== "" && (
            <Footer>
              <Button
                appearance="primary"
                label={
                  quoteDetails && quoteDetails.label ? quoteDetails.label : ""
                }
                libraryType="atalskit"
                onClick={submitQuoteApproval}
                isDisabled={loading}
              />
            </Footer>
          )}
      </QuoteDetailViewMainContainer>

      {showPopup && (
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
            showTextArea={showpopupTextArea}
          />
        </TostContainer>
      )}

      {openApprovalQuestions && (
        <SideDrawerW40>
          <PiSideDrawer isOpen width="narrow">
            <SaveApproveQuestionTabs>
              {!displayFields.noData && (
                <PiTabGroup id="tab" onChange={onTabChange} selected={tabIndex}>
                  <>
                    <>
                      <SecondaryHeaders>
                        <HeaderText
                          onClick={() => {
                            onBack(aprovalsLabel);
                          }}
                        >
                          <img src={BackButtonIcon} alt="back-arrow..." />
                          <span />
                          {aprovalsLabel || ""}
                        </HeaderText>
                        <ProfileText>
                          {saveQuestionsList &&
                            saveQuestionsList.length > 1 && <p>{qnsStep}</p>}
                        </ProfileText>
                      </SecondaryHeaders>

                      {saveQuestionsList && saveQuestionsList.length > 1 && (
                        <ProgressBar width={progressBarWidth} />
                      )}
                    </>
                  </>

                  {isDisplay10k && (
                    <PiTabPanel>
                      <TenkApprovalForm
                        displayFields={displayFields}
                        approvalInputData={approvalInputData}
                        sendModelData={triggerApprovalEvent}
                        sendQnLabel={getQnLabel}
                        saveQuestionsList={saveQuestionsList}
                        quoteDetails={quoteDetails || ""}
                        sendQuoteapproveaction={getApprovalAction}
                      />
                    </PiTabPanel>
                  )}
                  {isDisplay25k && (
                    <PiTabPanel>
                      <TwentyFiveApprovalForm
                        displayFields={displayFields}
                        approvalInputData={approvalInputData}
                        sendModelData={triggerApprovalEvent}
                        sendQnLabel={getQnLabel}
                        saveQuestionsList={saveQuestionsList}
                        quoteDetails={quoteDetails || ""}
                        sendQuoteapproveaction={getApprovalAction}
                      />
                    </PiTabPanel>
                  )}
                  {isDisplay50k && (
                    <PiTabPanel>
                      <FiftykApproval
                        displayFields={displayFields}
                        approvalInputData={approvalInputData}
                        sendModelData={triggerApprovalEvent}
                        sendQnLabel={getQnLabel}
                        saveQuestionsList={saveQuestionsList}
                        quoteDetails={quoteDetails || ""}
                        sendQuoteapproveaction={getApprovalAction}
                      />
                    </PiTabPanel>
                  )}
                </PiTabGroup>
              )}
              {displayFields.noData && (
                <NoUserFound> Data Not Found</NoUserFound>
              )}
            </SaveApproveQuestionTabs>
          </PiSideDrawer>
        </SideDrawerW40>
      )}
    </>
  );
}
