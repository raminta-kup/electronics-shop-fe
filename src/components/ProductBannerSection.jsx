import { styled } from "styled-components"
import { SeeSpeaker } from "./SeeSpeaker"
import { SeeProductBanner } from "./SeeProductBanner"
import { SeeProductTitleBtn } from "./SeeProduct"
import yx1Earphones from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
import { devices } from "../ScreenSizes/screenSizes"
import { useEffect, useState } from "react"

export const ProductBannerSection = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/earphones/yx1-earphones`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            })
    }, [])

    return (
        <BannerSection>
            <SeeSpeaker />
            <SeeProductBanner />
            <BannerContainer>
                <StyledImg src={yx1Earphones} />
                <SeeProductTitleBtnContainer>
                    <SeeProductTitleBtn
                        text={product?.name}
                        to={`/${product?.category}/${product?.slug}`}
                    />
                </SeeProductTitleBtnContainer>
            </BannerContainer>
        </BannerSection>
    )
}

const BannerSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`

const BannerContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border-radius: 8px;
    flex-direction: column;
    gap: 20px;

    @media ${devices.tablet} {
        flex-direction: row;
    }
    @media ${devices.laptop} {
        width: 100%;
    }

`
const SeeProductTitleBtnContainer = styled.div`
    border-radius: 8px;
    padding: 40px 0 40px 30px;
    width: 100%;
    background-color: #F1F1F1;
    box-sizing: border-box;
    align-self: stretch;
    display: flex;
    align-items: center;

    @media ${devices.tablet} {
        width: 50%;
    }
`

const StyledImg = styled.img`
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 2 / 1;
    @media ${devices.tablet} {
        width: 50%;
        height: auto;
        aspect-ratio: 1 / 1;
    }
    @media ${devices.laptop} {
        aspect-ratio: 2 / 1;
    }
`