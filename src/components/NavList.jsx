import { styled } from "styled-components";
import { devices } from "../ScreenSizes/screenSizes";
import { Link } from "react-router-dom";

export const NavList = ({ flexDirection, gap, display }) => {
    return (
        <StyledNav $display={display}>
            <StyledNavList $flexDirection={flexDirection} $gap={gap}>
                <li>
                    <StyledListItem to="/">home</StyledListItem>
                </li>
                <li>
                    <StyledListItem to="/headphones">headphones</StyledListItem>
                </li>
                <li>
                    <StyledListItem to="/speakers">speakers</StyledListItem>
                </li>
                <li>
                    <StyledListItem to="/earphones">earphones</StyledListItem>
                </li>
            </StyledNavList>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    display: ${props => props.$display || "block"};

    @media ${devices.laptop} {
          display: flex;
          justify-content: center;
          align-items: center;
        }
`

export const StyledNavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 30px;
    flex-direction: ${props => props.$flexDirection || "row"};
    gap: ${props => props.$gap || "200px"};
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    text-align: center;

    @media ${devices.tablet} {
        flex-direction: row;
    }
`

const StyledListItem = styled(Link)`
    cursor: pointer;
    font-weight: 600;
    color: white;
    text-decoration: none;
    &:hover {
        color: #D87D4A;
    }
    &:focus {
        color: #D87D4A;
    }
`