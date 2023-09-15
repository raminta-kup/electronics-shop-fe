import { styled } from "styled-components"
import { BasketProduct } from "./checkout/BasketProduct"
import { SummarySpan, SummarySum } from "./checkout/BasketProductSummary"
import ReactDOM from "react-dom"
import { devices } from "../ScreenSizes/screenSizes"
import { Link } from "react-router-dom"
import { useContext, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom";
import CartContext from "../CartContext"
import { Paragraph } from "./Paragraph"

export const Cart = ({ open, setIsOpen, onClose }) => {
    const location = useLocation();
    const ref = useRef(null);
    const { cart, setCart, calculateTotal } = useContext(CartContext);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target) && open) {
                onClose()
            }
        }
        document.addEventListener("click", checkIfClickedOutside, true)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside, true)
        }
    }, [onClose])

    useEffect(() => {
        if (open) {
            setIsOpen(false);
        }

    }, [location]);

    const handleRemoveAllProducts = (e) => {
        localStorage.removeItem("cart");
        setCart([]);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    if (!open) return null

    return ReactDOM.createPortal(
        <CartOverlay>
            <CartContainer ref={ref}>
                <CartAndRemoveBtnContainer>
                    <CartTitle>cart ({cart.length === 0 ? 0 : cart.reduce((sum, item) => sum + item.quantity, 0)})</CartTitle>
                    {cart.length > 0 && (
                        <RemoveBtn
                            onClick={handleRemoveAllProducts}
                        >
                            Remove all
                        </RemoveBtn>
                    )}
                </CartAndRemoveBtnContainer>
                {cart.length > 0 ? (
                    <>
                        <BasketProductsContainer>
                            {cart.map((item) => {
                                return (
                                    <BasketProduct key={item?.product.slug} product={item?.product} quantity={item?.quantity} />
                                )
                            })}
                        </BasketProductsContainer>
                        <CalculationsContainer>
                            <SummarySpan>total</SummarySpan>
                            <SummarySum>
                                $ {parseFloat(calculateTotal(cart)).toFixed(2)}
                            </SummarySum>
                        </CalculationsContainer>
                    </>
                ) :
                    <Paragraph
                        text="your cart is empty"
                        textColor="#979797"
                    />
                }
                <CheckoutLink
                    to={cart.length > 0 ? "/checkout" : null}
                    onClick={handleCloseModal}
                >
                    {cart.length > 0 ? "checkout" : "close"}
                </CheckoutLink>
            </CartContainer>
        </CartOverlay>,
        document.getElementById("portal")
    )
}


const CartOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0000006a;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`

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
    position: relative;
    z-index: 1001;
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
    max-width: 380px;
    min-height: 140px;
    max-height: 400px;
    @media ${devices.laptop} {
        top: 340px;
        left: 64%;
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
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 20px 0 0;
    min-height: 70px;
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

