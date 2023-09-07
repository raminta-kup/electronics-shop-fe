import { styled } from "styled-components"
import { SeeProductTitleBtn } from "./SeeProduct"
import speakersOnTable from "../assets/shared/desktop/Bitmap.png"
import { devices } from "../ScreenSizes/screenSizes"

export const SeeProductBanner = ({text}) => {
    return (
        <ProductBannerContainer>
            <SeeProductTitleBtn
                text={text}
            />

        </ProductBannerContainer>
    )
}

const ProductBannerContainer = styled.div`
    background-image: url(${speakersOnTable});
    background-size: cover;
    background-position: center;
    padding: 60px 30px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    background-repeat: no-repeat;
    @media ${devices.tablet} {
        padding: 100px;
    }
    @media ${devices.laptop} {
        width: 100%;
    }
`