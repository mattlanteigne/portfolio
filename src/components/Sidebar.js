import styled from 'styled-components';

import logo from '../assets/logo.png';
import resume from '../assets/resume.svg';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';


const Container = styled.div `
    margin: 5% 5%;
    float: left;

    @media only screen and (min-width: 1200px) {
        width: 300px;
        position: fixed;
      } 
`

const Logo = styled.img `
    width: 300px;
    margin: 25px auto;
    display: block;

    @media only screen and (max-width: 1200px) {
        width: 150px;
        float: left;
      } 
`


const Social = styled.img `
    vertical-align: middle;
    width: 40px;
    margin: 25px auto;
    display: block;
`


export const Sidebar = () => {
    return (
        <Container>
            <Logo src = {logo} />
                <a href="#"><Social src = {resume}  /></a>
                <a href="#"><Social src = {email} /></a>
                <a href="#"><Social src = {linkedin} /></a>
                <a href="#"><Social src = {github} /></a>
        </Container>
    );
}
export default Sidebar;
