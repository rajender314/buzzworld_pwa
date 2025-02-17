import styled from "styled-components";
import { regularFont, semiBoldFont } from "../../../../styles";

export const Dropdown = styled.div`
  display: flex;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  ${semiBoldFont};
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  p {
    margin: 0;
  }
`;
export const TotalItemCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const TotalContent = styled.div`
  display: flex;
  padding: 16px;
  border-radius: 8px;
  flex-direction: column;
  gap: 4px;
  background-color: #f7faff;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  ${regularFont}
  line-height: 20px;

  text-align: left;
  p {
    margin: 0px;
  }
  span {
    font-size: clamp(var(--min-font-size), calc(2vw + 4px), 20px);
    ${semiBoldFont};
    line-height: 20px;

    text-align: left;
  }
`;
export const ItemCard = styled.div`
  border-radius: 8px;
  border: 1px solid #e3eaf6;
  margin-bottom: 12px;
  &.focus {
    border: 2px solid #4e586d;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f7faff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  > div {
    display: flex;
    gap: 12px;
    width: 60%;
    align-items: flex-start;
  }
  &.gp {
    background-color: #fff0d7;
  }

  h4 {
    margin: 0;

    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );

    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const CardDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 16px;

  p {
    margin: 0px;
    font-size: clamp(14px, calc(2vw + 2px), var(--min-font-size));
    ${regularFont}
    line-height: 22px;
    text-align: left;
    margin-bottom: 4px;
  }
  span {
    font-size: clamp(
      var(--min-font-size),
      calc(2vw + 2px),
      var(--max-font-size)
    );
    ${semiBoldFont};
    line-height: 20px;
    text-align: left;
  }
`;
