import styled from 'styled-components';

import logo from '../assets/logo.png';

import { FaFile } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const Container = styled.div `
    margin: 0 5%;

    @media only screen and (max-width: 549px) {
        width: 100%;
        margin: auto;
        display: inline-block;
        text-align: center;
    }

    @media only screen and (min-width: 1200px) {
        width: 300px;
        position: fixed;
        margin-top: 5%;
    } 
`

const Logo = styled.img `
    width: 225px;

    @media only screen and (min-width: 550px) {
        width: 225px;
        float: left;
        margin: 25px auto;
    } 

    @media only screen and (min-width: 1200px) {
        width: 300px;
        margin: 25px auto;
    }
`
const Socials = styled.div `
    width: 100%;
    overflow: hidden;
    text-align: center;
`

const Social = styled.div `
    margin: 200px 25px;
    display: inline-block;
    text-align: center;
    font-size: 30pt;

    @media only screen and (max-width: 550px) {
        margin: 50px 10px;
    }

    @media only screen and (min-width: 550px) {
        margin: 50px 25px;
    }

    @media only screen and (min-width: 1200px) {
        vertical-align: middle;
        margin: 25px auto;
        display: block;
    }
`


export const Sidebar = () => {
    return (
        <Container>
            <Logo src = {logo} />
            <Socials>
                <Social><a href="#"><FaFile color="#ffffff" /></a></Social>
                <Social><a href="#"><FaLinkedin color="#0a66c2" /></a></Social>
                <Social><a href="#"><FaGithub color="#5c6bc0" /></a></Social>
                <Social><a href="#"><FaEnvelope color="#ea4435" /></a></Social>
            </Socials>
        </Container>
    );
}
export default Sidebar;
