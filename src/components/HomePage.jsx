import { ProductCategoryList } from "./ProductCategoryList"
import { NewProductBanner } from "./NewProductBanner"
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
