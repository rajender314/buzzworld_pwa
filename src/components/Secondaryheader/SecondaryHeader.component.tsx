import styled from "styled-components";
import { boldFont, regularFont } from "../../styles";

export const SecondaryHeaders = styled.div`
  background-color: #fff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 4px 0px #26323e1c;
`;
export const HeaderText = styled.div`
  display: flex;
  gap: 8px;
  color: #2e374a;
  align-items: center;
  font-size: clamp(var(--max-font-size), calc(2vw + 2px), 20px);
  ${boldFont};
  line-height: 24px;

  span {
    display: inline-block;
    border-left: 1px solid #d0daec;
    margin: 0px;
    height: 21px;
  }
  p {
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    ${regularFont}
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    margin: 0;
  }
`;
export const ProfileText = styled.div`
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  ${regularFont}
  color: #8e99b2;
  > p {
    margin: 0;
  }
`;
export const SecondaryHeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
`;
