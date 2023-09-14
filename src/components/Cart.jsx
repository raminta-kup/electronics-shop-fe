import { styled } from "styled-components"
import { BasketProduct } from "./checkout/BasketProduct"
import { SummarySpan, SummarySum } from "./checkout/BasketProductSummary"
import ReactDOM from "react-dom"
import { Overlay } from "./Overlay"
import { devices } from "../ScreenSizes/screenSizes"
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom";
import CartContext from "../CartContext"

export const Cart = ({ open, setIsOpen }) => {
    const location = useLocation();
    const { cart, setCart, calculateTotal } = useContext(CartContext);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open])

    useEffect(() => {
        if (open) {
            setIsOpen(false);
        }

    }, [location])

    const handleRemoveAllProducts = () => {
        localStorage.removeItem("cart");
        setCart([]);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    if (!open) return null

    return ReactDOM.createPortal(
        <Overlay>
            <CartContainer>
                <CartAndRemoveBtnContainer>
                    <CartTitle>cart ({cart.length === 0 ? "0" : cart.reduce((sum, item) => sum + item.quantity, 0)})</CartTitle>
                    {cart.length > 0 && (
                        <RemoveBtn
                            onClick={handleRemoveAllProducts}
                        >
                            Remove all
                        </RemoveBtn>
                    )}
                </CartAndRemoveBtnContainer>
                <BasketProductsContainer>
                    {cart.map((item) => {
                        return (
                            <BasketProduct key={item?.product.id} product={item?.product} quantity={item?.quantity} />
                        )
                    })}
                </BasketProductsContainer>
                <CalculationsContainer>
                    <SummarySpan>total</SummarySpan>
                    <SummarySum>
                        $ {calculateTotal(cart)}
                    </SummarySum>
                </CalculationsContainer>
                <CheckoutLink to="/checkout" onClick={handleCloseModal}>
                    checkout
                </CheckoutLink>
            </CartContainer>
        </Overlay >,
        document.getElementById("portal")
    )
}


const CheckoutLink = styled(Link)`
    display: block;
    width: 100%;
    text-align: center;
    background-color: #D87D4A;
    font-weight: 700;
    text-decoration: none;
    color: #FFF;
    font-size: 14px;
    padding: 16px 0;
    text-transform: uppercase;
    &:hover {
        background-color: #FBAF85;
    }
`

const CartContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border-radius: 8px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    width: 70%;
    max-width: 360px;
    @media ${devices.laptop} {
        top: 40%;
        left: 80%;
    }
`

const CartTitle = styled.span`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
`

const BasketProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const RemoveBtn = styled.button`
    border: transparent;
    color: #808080;
    text-decoration: underline;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
`

const CartAndRemoveBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const CalculationsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

