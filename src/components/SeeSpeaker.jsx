import { styled } from "styled-components"
import { StyledProductTitle } from "./NewProductBanner"
import { Button } from "./buttons/Button"
import { devices } from "../ScreenSizes/screenSizes"

export const SeeSpeaker = () => {
    return (
        <SeeSpeakerContainer>
            <SpeakerImgContainer>
                <SpeakerImg src="https://audiophile-e.netlify.app/images/shared/desktop/image-speakers.png" />
            </SpeakerImgContainer>
            <ProductInfoContainer>
                <StyledProductTitle>ZX9 SPEAKER</StyledProductTitle>
                <ProductPar>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</ProductPar>
                <Button
                    backgroundColor="#000000"
                    textColor="#FFF"
                    text="see product"
                    borderColor="transparent"
                    hoverBackground="#4C4C4C"
                />
            </ProductInfoContainer>
        </SeeSpeakerContainer>
    )
}

const ProductPar = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    @media ${devices.laptop} {
        text-align: left;
    }
`

const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 70%;
    @media ${devices.laptop} {
        width: 30%;
        align-items: flex-start;
        gap: 50px;
    }
`

const SeeSpeakerContainer = styled.div`
    background-color: #D87D4A;
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    @media ${devices.laptop} {
        flex-direction: row;
        width: 100%;
        padding: 80px 0;
        gap: 24px;
        justify-content: space-around;
    }
`
const SpeakerImgContainer = styled.div`
    margin-bottom: -80px;
    @media ${devices.laptop} {
        margin-bottom: -120px;
    }
`
const SpeakerImg = styled.img`
    width: 100%;
    @media ${devices.laptop} {
        width: 120%;
    }

`
