import { styled } from "styled-components"
import { CheckoutSection } from "./CheckoutSection"
import { FormInput } from "./FormInput"
import { RadioInput } from "./RadioInput"
import { BasketProductSummary } from "./BasketProductSummary"
import { GoBackLink } from "../../components/buttons/GoBackLink"
import { Wrapper } from "../Wrapper"
import { FormInputGroup } from "./FormInputGroup"
import { devices } from "../../ScreenSizes/screenSizes"
import { useState } from "react"
import { OrderConfirmationModal } from "./OrderConfirmationModal"
import { useNavigate } from "react-router-dom"


export const Checkout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
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

        if (e.target.value === "on") {
            console.log(e.target.id)
        }

        // copied form data and then assigned the names to values ?
    }

    const handleClose = () => {
        console.log("handleclose")
        setIsOpen(false);
        navigate("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(true);
        // fetch post 
    }

    return (
        <Wrapper
            backgroundColor="#F1F1F1"
            wrapperBackgroundColor="#F1F1F1"
            margin="0"
        >
            <CheckoutWrapper>
                <GoBackLink
                    to="/home"
                    text="Go back"
                />
                <FormContainer>
                    <CheckoutTitle>checkout</CheckoutTitle>
                    <StyledCheckoutForm onSubmit={handleSubmit}>
                        <SectionsContainer>
                            <CheckoutSection sectionTitle="billing details">
                                <FormInputGroup>
                                    <FormInput
                                        forName="fullName"
                                        text="Full Name"
                                        placeholder="Full Name"
                                        type="text"
                                        name="fullName"
                                        onChange={handleOnChange}
                                        id="fullName"
                                    />
                                    <FormInput
                                        forName="email"
                                        text="Email"
                                        placeholder="alexei@mail.com"
                                        type="email"
                                        name="email"
                                        onChange={handleOnChange}
                                        id="email"
                                    />
                                </FormInputGroup>
                                <FormInput
                                    forName="phoneNumber"
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
                                    forName="address"
                                    text="Your Address"
                                    placeholder="1137 Williams Avenue"
                                    type="address"
                                    name="address"
                                    onChange={handleOnChange}
                                    id="address"
                                />
                                <FormInputGroup>
                                    <FormInput
                                        forName="postCode"
                                        text="Post Code"
                                        placeholder="10001"
                                        type="text"
                                        name="postCode"
                                        onChange={handleOnChange}
                                        id="postCode"
                                    />
                                    <FormInput
                                        forName="city"
                                        text="City"
                                        placeholder="New York"
                                        type="text"
                                        name="city"
                                        onChange={handleOnChange}
                                        id="city"
                                    />
                                </FormInputGroup>
                                <FormInput
                                    forName="country"
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
                                        forName="eMoney"
                                        name="paymentMethod"
                                        id="eMoney"
                                        onChange={handleOnChange}
                                        isChecked={isChecked}

                                    />
                                    <RadioInput
                                        text="cash on delivery"
                                        forName="cashOnDelivery"
                                        name="paymentMethod"
                                        id="cashOnDelivery"
                                        onChange={handleOnChange}
                                        isChecked={isChecked}

                                    />
                                </FormInputGroup>
                                <FormInputGroup>
                                    <FormInput
                                        forName="eMoneyNumber"
                                        text="e-Money Number"
                                        placeholder="238521993"
                                        type="number"
                                        name="eMoneyNumber"
                                        onChange={handleOnChange}
                                        id="eMoneyNumber"
                                    />
                                    <FormInput
                                        forName="eMoneyPin"
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
            <OrderConfirmationModal open={isOpen} onClose={handleClose} />
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
