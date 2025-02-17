import { useEffect, useRef, useState } from 'react'
import { Formik } from 'formik'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import {
  FormContainer,
  FormBody,
  Footer,
  SideDrawerContainer,
} from '../ten-k-Approval/ten-k-Approval-form-components'
import { PiSelectForm, PiTextareaForm } from '../../Form-Components/formComponents'
import Button from '../../Form-Components/button'
import { PoDateErrormsg } from './twanty-five-k-approval-components'
import EndpointUrl from '../../../core/apiEndpoints/endPoints'
import { triggerApi } from '../../../services'
import { ApiResponse } from '../../../services/schema/schema'
import { getQuoteApprovalFormData } from '../Quote-helpers/quote-helpers'
import { ApprovalTwentykValidationsSchema } from '../Approval-questions-validation/TwentyFive-Approval-Validation'
import { SpinnerDiv } from '../Quote-detail-view-content/Quote-notes/quote-notes-components'
import PiSpinner from '../../spinner'
import { TostContainer } from '../../ToastNotification/ToastNotification.component'
import ToastNotification from '../../ToastNotification'
import PiReactDatePicker from '../../Form-Components/poDatepicker'

type Props = {
  displayFields: any
  approvalInputData: any
  // eslint-disable-next-line no-unused-vars
  sendModelData: (e: any) => {}
  sendQnLabel: any
  saveQuestionsList: any
  quoteDetails: any
  sendQuoteapproveaction: any
}

