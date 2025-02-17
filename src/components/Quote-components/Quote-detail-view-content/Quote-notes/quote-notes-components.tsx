import styled from "styled-components";
import { boldFont, regularFont, semiBoldFont } from "../../../../styles";

export const NotesNotAvailableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 60%;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  color: #8e99b2;
  &.internal-approval {
    height: 100% !important;
    width: 100%;
  }
`;
export const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  &.spinner-position {
    position: absolute;
    left: 40%;
    top: 0%;
  }
  &.opacity-loader {
    position: absolute;
    left: 50%;
    top: 50%;
    height: fit-content;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
  &.opacity-on-loading {
    position: absolute;
    left: 50%;
    top: 50%;
    height: fit-content;
    z-index: 9999999;
    transform: translate(-50%, -50%);
  }
`;
export const ItemList = styled.div`
  padding: 10px 0px;
  width: 100%;
  border-bottom: 1px solid #e3eaf6;

  padding-bottom: 20px;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  img.notes-user-img {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
  &:hover {
    .edit-control {
      display: flex;
    }
  }
`;
export const NotesUserInfo = styled.div`
  flex: 1;
  h6 {
    margin: 0;
    font-size: clamp(var(--max-font-size), calc(2vw + 2px), 18px);
    ${boldFont};
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    color: #2e374a;
  }
`;

export const MessageText = styled.p`
  margin: 0;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  padding: 3px 0;
  ${regularFont}
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #6d7992;
  &.time-stamp {
    ${semiBoldFont};
    text-align: right;
  }
  &.whitespace-preinline {
    white-space: pre-line;
  }
  &.message-subject {
    ${boldFont};
  }
`;
