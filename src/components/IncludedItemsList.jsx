import { styled } from "styled-components"
import { devices } from "../ScreenSizes/screenSizes"

export const IncludedItemsList = ({ product }) => {

    return (
        <StyledList>
            {product?.includes.map(item => {
                
                return (
                    <StyledListItemContainer key={item._id}>
                        <StyledListItemQuantity>{item.quantity}x</StyledListItemQuantity>
                        <StyledListItem>{item.item}</StyledListItem>
                    </StyledListItemContainer>
                )
            })}
        </StyledList>
    )
}

const StyledListItemContainer = styled.li`
    display: flex;
    gap: 16px;
`

const StyledList = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 12px;
    @media ${devices.tablet} {
        width: 50%;
    }
    @media ${devices.laptop} {
        width: 100%;
    }
`

const StyledListItemQuantity = styled.span`
    color: #D87D4A;
    font-weight: 600;
`
const StyledListItem = styled.span`
    color: #979797;
    font-size: 16px;
`