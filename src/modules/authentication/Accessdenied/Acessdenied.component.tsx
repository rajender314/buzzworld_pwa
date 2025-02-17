import styled from "styled-components";
import { semiBoldFont } from "../../../styles";

export const AcessDenied = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
export const AccessDeniedContainer = styled.div`
  position: absolute;
  width: clamp(200px, 90%, 800px) !important;
  height: fit-content;
  inset: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  gap: 24px;

  h4 {
    font-size: clamp(var(--max-font-size), calc(2vw + 2px), 22px);
    ${semiBoldFont};
    letter-spacing: 0px;
    text-align: center;
    margin: 0px;
  }
  p {
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0px;
  }
`;
export const AccessDeniedImageContainer = styled.div`
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;
  > img {
    width: 100%;
    height: 100%;
  }
`;
