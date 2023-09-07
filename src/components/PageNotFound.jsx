import styled from "styled-components"
import { Link } from "react-router-dom"
import { Wrapper } from "./Wrapper"
import { devices } from "../ScreenSizes/screenSizes"

export const PageNotFound = () => {

    return (
        <Wrapper>
            <PageNotFoundWrapper>
                <PageNotFoundImg src="https://static.vecteezy.com/system/resources/previews/004/447/618/original/design-layout-for-the-404-error-page-not-found-with-a-silhouette-of-a-cat-on-the-background-of-a-window-vector.jpg" />
                <PageNotFoundH1>Ooooops, you're probably lost</PageNotFoundH1>
                <PageNotFoundPar>We're afraid there is nothing here. Please go back to our main page
                    <StyledLink to="/"> HERE</StyledLink>
                </PageNotFoundPar>
            </PageNotFoundWrapper>
        </Wrapper>
    )
}

const PageNotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 90px);
`

const PageNotFoundImg = styled.img`
    width: 80%;
    @media ${devices.laptop} {
        width: 60%;
    }
`

const PageNotFoundH1 = styled.h1`
    font-size: 30px;
    font-weight: 800;
`

const PageNotFoundPar = styled.p`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
`

const StyledLink = styled(Link)`
    color: black;
`
