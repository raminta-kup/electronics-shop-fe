import { styled } from "styled-components"
import { BasketProduct } from "./BasketProduct"
import { Button } from "../buttons/Button"
import { OrderConfirmationModal } from "./OrderConfirmationModal";
import { useEffect, useState } from "react";
import { devices } from "../../ScreenSizes/screenSizes";



export const BasketProductSummary = () => {

    return (
        <BasketSummaryContainer>
            <SummaryTitle>summary</SummaryTitle>
            <BasketProductsContainer>
                <BasketProduct />
                <BasketProduct />
            </BasketProductsContainer>
            <PriceCalculationsContainer>
                <CalculationContainer>
                    <SummarySpan>total</SummarySpan>
                    <SummarySum>$ 5,396</SummarySum>
                </CalculationContainer>
                <CalculationContainer>
                    <SummarySpan>shipping</SummarySpan>
                    <SummarySum>$ 50</SummarySum>
                </CalculationContainer>
                <CalculationContainer>
                    <SummarySpan>vat (included)</SummarySpan>
                    <SummarySum>$ 1,079</SummarySum>
                </CalculationContainer>
            </PriceCalculationsContainer>
            <CalculationContainer>
                <SummarySpan>grand total</SummarySpan>
                <SummaryGrandTotal>$ 5,446</SummaryGrandTotal>
            </CalculationContainer>
            <Button
                text="continue & pay"
                fontWeight="600"
                backgroundColor="#D87D4A"
                borderColor="transparent"
                textColor="#FFF"
                type="submit"
            />
        </BasketSummaryContainer>
    )
}

const SummaryTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
`
const BasketSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 8px;
    padding: 50px;
    box-sizing: border-box;
    background-color: white;
    min-width: 340px;
    @media ${devices.laptop} {
        align-self: baseline;
        min-width: 380px;
    }
`

const BasketProductsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`

const PriceCalculationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const SummarySpan = styled.span`
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 300;
`
const CalculationContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const SummarySum = styled.span`
    font-weight: 700;
    font-size: 18px;
`
const SummaryGrandTotal = styled(SummarySum)`
    color: #D87D4A;
`