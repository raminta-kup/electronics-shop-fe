import { styled } from "styled-components";
import { CheckoutSection } from "./CheckoutSection";
import { FormInput } from "./FormInput";
import { RadioInput } from "./RadioInput";
import { BasketProductSummary } from "./BasketProductSummary";
import { GoBackLink } from "../../components/buttons/GoBackLink";
import { Wrapper } from "../Wrapper";
import { FormInputGroup } from "./FormInputGroup";
import { devices } from "../../ScreenSizes/screenSizes";
import { useContext, useState } from "react";
import { OrderConfirmationModal } from "./OrderConfirmationModal";
import { useNavigate } from "react-router-dom";
import CartContext from "../../CartContext";


export const Checkout = () => {
    const { cart } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const [confirmationCart, setConfirmationCart] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        postCode: "",
        city: "",
        country: "",
        paymentMethod: undefined,
        eMoneyNumber: undefined,
        eMoneyPin: undefined
    })

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
        navigate("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const cartCopy = [...cart];
        setIsOpen(true);
        setConfirmationCart(cartCopy);
        localStorage.removeItem("cart");
    }

    return (
        <Wrapper
            backgroundColor="#F1F1F1"
            wrapperBackgroundColor="#F1F1F1"
            margin="0"
        >
            <CheckoutWrapper>
                <GoBackLink
                    to="/"
                    text="Go back"
                />
                <FormContainer>
                    <CheckoutTitle>checkout</CheckoutTitle>
                    <StyledCheckoutForm onSubmit={handleSubmit}>
                        <SectionsContainer>
                            <CheckoutSection sectionTitle="billing details">
                                <FormInputGroup>
                                    <FormInput
                                        forHtml="fullName"
                                        text="Full Name"
                                        placeholder="Full Name"
                                        type="text"
                                        name="fullName"
                                        onChange={handleOnChange}
                                        id="fullName"
                                    />
                                    <FormInput
                                        forHtml="email"
                                        text="Email"
                                        placeholder="alexei@mail.com"
                                        type="email"
                                        name="email"
                                        onChange={handleOnChange}
                                        id="email"
                                    />
                                </FormInputGroup>
                                <FormInput
                                    forHtml="phoneNumber"
                                    text="Phone Number"
                                    placeholder="+1 202-555-0136"
                                    type="tel"
                                    name="phoneNumber"
                                    onChange={handleOnChange}
                                    id="phoneNumber"
                                />
                            </CheckoutSection>
                            <CheckoutSection sectionTitle="shipping info">
                                <FormInput
                                    forHtml="address"
                                    text="Your Address"
                                    placeholder="1137 Williams Avenue"
                                    type="address"
                                    name="address"
                                    onChange={handleOnChange}
                                    id="address"
                                />
                                <FormInputGroup>
                                    <FormInput
                                        forHtml="postCode"
                                        text="Post Code"
                                        placeholder="10001"
                                        type="text"
                                        name="postCode"
                                        onChange={handleOnChange}
                                        id="postCode"
                                    />
                                    <FormInput
                                        forHtml="city"
                                        text="City"
                                        placeholder="New York"
                                        type="text"
                                        name="city"
                                        onChange={handleOnChange}
                                        id="city"
                                    />
                                </FormInputGroup>
                                <FormInput
                                    forHtml="country"
                                    text="Country"
                                    placeholder="United States"
                                    type="text"
                                    name="country"
                                    onChange={handleOnChange}
                                    id="country"
                                />
                            </CheckoutSection>
                            <CheckoutSection sectionTitle="payment details">
                                <SectionHeading>Payment Method</SectionHeading>
                                <FormInputGroup>
                                    <RadioInput
                                        heading="payment method"
                                        text="e-Money"
                                        forHtml="eMoney"
                                        name="paymentMethod"
                                        id="eMoney"
                                        onChange={handleOnChange}
                                    />
                                    <RadioInput
                                        text="cash on delivery"
                                        forHtml="cashOnDelivery"
                                        name="paymentMethod"
                                        id="cashOnDelivery"
                                        onChange={handleOnChange}
                                    />
                                </FormInputGroup>
                                <FormInputGroup>
                                    <FormInput
                                        forHtml="eMoneyNumber"
                                        text="e-Money Number"
                                        placeholder="238521993"
                                        type="number"
                                        name="eMoneyNumber"
                                        onChange={handleOnChange}
                                        id="eMoneyNumber"
                                    />
                                    <FormInput
                                        forHtml="eMoneyPin"
                                        text="e-Money PIN"
                                        placeholder="6891"
                                        type="number"
                                        name="eMoneyPin"
                                        onChange={handleOnChange}
                                        id="eMoneyPin"
                                    />
                                </FormInputGroup>
                            </CheckoutSection>
                        </SectionsContainer>
                        <BasketProductSummary />
                    </StyledCheckoutForm>
                </FormContainer>
            </CheckoutWrapper>
            <OrderConfirmationModal open={isOpen} onClose={handleClose} confirmationCart={confirmationCart} />
        </Wrapper>
    )
}

const CheckoutTitle = styled.h1`
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 700;
`

const StyledCheckoutForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    @media ${devices.laptop} {
        flex-direction: row;
    }
`

const SectionHeading = styled.h3`
    font-size: 14px;
    font-weight: 700;
`

const SectionsContainer = styled.div`
    background-color: #FFF; 
    padding: 50px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media ${devices.laptop} {
        width: 100%;
    }
`

const FormContainer = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`
const CheckoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 38px;
    padding: 60px 0;
`
