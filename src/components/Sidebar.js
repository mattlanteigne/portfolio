import styled from 'styled-components';

import logo from '../assets/logo.png';
import resume from '../assets/resume.svg';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';


const Container = styled.div `
    margin: 0 5%;

    @media only screen and (min-width: 1200px) {
        width: 300px;
        position: fixed;
        margin-top: 5%;
      } 
`

const Logo = styled.img `
    width: 300px;
    margin: 25px auto;
    display: block;

    @media only screen and (max-width: 1200px) {
        width: 225px;
        float: left;
      } 
`
const Socials = styled.div `
    width: 100%;
    overflow: hidden;
    text-align: center;
`

const Social = styled.img `
    width: 40px;
    margin: 50px 25px;

    box-shadow: 0px 2px 3px #222222,
    0px 3px 4px #222222,
    0px 4px 5px #222222;

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
                <a href="#"><Social src = {resume}  /></a>
                <a href="#"><Social src = {email} /></a>
                <a href="#"><Social src = {linkedin} /></a>
                <a href="#"><Social src = {github} /></a>
            </Socials>
        </Container>
    );
}
export default Sidebar;