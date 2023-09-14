import { styled } from "styled-components";
import { NavList } from "./NavList";
import logo from "../assets/icons/audiophile.png";
import shoppingCart from "../assets/icons/Combined Shape.png"
import { Hamburger } from "./buttons/Hamburger";
import { devices } from "../ScreenSizes/screenSizes";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Cart } from "./Cart";
import { Menu } from "./buttons/Menu";
import CartContext from "../CartContext";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(CartContext);

    const handleOpenCart = () => {
        setIsOpen(true);

    }
    const handleOpenMenu = () => {
        setMenuOpen(true);
    }

    return (
        <HeaderWrapper>
            <StyledHeaderContainer>
                <StyledHamburgerBtn
                    onClick={handleOpenMenu}
                >
                    <Hamburger />
                </StyledHamburgerBtn>
                <StyledLogoContainer>
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </StyledLogoContainer>
                <NavList
                    display="none"
                    gap="40px"
                />
                <ShoppingCartBtn
                    onClick={handleOpenCart}
                >
                    <img src={shoppingCart} />
                    <ItemsInCartSpan>
                        {cart.length === 0 ? "0" : cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </ItemsInCartSpan>
                </ShoppingCartBtn>
                <Cart
                    open={isOpen}
                    setIsOpen={(val) => setIsOpen(val)}
                />
                <Menu
                    open={menuOpen}
                    setMenuOpen={(val) => setMenuOpen(val)}
                />
            </StyledHeaderContainer>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    background-color: #191919;
    position: relative;
    z-index: 2000;
    @media ${devices.laptop} {
        display: flex;
        justify-content: center;
    }

`

const ItemsInCartSpan = styled.span`
    background-color: #D87D4A;
    color: #FFF;
    font-weight: 600;
    position: absolute;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -6px;
    right: -6px;
`

const StyledHeaderContainer = styled.header`
    display: flex;
    border-bottom: 1px solid #303030;
    justify-content: space-around;
    padding: 30px;
    @media ${devices.laptop} {
        padding: 30px 0;
        width: 70%;
    }
    @media ${devices.laptopL} {
        width: 60%;
    }
`
const ShoppingCartBtn = styled.button`
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
`

const StyledHamburgerBtn = styled.button`
    background-color: transparent;
    border: transparent;
    display: flex;
    cursor: pointer;

    @media ${devices.laptop} {
        display: none;
}
`

const StyledLogoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;

    @media ${devices.tablet} {
        justify-content: left;
        margin-left: 30px;
}
    @media ${devices.laptop} {
        flex: 0;
}
`