export default function TwentyFiveApprovalForm({
  approvalInputData,
  displayFields,
  sendModelData,
  sendQnLabel,
  saveQuestionsList,
  quoteDetails,
  sendQuoteapproveaction,
}: Props) {
  const approvalName = '25k+ Questions'
  const [loading, setLoading] = useState(true)
  const formik = useRef<any>(null)
  const [timeLineList, setTimeLineList] = useState([])
  const [approvalFormDataById, setApprovalFormDataById]: any = useState()
  const [btnLabel, setBtnLabel] = useState<string>('Save')
  const [showApprovalPopup, setShowApprovalPopup] = useState<boolean>(false)
  const [secondaryBtnlabelbel, setSecondaryBtnlabel] = useState<string>('Cancel')
  const [toastBtnlabel, setToastbtnlabel] = useState<string>('Approve')
  const [submitAppearance, setSubmitappearance] = useState<string>('primary')
  const [toastTitle, setToasttitle] = useState<string>('Confirmation')
  const [confirmText, setConfirmText] = useState<any>('')
  const [showtoastFooter, setShowToastFooter] = useState<boolean>(true)
  const [toastloading, setToastloading] = useState<boolean>(false)
  const [decline_comments, setdecline_comments] = useState<string>('')
  const { id }: any = useParams()
  const [seletedDate, setSelectedDate] = useState<any>(null)
  const [showPoerrorMsg, setShowPoerrormsg] = useState<boolean>(false)
  const [initialValues, setInitialValues] = useState({
    timeline: '',
    pain: '',
    decision_making_process: '',
    delivery_due_date: '',
  })

  useEffect(() => {
    ;(async () => {
      const data: any = await getQuoteApprovalFormData('25k_quote_approval', approvalInputData)
      sendQnLabel({ qnLabel: approvalName })

      setApprovalFormDataById(data)

      if (data && approvalInputData && approvalInputData.eventFrom === 'quote') {
        setTimeLineList(data.dropdowns.type)
        if (displayFields && displayFields.values) {
          initialValues.timeline = displayFields.values.timeline
          initialValues.pain = displayFields.values.pain
          initialValues.decision_making_process = displayFields.values.decision_making_process
          initialValues.delivery_due_date = displayFields.values.delivery_due_date

          if (displayFields.values.delivery_due_date !== '') {
            setSelectedDate(moment(displayFields.values.delivery_due_date).format('MM-DD-YYYY'))
          }

          setInitialValues(initialValues)
        }

        setLoading(false)
      } else if (data && !approvalInputData) {
        setTimeLineList(data.dropdowns.type)
        if (data && data.values) {
          initialValues.timeline = data.values.timeline
          initialValues.pain = data.values.pain
          initialValues.decision_making_process = data.values.decision_making_process
          initialValues.delivery_due_date = data.values.delivery_due_date

          if (data.values.delivery_due_date !== '') {
            setSelectedDate(moment(data.values.delivery_due_date).format('MM-DD-YYYY'))
          }

          setInitialValues(initialValues)
        }

        setLoading(false)
      }
    })()
  }, [displayFields])

  const directApprove = (type?: string) => {
    setToastloading(true)
    const param = {
      type: type || quoteDetails.label_code,
      quote_id: id || '',
      decline_comments: decline_comments || '',
    }
    const apiObject = {
      payload: param,
      method: 'POST',
      apiUrl: `${EndpointUrl.QuoteApproval}`,
      headers: {},
    }
    triggerApi(apiObject)
      .then((response: ApiResponse) => {
        if (response.result.success) {
          if (type && type === 'rejected') {
            setShowToastFooter(false)
            setToasttitle('Quote Rejected')
            setConfirmText(
              `Order ID:${quoteDetails && quoteDetails.quote_no ? quoteDetails.quote_no : '---'}`
            )
            setToastloading(false)
            setTimeout(() => {
              setShowApprovalPopup(false)
              sendQuoteapproveaction({ isApproved: true })
            }, 2000)
          } else {
            setShowToastFooter(false)
            setToasttitle('Quote Approved successfully!')
            setConfirmText(
              `Order ID:${quoteDetails && quoteDetails.quote_no ? quoteDetails.quote_no : '---'}`
            )
            setToastloading(false)

            setTimeout(() => {
              setShowApprovalPopup(false)
              sendQuoteapproveaction({ isApproved: true })
            }, 2000)
          }
        } else {
          setTimeout(() => {
            setToastloading(false)
          }, 4000)
        }
      })
      .catch((err: string) => {
        console.log(err)
        setToastloading(false)
      })
  }
  function handleRef(e: any) {
    formik.current = e
  }
  function submit25kApproval(data: any, type: string) {
    setLoading(true)

    const param = {
      quote_form_values: data,
      type,
      quote_form_id: approvalFormDataById.id,
      quote_id: approvalInputData.quote_id,
    }
    const apiObject = {
      payload: param,
      method: 'POST',
      apiUrl: displayFields
        ? EndpointUrl.QuoteInternalApprovalQues
        : `${EndpointUrl.QuoteApproval}`,
      headers: {},
    }
    triggerApi(apiObject)
      .then((response: ApiResponse) => {
        if (response.result.success) {
          if (approvalInputData && approvalInputData.eventFrom === 'quote') {
            if (saveQuestionsList && saveQuestionsList.length === 2) {
              setBtnLabel('Approve')
            } else {
              setBtnLabel('Save & Next')
              sendModelData({ success: true, formType: '25k' })
            }
            setLoading(false)
          }
        } else {
          setConfirmText(response.result.data)
          setLoading(false)
        }
      })
      .catch((err: string) => {
        console.log(err)
        setLoading(false)
      })
  }
  function handleSubmit(data: any) {
    data.delivery_due_date = seletedDate
    const upDatedPayload = data
    setShowPoerrormsg(true)
    if (approvalInputData && approvalInputData.eventFrom === 'quote') {
      if (btnLabel === 'Save' || btnLabel === 'Save & Next') {
        if (seletedDate !== null) {
          submit25kApproval(upDatedPayload, 'approved')
        }
      } else {
        setShowApprovalPopup(true)
        setConfirmText('Are you sure you want to submit this quote for approval ?')
        setSecondaryBtnlabel('Decline')
      }
    }
  }

  const onCancel = () => {
    if (secondaryBtnlabelbel === 'Cancel') {
      setShowApprovalPopup(false)
      setToastbtnlabel('Approve')
      setSubmitappearance('primary')
      setToasttitle('Confirmation')
    } else {
      setSecondaryBtnlabel('Cancel')
      setToastbtnlabel('Reject')
      setSubmitappearance('reject')
      setToasttitle('Reject?')
      setConfirmText('Are you sure you want to proceed with rejecting this quote ?')
    }
  }
  const onClosePopup = () => {
    setShowApprovalPopup(false)
  }
  const onApprove = () => {
    if (toastBtnlabel !== 'Reject') {
      directApprove()
    } else if (toastBtnlabel === 'Reject') {
      directApprove('rejected')
    }
  }
  const getDeclinecomments = (e: any) => {
    setdecline_comments(e && e.decline_comments ? e.decline_comments : '')
  }

  const handleChange = (e: any) => {
    if (e === null) {
      setSelectedDate(null)
    } else {
      initialValues.delivery_due_date = moment(e).format('YYYY-MM-DD')
      setInitialValues(initialValues)
      setSelectedDate(moment(e).format('YYYY-MM-DD'))
    }
  }

  return (
    <SideDrawerContainer>
      <FormContainer>
        <Formik
          validationSchema={ApprovalTwentykValidationsSchema}
          onSubmit={(e: any) => handleSubmit(e)}
          initialValues={initialValues}
          innerRef={(e: any) => handleRef(e)}
        >
          {({ ...formikProps }: any) => (
            <>
              <FormBody className={loading ? 'opacity-on-load' : ''}>
                {loading && (
                  <SpinnerDiv className="opacity-loader">
                    <PiSpinner color="primary" size={50} libraryType="atalskit" />
                  </SpinnerDiv>
                )}
                <PiSelectForm
                  label="Timeline"
                  libraryType="atalskit"
                  name="timeline"
                  placeholder="Select Timeline"
                  options={timeLineList}
                  classNamePrefix="react-select"
                  isMandatory
                  isClearable
                />
                <div>
                  <PiReactDatePicker
                    dateFormat="MM-dd-yyyy"
                    dropdownMode="select"
                    placeholderText="Select PO Date"
                    helpText=""
                    label="PO Date"
                    libraryType="atalskit"
                    name="delivery_due_date"
                    onChange={(e: Date) => {
                      handleChange(e)
                    }}
                    selected={seletedDate !== null ? new Date(seletedDate) : null}
                    minDate={new Date()}
                  />
                  {seletedDate === null && showPoerrorMsg && (
                    <PoDateErrormsg>Please select PO-Date</PoDateErrormsg>
                  )}
                </div>

                <PiTextareaForm
                  label="Pain"
                  name="pain"
                  maxLength={200}
                  placeholder="Enter Pain"
                  isMandatory
                />
                <PiTextareaForm
                  label="Decision Making Process"
                  name="decision_making_process"
                  maxLength={200}
                  placeholder="Enter Decision Making Process"
                  isMandatory
                />
              </FormBody>
              <Footer>
                <Button
                  appearance="primary"
                  label={
                    saveQuestionsList && saveQuestionsList.length > 2 ? 'Save & Next' : btnLabel
                  }
                  libraryType="atalskit"
                  onClick={formikProps.handleSubmit}
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
                    showTextArea={false}
                  />
                </TostContainer>
              )}
            </>
          )}
        </Formik>
      </FormContainer>
    </SideDrawerContainer>
  )
}
