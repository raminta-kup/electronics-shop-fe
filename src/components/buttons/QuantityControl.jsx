import { styled } from "styled-components"

export const QuantityControl = ({ quantity, setQuantity, location, handleQuantityChange }) => {

    const handleQuantityUp = () => {
        if (location === "productPage") {
            setQuantity(quantity + 1)
        } else {
            handleQuantityChange("up")
        }
    }

    const handleQuantityDown = () => {
        if (location === "productPage" && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (location !== "productPage") {
            handleQuantityChange("down");
        }
    }

    return (
        (
            <StyledQuantityContainer>
                <StyledQuantityBtn onClick={() => handleQuantityDown()}>-</StyledQuantityBtn>
                <StyledQuantityNum>{quantity}</StyledQuantityNum>
                <StyledQuantityBtn onClick={() => handleQuantityUp()}>+</StyledQuantityBtn>
            </StyledQuantityContainer>
        )
    )
}

export const StyledQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #F1F1F1;
`

export const StyledQuantityNum = styled.span`
    font-weight: 700;
`

export const StyledQuantityBtn = styled.button`
    border: transparent;
    color: #979797;
    padding: 0;
    cursor: pointer;
    padding: 12px 20px;
    font-weight: 500;
`