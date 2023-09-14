import { styled } from "styled-components"
import { BasketProduct } from "./BasketProduct"
import { Button } from "../buttons/Button"
import { useContext } from "react";
import { devices } from "../../ScreenSizes/screenSizes";
import CartContext from "../../CartContext";
import { Paragraph } from "../Paragraph";
import { Link } from "react-router-dom";

export const BasketProductSummary = () => {
    const { cart, calculateTotal, calculateGrandTotal, calculateTax } = useContext(CartContext);

    return (
        <BasketSummaryContainer>
            {cart.length > 0 ? (
                <>
                    <SummaryTitle>summary</SummaryTitle>
                    <BasketProductsContainer>
                        {cart.map((item) => {
                            return (
                                <BasketProduct quantity={item.quantity} product={item.product} />
                            )
                        })}
                    </BasketProductsContainer>
                    <PriceCalculationsContainer>
                        <CalculationContainer>
                            <SummarySpan>total</SummarySpan>
                            <SummarySum>$ {calculateTotal(cart)}</SummarySum>
                        </CalculationContainer>
                        <CalculationContainer>
                            <SummarySpan>shipping</SummarySpan>
                            <SummarySum>$ 50</SummarySum>
                        </CalculationContainer>
                        <CalculationContainer>
                            <SummarySpan>vat (included)</SummarySpan>
                            <SummarySum>$ {calculateTax(cart)}</SummarySum>
                        </CalculationContainer>
                    </PriceCalculationsContainer>
                    <CalculationContainer>
                        <SummarySpan>grand total</SummarySpan>
                        <SummaryGrandTotal>$ {calculateGrandTotal(cart)}</SummaryGrandTotal>
                    </CalculationContainer>
                </>
            ) : (
                <>
                    <SummaryTitle>Your cart is empty</SummaryTitle>
                    <Paragraph
                        text="continue shopping?"
                        textColor="#979797"
                    />
                </>
            )}
            {cart.length > 0 ? (
                <Button
                    text="continue & pay"
                    fontWeight="600"
                    backgroundColor="#D87D4A"
                    borderColor="transparent"
                    textColor="#FFF"
                    type="submit"
                />
            ) : (
                <Link to="/">
                    <Button
                        text="back to home"
                        fontWeight="600"
                        backgroundColor="#D87D4A"
                        borderColor="transparent"
                        textColor="#FFF"
                    />
                </Link>
            )}

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