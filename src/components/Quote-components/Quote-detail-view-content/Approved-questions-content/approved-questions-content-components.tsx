import styled from "styled-components";

export const ApprovalQnsViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(200px, 100%, 800px) !important;
  margin-inline: auto;
  height: 100%;
  gap: 16px;
`;
export const QnsContainer = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--greyCardBorder);
  padding-bottom: 12px;
  &.available-qns {
    border-bottom: unset !important;
  }
`;
export const QuestionHeading = styled.h3`
  margin: 0;
`;
