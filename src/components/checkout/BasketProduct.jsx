import { styled } from "styled-components"
import testProduct from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"

export const BasketProduct = () => {
    // const {title, price, quantity} = product;
    return (
        <BasketProductContainer>
            <BasketProductImg src={testProduct} />
            <BasketProductDetailsContainer>
                <BasketProductTitleAndQuantity>
                    <BasketProductTitle>xx99 mk ii</BasketProductTitle>
                    <BasketQuantitySpan>x1</BasketQuantitySpan>
                </BasketProductTitleAndQuantity>
                <BasketProductPrice>$ 2,999</BasketProductPrice>
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