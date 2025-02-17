import styled from "styled-components";
import { regularFont, semiBoldFont } from "../../styles";

export const ToastNotifications = styled.div`
  width: clamp(240px, 50%, 100%);
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  position: fixed;
  inset: 50%;
  transform: translate(-50%, -50%);
  height: fit-content;
  display: flex;
  background-color: #ffff;
  border-radius: 16px;
  padding: 24px;
  z-index: 999;
  flex-direction: column;
  transition: all 2s ease;
  box-shadow: 0px 2px 16px 0px #00000026;
  text-align: center;
  /* width: min(100%, 290px); */
  gap: 24px;
  p {
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    ${regularFont}
    line-height: 18px;
    margin: 0px;
    word-spacing: 0.1em;
  }
`;
export const NotificationHeader = styled.div`
  font-size: clamp(20px, calc(2vw + 2px), 22px);
  ${semiBoldFont};
  line-height: 30px;
  color: #2e374a;
  align-self: center;
`;
export const ToastFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
`;
export const TostContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
`;

export const TostIconContainer = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > img {
    height: 100%;
    width: 100%;
  }
`;

export const TostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
  &.loader-opacity {
    opacity: 0.5;
  }
`;
export const CloseIconContainer = styled.div`
  height: 24px;
  width: 24px;
  position: absolute;
  left: 86%;
  top: 4%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 50%;
  background-color: rgb(247, 250, 255);

  > img {
    height: 100%;
    width: 100%;
  }
`;
