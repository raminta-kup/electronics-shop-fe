import { styled } from "styled-components"
import { devices } from "../../ScreenSizes/screenSizes"

export const FormInputGroup = ({ children }) => {
    return (
        <InputGroupContainer>
            {children}
        </InputGroupContainer>
    )
}

const InputGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    }
`