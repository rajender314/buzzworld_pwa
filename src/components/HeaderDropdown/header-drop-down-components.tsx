import styled from "styled-components";
import { semiBoldFont } from "../../styles";

export const ProfileimgContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 4px;
`;
export const HeaderArrowIconContainer = styled.span`
  width: 8px;
  > img {
    height: 100%;
    width: 100%;
  }
`;
export const HeaderDropDownContainer = styled.div`
  width: unset;
  height: unset;
`;
export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  > img {
    aspect-ratio: 1/1;
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }
`;
export const HeaderDownContent = styled.div``;
export const HeaderDownOptionsContainer = styled.div`
  position: fixed;
  z-index: 900;
  padding: 8px 10px;
  margin: 0 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;
  max-width: 800px;
  max-height: calc(100vh - 16px);
  right: 10px;
  ${semiBoldFont};
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  color: var(--themeBlue900);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
  &.no-options {
    text-align: center;
  }
`;
