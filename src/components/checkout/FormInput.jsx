import { styled } from "styled-components"

export const FormInput = ({ text, placeholder, type, name, onChange, forHtml, id }) => {
    return (
        <InputContainer>
            <StyledLabel
                htmlFor={forHtml}
            >
                {text}
            </StyledLabel>
            <StyledInput
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
                id={id}
                required
            />
        </InputContainer>
    )
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const StyledInput = styled.input`
    padding: 16px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #CFCFCF;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #D87D4A;
        border: 1px solid #D87D4A;
    }
`

const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 700;
`