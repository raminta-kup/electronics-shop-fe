import { styled } from "styled-components";
import { Paragraph } from "./Paragraph"
import { Button } from "./buttons/Button"
import { devices } from "../ScreenSizes/screenSizes";
import { useState } from "react";
import { OrderConfirmationModal } from "./checkout/OrderConfirmationModal";

export const NewProductBanner = ({ product, onClick }) => {

    return (
        <NewProductBannerWrapper>
            <NewProductBannerContainer>
                <BannerInfoContainer>
                    <NewProductInfoContainer>
                        <StyledNewProductHeadline>new product</StyledNewProductHeadline>
                        <StyledProductTitle>
                            XX99 Mark II Headphones
                        </StyledProductTitle>
                        <Paragraph
                            fontWeight="200"
                            textColor="#F1F1F1"
                            text="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
                        />
                    </NewProductInfoContainer>
                    <Button
                        onClick={onClick}
                        backgroundColor="#D87D4A"
                        textColor="white"
                        borderColor="transparent"
                        text="see product"
                        hoverBackground="#FBAF85"
                    />
                </BannerInfoContainer>
                <StyledNewProductImg src="https://images.ctfassets.net/febpdaznqgsb/ZL2XSH6jhsCoXDC3uiTE2/b5b0f9876afd43a3fa488b22a032925b/image-product-test2-removebg.png" />
            </NewProductBannerContainer>
        </NewProductBannerWrapper>
    )
}

const NewProductBannerWrapper = styled.div`
    width: 100%;
    background-color: #0E0E0E;
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
`

const NewProductBannerContainer = styled.div`
    padding: 80px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
    @media ${devices.tablet} {
        padding: 120px 0;
    }
    @media ${devices.laptop} {
        flex-direction: row;
        width: 70%;
        overflow: visible;
    }
`
const BannerInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    @media ${devices.laptop} {
        width: 70%;   
        align-items: flex-start;
    }
    @media ${devices.laptopL} {
        width: 60%;   
        align-items: flex-start;
    }
`

const NewProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    z-index: 1;
    width: 70%;

    @media ${devices.laptop} {
        align-items: flex-start;
    }
`

const StyledNewProductHeadline = styled.span`
    color: #ffffff9d;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 200;
`
export const StyledProductTitle = styled.h2`
    color: #FFFFFF;
    font-weight: 800;
    font-size: 34px;
    text-transform: uppercase;
    text-align: center;
    line-height: 46px;
    letter-spacing: 2px;
    @media ${devices.laptop} {
        text-align: left;
    }
`

const StyledNewProductImg = styled.img`
    position: absolute;
    max-width: 100%;
    max-height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    @media ${devices.laptop} {
        left: 80%;
    }
    @media ${devices.laptopL} {
        left: 70%;
    }
`