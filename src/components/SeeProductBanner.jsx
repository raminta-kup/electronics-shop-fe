import { styled } from "styled-components"
import { SeeProductTitleBtn } from "./SeeProduct"
import speakersOnTable from "../assets/shared/desktop/Bitmap.png"
import { devices } from "../ScreenSizes/screenSizes"
import { useEffect, useState } from "react"

export const SeeProductBanner = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/speakers/zx7-speaker`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            })
    }, []);

    return (
        <ProductBannerContainer key={[product?.slug]} >
            <SeeProductTitleBtn
            text={product?.name}
            to={`${product?.category}/${product?.slug}`}
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