import styled from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react'

const Nav = styled.div `
    position: sticky;

    @media only screen and (min-width: 1000px) {
        float: right;
        background: #323232;
        margin-right: 10%;
        padding: auto;
        border-radius: 0 0 5px 5px;
        box-shadow: 0px 3px 4px #222222,
        0px 6px 5px #222222;
        padding: 15px;
    }
`

const Link = styled.a `
    margin: 0 25px;
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

const HamburgerMenu = styled.div `
    float: right;
    margin: 25px 5%;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 1000px) {
        display: none;
    }
`


export const Navbar = () => {
    return (
        <Nav>
            <Link href = "#">Home</Link>
            <Link href = "#">About</Link>
            <Link href = "#">Experience</Link>
            <Link href = "#">Projects</Link>
            <Link href = "#">Contact</Link>  
            <HamburgerMenu>
                <Hamburger style="vertical-align: center;" />
            </HamburgerMenu>
        </Nav>
    );
}
export default Navbar;