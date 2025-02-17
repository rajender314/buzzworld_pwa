import {
  DetailViewContainer,
  QuoteDetailViewMainContainer,
} from "../../QuoteDetailViewInfo/quote-detail-view-info-components";
import ApprovedQuestionsContent from "../Approved-questions-content/approved-questions-content";

export default function ApprovedQuestions({ savedQns }: any) {
  return (
    <QuoteDetailViewMainContainer>
      <DetailViewContainer className="approved-questions-content">
        <ApprovedQuestionsContent questionsInfo={savedQns} />
      </DetailViewContainer>
    </QuoteDetailViewMainContainer>
  );
}
