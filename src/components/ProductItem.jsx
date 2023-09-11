import { styled } from "styled-components";
import { Paragraph } from "./Paragraph"
import { Button } from "./buttons/Button";
import { devices } from "../ScreenSizes/screenSizes";
import { Link, useNavigate } from "react-router-dom";

export const ProductItem = ({ product, flexDirection }) => {
    const navigate = useNavigate();
    const { id, name, image, new: isNew, description, category, slug } = product;

    return (
        <StyledProductItemContainer
            key={slug}
            flexDirection={flexDirection}
        >
            <StyledImageContainer>
                <StyledProductImage
                    src={image.mobile}
                />
            </StyledImageContainer>
            <StyledProductInfoContainer>
                {isNew &&
                    (<StyledNewProductHeadline>
                        new product
                    </StyledNewProductHeadline>)
                }
                <StyledProductName>
                    {name}
                </StyledProductName>
                <Paragraph
                    text={description}
                    textColor="#979797"
                    textAlign="center"
                    tabletTextAlign="center"
                />
                <Link
                to={`/${category}/${slug}`}
                target="_top"
                >
                    <Button
                        backgroundColor="#D87D4A"
                        textColor="white"
                        borderColor="transparent"
                        text="see product"
                        hoverBackground="#FBAF85"
                    />
                </Link>
            </StyledProductInfoContainer>
        </StyledProductItemContainer>
    )
}

export const StyledProductItemContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 34px;
    padding: 20px 0;

    @media ${devices.laptop} {
        flex-direction: ${props => props.$flexDirection || "row"};
        box-sizing: border-box;
        gap: 100px;
        
        &:nth-child(2) {
        flex-direction: row-reverse;
    }
    }
`

export const StyledProductImage = styled.img`
    width: 100%;
    object-fit: contain;
    border-radius: 8px;
    @media ${devices.laptop} {
    }
`
export const StyledImageContainer = styled.div`
    width: 100%;
    background-color: gray;
    display: flex;
    justify-content: center;
    background-color: #f1f1f1;
    height: 352px;
    border-radius: 8px;
    @media ${devices.tablet} {
        width: 100%;
    }
    @media ${devices.laptop} {
        flex: 1;
        aspect-ratio: 1/1;
        height: auto;
    }
`

export const StyledNewProductHeadline = styled.h2`
    color: #D87D4A;
    letter-spacing: 8px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
`

export const StyledProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 34px;
    @media ${devices.laptop} {
        align-items: flex-start;
        flex: 1;
        box-sizing: border-box;
    }
`

export const StyledProductName = styled.h2`
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    line-height: 36px;
    text-transform: uppercase;
    @media ${devices.laptop} {
        text-align: left;
    }
`

