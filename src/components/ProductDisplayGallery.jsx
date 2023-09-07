import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"

export const ProductDisplayGallery = () => {
    return (
        <GalleryContainer>
            <GalleryPhotoGroup>
                <GalleryImgRectangle src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/desktop/image-gallery-1.jpg"></GalleryImgRectangle>
                <GalleryImgRectangle src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/desktop/image-gallery-2.jpg"></GalleryImgRectangle>
            </GalleryPhotoGroup>
            <GalleryImgSquare src="https://audiophile-ecommerce-mbart13.vercel.app/images/product-zx9-speaker/desktop/image-gallery-3.jpg"></GalleryImgSquare>
        </GalleryContainer>
    )
}

const GalleryContainer = styled.div`
    display: flex;
    gap: 18px;
    flex-direction: column;
    @media ${devices.tablet} {
    flex-direction: row;
    }
`

const GalleryPhotoGroup = styled.div`
        display: flex;
        flex-direction: column;
        gap: 18px;
    @media ${devices.tablet} {
        display: flex;
        flex-direction: column;
        width: 50%;
    }

`

const GalleryImgRectangle = styled.img`
    aspect-ratio: 2 / 1;
    width: 100%;
    border-radius: 8px;
`
const GalleryImgSquare = styled.img`
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: 8px;
    @media ${devices.tablet} {
        width: 50%;
}
`