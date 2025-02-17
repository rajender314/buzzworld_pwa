import styled from "styled-components";
import { semiBoldFont } from "../../styles";

export const ErrorContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  &.is-loading {
    opacity: 0.5;
  }
`;

export const ErrorImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 250px;
  width: 250px;

  > img {
    width: 100%;
    height: 100%;
  }
  p {
    margin: 0;
    text-align: center;
    color: #6d7992;
    font-size: 24px;
    line-height: 40px;
    ${semiBoldFont};
  }
`;
