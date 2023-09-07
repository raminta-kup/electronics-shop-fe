import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"
import { ProductCategoryList } from "./ProductCategoryList"
import { NewProductBanner } from "./NewProductBanner"
import { SeeSpeaker } from "./SeeSpeaker"
import { SeeProductBanner } from "./SeeProductBanner"
import { ProductBannerSection } from "./ProductBannerSection"
import { AudiophileExperience } from "./AudiophileExperience"
import { Wrapper } from "./Wrapper"

export const HomePage = () => {
    return (
        <>
            <NewProductBanner />
            <Wrapper>
                <ProductCategoryList />
                <ProductBannerSection />
                <AudiophileExperience />
            </Wrapper>
        </>
    )
}
