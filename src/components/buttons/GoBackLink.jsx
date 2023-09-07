import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const GoBackLink = ({ text, to }) => {
    return (
        <StyledLink
            to={to}
        >
            {text}
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    text-transform: capitalize;
    color: #808080;
`