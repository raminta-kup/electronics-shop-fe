import { useState } from "react"
import { styled } from "styled-components"

export const QuantityControl = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityUp = () => {
        setQuantity(quantity + 1)
    }

    const handleQuantityDown = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <StyledQuantityContainer>
            <StyledQuantityBtn onClick={handleQuantityDown}>-</StyledQuantityBtn>
            <StyledQuantityNum>{quantity}</StyledQuantityNum>
            <StyledQuantityBtn onClick={handleQuantityUp}>+</StyledQuantityBtn>
        </StyledQuantityContainer>
    )
}

const StyledQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #F1F1F1;
`

const StyledQuantityNum = styled.span`
    font-weight: 700;
`

const StyledQuantityBtn = styled.button`
    border: transparent;
    color: #979797;
    padding: 0;
    cursor: pointer;
    padding: 16px 24px;
    font-weight: 500;
`