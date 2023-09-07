import { styled } from "styled-components";
import logo from "../assets/icons/audiophile.png";
import { NavList } from "./NavList";
import { Paragraph } from "./Paragraph";
import fbIcon from "../assets/icons/fb.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import igIcon from "../assets/icons/ig.svg";
import { devices } from "../ScreenSizes/screenSizes";
import { Wrapper } from "./Wrapper";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <StyledFooter>
            <Wrapper
                backgroundColor="#191919"
                wrapperBackgroundColor="#191919"
                gap="50px"
                margin="0"
            >
                <StyledFooterParContainer>
                    <Link 
                    to="/"
                    target="_top"
                    >
                        <StyledImg
                            src={logo}
                            alt="audiophile-logo"
                        />
                    </Link>
                    <NavList
                        flexDirection="column"
                        gap={16}
                    />
                </StyledFooterParContainer>
                <Paragraph
                    textAlign="center"
                    text="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week."
                    lineHeight="26px"
                    opacity="0.5"
                />
                <FooterLowerContainer>
                    <Paragraph
                        fontWeight="600"
                        text="Copyright 2023. All Rights Reserved"
                    />
                    <IconContainer>
                        <a 
                        href="https://facebook.com"
                        target="_blank"
                        >
                            <img src={fbIcon} alt="facebook logo icon" />
                        </a>
                        <a 
                        href="https://twitter.com"
                        target="_blank"
                        >
                            <img src={twitterIcon} alt="twitter logo icon" />
                        </a>
                        <a 
                        href="https://instagram.com"
                        target="_blank"
                        >
                            <img src={igIcon} alt="instagram logo icon" />
                        </a>
                    </IconContainer>
                </FooterLowerContainer>
            </Wrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer` 
    background-color: #191919;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    gap: 46px;

    @media ${devices.tablet} {
        align-items: flex-start;
        padding: 60px 0;
    }
    @media ${devices.tablet} {
        align-items: stretch;
        padding: 60px 0;
    }
`

const StyledImg = styled.img`
    width: 143px;
`

const StyledFooterParContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    @media ${devices.tablet} {
        align-items: flex-start;
    }
    @media ${devices.laptop} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

const IconContainer = styled.div`
    display: flex;
    gap: 16px;
`

const FooterLowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 46px;
    align-items: center;

    @media ${devices.tablet} {
        flex-direction: row;
        justify-content: space-between;
    }
    @media ${devices.laptop} {
        
    }
`



