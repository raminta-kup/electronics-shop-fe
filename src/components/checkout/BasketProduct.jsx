import { styled } from "styled-components"
import { useContext } from "react"
import CartContext from "../../CartContext"
import { QuantityControl } from "../buttons/QuantityControl"
import { useLocation } from "react-router-dom"

export const BasketProduct = ({ product, quantity }) => {
    const location = useLocation();
    const isCheckoutPage = location.pathname === "/checkout";
    const { handleQuantityChange } = useContext(CartContext);

    const onQuantityChange = (type) => {
        handleQuantityChange(product, type)
    }

    return (
        <BasketProductContainer>
            <BasketProductImg src={product?.image.mobile} />
            <BasketProductDetailsContainer>
                <BasketProductTitleAndQuantity>
                    <BasketProductTitle>{product?.name}</BasketProductTitle>
                    {isCheckoutPage ? (
                        <BasketQuantitySpan>x{quantity}</BasketQuantitySpan>
                    ) : (
                        <QuantityControl quantity={quantity} location="cart" handleQuantityChange={(val) => onQuantityChange(val)} />
                    )}
                </BasketProductTitleAndQuantity>
                <BasketProductPrice>$ {product?.price}</BasketProductPrice>
            </BasketProductDetailsContainer>
        </BasketProductContainer>

    )
}

const BasketProductContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
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
    justify-content: space-between;
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
`