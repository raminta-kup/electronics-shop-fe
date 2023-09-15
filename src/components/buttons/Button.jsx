import { styled } from "styled-components";

export const Button = ({ text, backgroundColor, borderColor, textColor, hoverBackground, fontWeight, onClick, type }) => {
  return (
    <StyledButton
      onClick={onClick}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $textColor={textColor}
      $hoverBackground={hoverBackground}
      $fontWeight={fontWeight}
      type={type}
    >
      {text}
    </StyledButton>
  );
};

export const StyledButton = styled.button` 
  padding: 14px 22px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${props => props.$backgroundColor};
  font-weight: ${props => props.$fontWeight || 500};
  color: ${props => props.$textColor};
  border: 2px solid ${props => props.$borderColor};
  font-size: 14px;
  letter-spacing: 1px;

  &:hover {
    background-color: ${props => props.$hoverBackground};
  }
`;  