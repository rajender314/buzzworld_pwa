import styled from "styled-components";

export const LoginHeader = styled.div`
  background-color: #1976d2;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FieldsContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  height: 85%;
`;
export const LoginFieldsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const SignMicrosoftContainer = styled.div`
  display: flex;
  gap: 8px;
  border: 1px solid rgba(94, 94, 94, 1);
  border-radius: 6px;
  padding: 12px;
  align-items: center;
`;
export const MicrosoftLogoContainer = styled.div`
  > img {
    height: 100%;
    width: 100%;
  }
  height: 21px;
  width: 21px;
`;
export const MSLogoText = styled.div`
  color: rgba(94, 94, 94, 1);
  line-height: 26px;
  font-weight: 600;
  font-size: clamp(var(--max-font-size), calc(2vw + 2px), 18px);
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const LoginButtonContainer = styled.div`
  > button {
    width: 100%;
  }
`;
export const PasswordFieldContainer = styled.div`
  position: relative;
`;
export const EyeIconContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  height: 16px;
  width: 16px;

  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  > img {
    height: 100%;
    width: 100%;
  }
`;
