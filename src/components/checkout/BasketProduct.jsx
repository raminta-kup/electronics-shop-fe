import { styled } from "styled-components"
import { useContext } from "react"
import CartContext from "../../CartContext"
import { QuantityControl } from "../buttons/QuantityControl"
import { useLocation } from "react-router-dom"
import { devices } from "../../ScreenSizes/screenSizes"

export const BasketProduct = ({ product, quantity }) => {
    const location = useLocation();
    const isCheckoutPage = location.pathname === "/checkout";
    const { handleQuantityChange } = useContext(CartContext);

    const onQuantityChange = (type) => {
        handleQuantityChange(product, type)
    }

    return (
            <BasketProductContainer>
                <BasketProductTitleAndQuantity>
                    <BasketProductImg src={product?.image.mobile} />
                    <BasketProductDetailsContainer>
                        <BasketProductTitle>{product?.name}</BasketProductTitle>
                        <BasketProductPrice>$ {product?.price}</BasketProductPrice>
                    </BasketProductDetailsContainer>
                </BasketProductTitleAndQuantity>
                <div>
                    {isCheckoutPage ? (
                        <BasketQuantitySpan>x{quantity}</BasketQuantitySpan>
                    ) : (
                        <QuantityControl quantity={quantity} location="cart" handleQuantityChange={(val) => onQuantityChange(val)} />
                    )}
                </div>
            </BasketProductContainer>
    )
}

const BasketProductContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex-direction: column;
    justify-content: space-between;
    @media ${devices.tablet} {
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
`
const BasketProductImg = styled.img`
    border-radius: 8px;
    height: 64px;
    width: 64px;
`
const BasketProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

const BasketProductTitleAndQuantity = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 24px;
    align-items: center;
`
const BasketProductPrice = styled.span`
    font-size: 15px;
    color: #979797;
    font-weight: 700;
`

const BasketQuantitySpan = styled.span`
    font-size: 15px;
    color: #979797;
    font-weight: 700;
`

const BasketProductTitle = styled.h2`
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 20px;
`