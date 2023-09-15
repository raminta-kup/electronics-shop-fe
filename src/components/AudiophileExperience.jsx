import { styled } from "styled-components"
import { Paragraph } from "./Paragraph"
import { devices } from "../ScreenSizes/screenSizes"

export const AudiophileExperience = () => {
    return (
        <AudiophileExperienceContainer>
            <AudiophileExperienceImgContainer />
            <AudiophileExperienceInfoContainer>
                <AudiophileExperienceHeading>Bringing you the <AudiophileHeadingWord>best</AudiophileHeadingWord> audio gear</AudiophileExperienceHeading>
                <Paragraph
                    textAlign="center"
                    tabletTextAlign="center"
                    textColor="#979797"
                    text="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
                />
            </AudiophileExperienceInfoContainer>
        </AudiophileExperienceContainer>
    )
}

const AudiophileExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media ${devices.tablet} {
        gap: 50px;
    }
    @media ${devices.laptop} {
        flex-direction: row-reverse;
        gap: 100px;
    }
    
`
const AudiophileExperienceImgContainer = styled.div`
    aspect-ratio: 1 / 1;
    height: auto;
    background-size: cover;
    max-height: 500px;
    border-radius: 8px;
    background-image: url("https://audiophile-ecommerce-mbart13.vercel.app/images/shared/mobile/image-best-gear.jpg");
    @media ${devices.mobileL} {
        aspect-ratio: 2 / 1;
        max-height: 400px;
        background-repeat: no-repeat;
        background-image: url("https://audiophile-ecommerce-mbart13.vercel.app/images/shared/tablet/image-best-gear.jpg");
    }
    @media ${devices.laptop} {
        display: flex;
        flex: 1;
        aspect-ratio: 1 / 1;
        background-position: center;
    }
`
const AudiophileExperienceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
        @media ${devices.laptop} {
        display: flex;
        flex: 1;
        gap: 24px;
        align-items: flex-start;
        justify-content: center;
    }
`

const AudiophileExperienceHeading = styled.h2`
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    @media ${devices.laptop} {
        text-align: left;
    }
`
const AudiophileHeadingWord = styled.span`
    color: #D87D4A;
    text-transform: uppercase;
`