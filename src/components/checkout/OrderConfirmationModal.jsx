import { styled } from "styled-components"
import confirmationIcon from "../../assets/checkout/icon-order-confirmation.svg"
import { Paragraph } from "../Paragraph"
import { BasketProduct } from "./BasketProduct"
import { devices } from "../../ScreenSizes/screenSizes"
import { Link } from "react-router-dom"
import ReactDOM from "react-dom"
import { useContext, useEffect } from "react"
import { Overlay } from "../Overlay"
import CartContext from "../../CartContext"

export const OrderConfirmationModal = ({ open, onClose }) => {
    const { cart, calculateGrandTotal, setCart } = useContext(CartContext);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open])

    if (!open) return null

    return ReactDOM.createPortal(
        <Overlay>
            <ConfirmationModalContainer>
                <ConfirmationImg src={confirmationIcon} />
                <ModalTitle>thank you<br />for your order</ModalTitle>
                <Paragraph
                    text="you will receive an email confirmation shortly."
                    textColor="#979797"
                    fontWeight="600"
                    textAlign="left"
                />
                <ModalItemsOrderedContainer>
                    <Container>
                        <div>
                            <BasketProduct quantity="1" product={cart[0].product} />
                        </div>
                        {cart.length > 1 && (
                            <>
                                <ModalLine></ModalLine>
                                <MoreItemsContainer>
                                    <MoreItemsSpan>and {cart.reduce((sum, item) => sum + item.quantity, 0) - 1} other item (s)</MoreItemsSpan>
                                </MoreItemsContainer>
                            </>
                        )}
                    </Container>
                    <GrandTotalContainer>
                        <GrandTotalSpan>grand total</GrandTotalSpan>
                        <ConfirmationSum>$ {calculateGrandTotal(cart)}</ConfirmationSum>
                    </GrandTotalContainer>
                </ModalItemsOrderedContainer>
                <StyledLink
                    // to="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        setCart([]);
                        localStorage.removeItem("cart");
                    }}
                >
                    back to home
                </StyledLink>
            </ConfirmationModalContainer>
        </Overlay>,
        document.getElementById("portal")
    )
}

const StyledLink = styled(Link)`
    background-color: #D87D4A;
    font-weight: 700;
    text-decoration: none;
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    padding: 14px 0;
`

const ConfirmationModalContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    padding: 40px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 540px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    width: 70%;

    @media ${devices.tablet} {
        gap: 40px;
    }
`

const MoreItemsSpan = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: #989898;
`

const ConfirmationImg = styled.img`
    height: 64px;
    width: 64px;
`

const ModalTitle = styled.h2`
    font-size: 30px;
    line-height: 28px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 34px;
    @media ${devices.tablet} {
        font-size: 34px;
    }
`

const ModalItemsOrderedContainer = styled.div`
    border-radius: 8px;

    @media ${devices.tablet} {
        display: flex;
    }
`

const Container = styled.div`
    background-color: #F1F1F1;
    border-radius: 8px 8px 0 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media ${devices.tablet} {
        border-radius: 8px 0 0 8px;
        flex: 1;
    }
`

const ConfirmationSum = styled.span`
    color: #FFF;
    font-weight: 700;
    font-size: 18px;
`
const ModalLine = styled.div`
    height: 1px;
    background-color: #979797;
`

const MoreItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

const GrandTotalSpan = styled.span`
    font-size: 16px;
    text-transform: uppercase;
    color: #979797;
    font-weight: 400;
`

const GrandTotalContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 0 0 8px 8px;
    padding: 30px;

    @media ${devices.tablet} {
        border-radius: 0 8px 8px 0;
        justify-content: center;
    }
`