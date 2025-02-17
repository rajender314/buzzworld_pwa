import styled from "styled-components";
import { boldFont, regularFont, semiBoldFont } from "../../../../styles";

export const ItemManufacturerDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  ${boldFont};
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  gap: 2px;
  h4 {
    ${semiBoldFont};
    line-height: 20px;
    margin: 0;
    margin-top: 4px;
  }
  p {
    ${regularFont}
    line-height: 20px;
    margin: 0;
  }
`;
