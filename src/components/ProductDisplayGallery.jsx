import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"

export const ProductDisplayGallery = ({ product }) => {

    return (
        <GalleryContainer>
            <GalleryPhotoGroup>
                <GalleryImgRectangle src={product?.gallery.first.mobile}></GalleryImgRectangle>
                <GalleryImgRectangle src={product?.gallery.second.mobile}></GalleryImgRectangle>
            </GalleryPhotoGroup>
            <GalleryImgSquare src={product?.gallery.third.mobile}></GalleryImgSquare>
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
    object-fit: cover;
    width: 100%;
    height: 100%;
    
`
const GalleryImgSquare = styled.img`
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    @media ${devices.tablet} {
        width: 50%;
}
`