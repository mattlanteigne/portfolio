import styled from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react'

const Nav = styled.div `
    
    @media only screen and (min-width: 1000px) {
        float: right;
        background: #323232;
        margin-right: 5%;
        padding: auto;
        border-radius: 0 0 5px 5px;
        box-shadow: 2px 2px #222222;
        padding: 15px;
    }
`

const Link = styled.a `
    margin: 0 25px;
`


export const Navbar = () => {
    return (
        <Nav>
            <Link href = "#">Home</Link>
            <Link href = "#">About</Link>
            <Link href = "#">Experience</Link>
            <Link href = "#">Projects</Link>
            <Link href = "#">Contact</Link>  
            <Hamburger />
        </Nav>
    );
}
export default Navbar;