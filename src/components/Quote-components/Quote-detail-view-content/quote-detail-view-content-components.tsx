import styled from "styled-components";

export const TabsHeaderPanelContainer = styled.div`
  padding: 0;
  overflow-x: scroll;
  scroll-behavior: smooth;
  min-height: 54px;
  max-height: 56px;
  ::-webkit-scrollbar {
    display: none;
  }

  > div div[role="tab"] {
    overflow: unset;
  }
`;
