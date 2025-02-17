import styled from "styled-components";
import { semiBoldFont } from "../../styles";

export const DropDownContainer = styled.div`
  width: 100%;
  height: 52px;
`;
export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  border-bottom: 2px solid rgba(227, 234, 246, 1);
  @media only screen and (min-width: 481px) {
    margin-left: auto;
    width: min(44%, 100%);
    border: 2px solid rgba(227, 234, 246, 1);
    border-radius: 4px;
    padding: 10px;
    margin-right: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
export const DropDownContent = styled.div`
  @media only screen and (min-width: 481px) {
    margin-left: auto;
    margin-right: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    width: min(48%, 100%);
  }
`;
export const DropDownOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  color: #2e374a;
  background-color: rgb(255, 255, 255);
  padding: 12px 10px;
  border-radius: 0 0 6px 6px;
  margin: 0 4px;
  filter: drop-shadow(2px 4px 6px #dddddd);
  &.no-options {
    text-align: center;
  }
`;
export const SelectedLabel = styled.span`
  ${semiBoldFont}
  font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
  line-height: 20px;
  color: rgba(46, 55, 74, 1);
  font-family: var(--themeFont) !important;
`;
export const DropdownArrowIconContainer = styled.span`
  height: 16px;
  width: 16px;
  > img {
    height: 100%;
    width: 100%;
  }
`;
export const DropDownLabel = styled.div``;
export const DropDownOptionContent = styled.div`
  cursor: pointer;
  padding: 4px 6px;
`;
