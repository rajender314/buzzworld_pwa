import styled from "styled-components";

interface WidthDivProps {
  width?: string; // This allows the 'width' prop to be optional
}

export const ProgressBar = styled.div<WidthDivProps>`
  width: ${(props) => props.width};
  border-bottom: 6px solid rgba(25, 118, 210, 1);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const FormBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow: auto;
`;
export const Footer = styled.div`
  position: relative;
  inset: 0;
  top: unset;
  padding: 16px;
  > button {
    width: clamp(200px, 100%, 800px) !important;
    margin: 0 auto;
    display: flex;
    width: 100%;
    height: 50px !important;
    min-width: unset !important;
  }
  background-color: rgb(255, 255, 255);
  border-top: 1px solid #d0daec;

  &.fifty-k-form-footer {
    display: flex;
    gap: 16px;
    
  }
`;
export const AsyncLabel = styled.label`
  font-family: Inter, sans-serif;
  font-style: normal;
  color: #6d7992;
  font-weight: bold;
  font-size: clamp(var(--min-font-size), calc(2vw + 2px), var(--max-font-size));
  line-height: 20px;
  &.quote-date-label {
    color: #4e586d;
    margin-bottom: unset;
  }

  &.mandatory::after {
    content: "*";
    padding-left: 4px;

    color: red;
  }
`;
export const SideDrawerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .form {
    background-color: #f2f7ff;
  }
  .qcicon {
    height: 40px;
    width: 40px;
  }
`;
export const SideDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid #e3eaf6;
  h3 {
    margin: 0;
    color: #2e374a;
  }
`;
export const AsyncSelectDiv = styled.div`
  width: 100%;
  &.manufacter-select {
    .react-select.__control {
      max-height: 36px !important;
      min-height: 36px !important;
      background-color: var(--ds-background-input, #f7faff);
      border-color: var(--ds-border-input, #d0daec) !important;
    }
    .react-select.__value-container {
      margin-bottom: 4px !important;
    }
  }
  .margin {
    margin: 8px 0px;
    margin-top: 12px;
  }

  .text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .react-select__control {
    margin-top: 8px;
  }
`;
