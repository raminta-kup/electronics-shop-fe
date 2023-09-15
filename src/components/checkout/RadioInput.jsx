import { styled } from "styled-components"

export const RadioInput = ({ text, name, id, forHtml, onChange }) => {

    return (
            <InputContainer>
                <StyledContainer
                    htmlFor={forHtml}
                >
                    <StyledInput
                        required
                        type="radio"
                        name={name}
                        id={id}
                        onChange={onChange}
                    />
                    {text}
                </StyledContainer>
            </InputContainer>
    )
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledContainer = styled.label`
    border: 1px solid #CFCFCF;
    padding: 17px;
    border-radius: 4px;
    display: flex;
    font-size: 14px;
    align-items: center;
    color: #666;
    font-weight: 500;
    box-shadow: none;
`

const StyledInput = styled.input`
    margin: 0 14px 0 0;
`
