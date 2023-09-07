import { useState } from "react"
import { styled } from "styled-components"

export const RadioInput = ({ text, name, id, forName, heading, onChange, isChecked }) => {

    // const [isChecked, setIsChecked] = useState(false);

    const handleInputChange = (e) => {
        // setIsChecked(e.target.checked);
    }

    return (
            <InputContainer>
                <StyledContainer
                    for={forName}
                    $isChecked={isChecked}
                >
                    <StyledInput
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
    border: 1px solid ${(props) => (props.$isChecked ? "#d87d4a" : "#CFCFCF")};
    padding: 17px;
    border-radius: 4px;
    display: flex;
    font-size: 14px;
    align-items: center;
    color: ${(props) => (props.$isChecked ? "black" : "#666666")};
    font-weight: ${(props) => (props.$isChecked ? "700" : "500")};
    box-shadow: ${(props) => (props.$isChecked ? "0px 0px 2px #D87D4A" : "none")};
`

const StyledInput = styled.input`
    margin: 0 14px 0 0;
`
