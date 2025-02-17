import moment from "moment";
import {
  FieldContentContainer,
  FieldLabel,
  FieldValue,
} from "../../QuoteDetailViewInfo/quote-detail-view-info-components";
import {
  ApprovalQnsViewMainContainer,
  QnsContainer,
  QuestionHeading,
} from "./approved-questions-content-components";

type Props = {
  questionsInfo: string;
};
export default function ApprovedQuestionsContent({ questionsInfo }: Props) {
  const tenKValues: any = questionsInfo[0];
  const twantyfivekValues: any = questionsInfo[1];
  const fiftykValue: any = questionsInfo[2];

  return (
    <ApprovalQnsViewMainContainer>
      <QnsContainer
        className={questionsInfo.length === 1 ? "available-qns" : ""}
      >
        <QuestionHeading>10k+ Questions</QuestionHeading>
        <FieldContentContainer>
          <FieldLabel>Type</FieldLabel>
          <FieldValue>
            {tenKValues && tenKValues.budgetry_type
              ? tenKValues.budgetry_type.label
              : "---"}
          </FieldValue>
        </FieldContentContainer>
        <FieldContentContainer>
          <FieldLabel>Competition</FieldLabel>
          <FieldValue>
            {tenKValues && tenKValues.competitions
              ? tenKValues.competitions
              : "---"}
          </FieldValue>
        </FieldContentContainer>
        <FieldContentContainer>
          <FieldLabel>Budgetary Amount</FieldLabel>
          <FieldValue>
            {tenKValues && tenKValues.budgetry_amount
              ? tenKValues.budgetry_amount
              : "---"}
          </FieldValue>
        </FieldContentContainer>
        <FieldContentContainer>
          <FieldLabel>Key Decision Maker</FieldLabel>
          <FieldValue>
            {tenKValues && tenKValues.key_decision_maker
              ? tenKValues.key_decision_maker
              : "---"}
          </FieldValue>
        </FieldContentContainer>
      </QnsContainer>

      {questionsInfo && questionsInfo.length > 1 && (
        <QnsContainer
          className={questionsInfo.length === 2 ? "available-qns" : ""}
        >
          <QuestionHeading>25k+ Questions</QuestionHeading>
          <FieldContentContainer>
            <FieldLabel>Timeline</FieldLabel>
            <FieldValue>
              {twantyfivekValues && twantyfivekValues.timeline
                ? twantyfivekValues.timeline.label
                : "---"}
            </FieldValue>
          </FieldContentContainer>

          <FieldContentContainer>
            <FieldLabel>Pain</FieldLabel>
            <FieldValue>
              {twantyfivekValues && twantyfivekValues.pain
                ? twantyfivekValues.pain
                : "---"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Decision Making Process </FieldLabel>
            <FieldValue>
              {twantyfivekValues && twantyfivekValues.decision_making_process
                ? twantyfivekValues.decision_making_process
                : "---"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Delivery Due Date</FieldLabel>
            <FieldValue>
              {twantyfivekValues && twantyfivekValues.delivery_due_date
                ? moment(twantyfivekValues.delivery_due_date).format(
                    "MM-DD-YYYY"
                  )
                : "---"}
            </FieldValue>
          </FieldContentContainer>
        </QnsContainer>
      )}

      {questionsInfo && questionsInfo.length === 3 && (
        <QnsContainer className="available-qns">
          <QuestionHeading>50k+ Questions</QuestionHeading>

          <FieldContentContainer>
            <FieldLabel>Last Look</FieldLabel>
            <FieldValue>
              {fiftykValue && fiftykValue.last_Look
                ? fiftykValue.last_Look
                : "---"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Current Customer </FieldLabel>
            <FieldValue>
              {fiftykValue && fiftykValue.current_customer
                ? fiftykValue.current_customer
                : "---"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel> Non Standing Pricing</FieldLabel>
            <FieldValue>
              {" "}
              {fiftykValue && fiftykValue.special_Pricing
                ? fiftykValue.special_Pricing
                : "---"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Programming Needed</FieldLabel>
            <FieldValue>
              {" "}
              {fiftykValue && fiftykValue.programming_needed
                ? fiftykValue.programming_needed
                : "---"}
            </FieldValue>
          </FieldContentContainer>

          <FieldContentContainer>
            <FieldLabel>Reasons </FieldLabel>
            <FieldValue>
              {fiftykValue && fiftykValue.reasons ? fiftykValue.reasons : "---"}
            </FieldValue>
          </FieldContentContainer>
        </QnsContainer>
      )}
    </ApprovalQnsViewMainContainer>
  );
}
