import styled from "styled-components";
import { boldFont, regularFont } from "../../styles";

export const CommonHeaders = styled.div`
  background-color: #1976d2;
  padding: 16px;
  display: flex;
  gap: 8px;
  align-items: center;

  > div:last-child {
    margin-left: auto;
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  cursor: pointer;

  &.iidm_logo {
    background-color: #134c85;
    img {
      margin: 8px;
      height: 100%;
      width: 100%;
    }
  }
  &.profile_img {
    margin-left: auto;
  }
`;
export const HeaderText = styled.div`
  flex-grow: 3;

  color: #ffffff;
  p {
    margin: 0;
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    line-height: 22px;
    ${boldFont};
  }
  span {
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    line-height: 22px;
    ${regularFont}
  }
`;
export const Profile = styled.div`
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
