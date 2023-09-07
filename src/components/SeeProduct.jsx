import { styled } from "styled-components"
import { Button } from "./buttons/Button"

export const SeeProductTitleBtn = ({text}) => {
    const handleOpen = () => {
        //navigate to product
    }
    return (
        <ProductTitleBtnContainer>
            <ProductTitle>{text}</ProductTitle>
            <Button
                text="see product"
                backgroundColor="transparent"
                textColor="#000"
                fontWeight="700"
                onClick={handleOpen}
            />
        </ProductTitleBtnContainer>
    )
}

const ProductTitle = styled.h2`
    font-size: 30px;
    color: #000;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 34px;
`

const ProductTitleBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
`