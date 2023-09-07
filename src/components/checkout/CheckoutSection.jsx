import { styled } from "styled-components"

export const CheckoutSection = ({sectionTitle, children}) => {
    return (
        <SectionContainer>
            <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
            <InputContainer>
                {children}
            </InputContainer>
        </SectionContainer>
    )
}

const StyledSectionTitle = styled.h3`
    font-size: 14px;
    color: #D87D4A;
    font-weight: 700;
    text-transform: uppercase;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
