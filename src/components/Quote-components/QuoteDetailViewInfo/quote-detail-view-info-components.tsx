import styled from "styled-components";
import {
  boldFont,
  mediumFont,
  pillApproved,
  pillBackgroundApproved,
  pillBackgroundPendingApproval,
  pillBackgroundRejected,
  pillPendingApproval,
  pillRejected,
  regularFont,
  semiBoldFont,
} from "../../../styles";

type Props = {
  status?: string;
};
export const QuoteDetailViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(200px, 100%, 800px) !important;
  margin-inline: auto;
  height: 100%;
  &.approved-questions-main-container {
    gap: 16px;
  }
  &.scroll {
    overflow-y: auto;
    height: auto;
  }
`;
export const DetailViewContainer = styled.div`
  padding: 16px;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;

  &.view-container {
    height: 100%;
  }

  &.approved-questions-content {
    padding: 16px !important;
  }
  > div {
    padding: 0;
    margin: 0;
    color: var(--fieldValue);
  }
  > div > h2 h1,
  p {
    padding: 0;
    margin: 0;
    color: var(--fieldValue);
  }
  .header {
    font-size: clamp(var(--max-font-size), calc(2vw + 4px), 18px);
    ${semiBoldFont};
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
  &.overflow {
    overflow: unset;
    height: unset;
  }

  &.notes-notAvailable {
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &.quote-view-container {
    height: calc(100% - 175px);
  }
`;
export const ErrorMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  text-align: center;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  color: rgb(142, 153, 178);
`;
export const QuoteItemContainer = styled.div``;
export const FieldContentContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  gap: 8px;
  align-items: flex-start;
  position: relative;
  @media only screen and (min-width: 481px) {
    grid-template-columns: 30% 1fr;
  }
`;
export const NotesContainer = styled.div`
  font-size: clamp(14px, calc(2vw + 2px), 16px);
  overflow-wrap: anywhere;
  ${regularFont}
  line-height: 18px;
  color: var(--fieldValue);
  p {
    margin: 0;
  }
  > div::after {
    content: "" !important;
  }
`;
export const FieldLabel = styled.div`
  color: var(--fieldLabel);
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  ${regularFont}
  line-height: 22px;
  position: relative;
  ::after {
    content: " :";
    position: absolute;
    right: 0;
    top: 0;
  }
`;
export const FieldValue = styled.span`
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  overflow-wrap: anywhere;
  ${regularFont}
  line-height: 22px;
  color: var(--fieldValue);

  ${({ status }: Props) => {
    if (status === "Exempt") {
      return `color:${pillPendingApproval};
             background-color: rgb(255, 240, 215);
             ${semiBoldFont};
             line-height:16px;`;
    }
    if (
      status === "pending_approval" ||
      status === "pending_approval_10k" ||
      status === "pending_approval_25k" ||
      status === "pending_approval_50k"
    ) {
      return `color: ${pillPendingApproval};
    background-color:${pillBackgroundPendingApproval};
      ${semiBoldFont};
      line-height:16px;
     
     
      `;
    } if (status === "approved") {
      return `color: ${pillApproved};
       background-color:${pillBackgroundApproved};
      ${semiBoldFont};
      line-height:16px;
      
      `;
    } if (status === "rejected") {
      return `color: ${pillRejected};
      background-color:${pillBackgroundRejected};
         ${semiBoldFont};
         line-height:16px;
      `;
    } if (status === "open") {
      return `color: ${pillPendingApproval};
    background-color:${pillBackgroundPendingApproval};
      ${semiBoldFont};
      line-height:16px`;
    } if (status === "won") {
      return `color: ${pillPendingApproval};
    background-color:${pillBackgroundPendingApproval};
      ${semiBoldFont};
      line-height:16px`;
    }
  }}
  &.quote-number {
    ${boldFont}
    white-space: nowrap;
  }
  &.status {
    width: fit-content;
    border-radius: 4px;
    padding: 4px;
  }
`;
export const SideDrawerW40 = styled.div`
  .side-drawer {
    width: 100% !important;
  }
`;
export const SideDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid #e3eaf6;
  h3 {
    margin: 0;
    color: #2e374a;
  }
  .HeaderFilter {
    display: flex;
    gap: 11.6px;
  }
`;
export const CloseButton = styled.div`
  position: relative;
  left: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  &:hover {
    background: #f2f7ff;
    cursor: pointer;
  }
`;

export const SaveApproveQuestionTabs = styled.div`
  height: 100%;
  .pitabs-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    overflow: auto;
  }

  div[role="tablist"] > div {
    padding: 0px !important;
  }
`;
export const NoUserFound = styled.div`
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  gap: 16px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #6d7992;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  ${mediumFont}
`;
export const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  gap: 8px;
  @media only screen and (min-width: 481px) {
    grid-template-columns: 30% 1fr;
  }
  > .pi-address > .quote-block > h2 {
    margin: 0;
    padding: 0;
  }

  > .pi-address > .quote-block > div > .address-data {
    flex-wrap: wrap;
    font-family: unset;
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    overflow-wrap: anywhere;
    ${regularFont}
    line-height: 22px;
    color: var(--fieldValue);
    margin: 0;
  }
`;
