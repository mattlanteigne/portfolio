import styled from 'styled-components';

import portrait from '../assets/portrait.jpg';

import Fade from 'react-reveal/Zoom';

const Container = styled.div `
    width: 90%;
    margin: 25% auto;
    clear: both;

    @media only screen and (min-width: 1200px) {
        width: 60%;
        float: right;
        margin: 10%;
    }   
     
    @media only screen and (min-width: 1500px) {
        margin: 5%;
    }
`

const Title = styled.h1 `
    
`

const Content = styled.span`
    @media only screen and (min-width: 1000px) {
        display: inline-block;
        width: 65%;
        float: left;
    }
`

const Portrait = styled.img `
    width: 80%;
    display: block;
    margin: 10% auto 0 auto;

    @media only screen and (min-width: 550px) {
        width: 50%;
    }

    @media only screen and (min-width: 1000px) {
        float: right;
        display: inline-block;
        width: 30%;
        margin: 0 3% 0 0;
    }
`

export const About = () => {
    return (
        <Container>
            <Fade top>
            <Title>About</Title>
            <hr />
            <Content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie, nunc non sollicitudin semper, tellus nulla sollicitudin velit, vitae euismod mauris sapien vel erat. Integer varius lorem sapien, convallis tempor mi faucibus nec. Donec maximus maximus purus. Etiam bibendum ante vel leo semper, non varius massa iaculis. Sed pellentesque volutpat dignissim. Cras lacus augue, placerat ac maximus facilisis, convallis sit amet nisi. Nullam at ante accumsan nisl dictum maximus. Praesent maximus rutrum tincidunt. Maecenas viverra ullamcorper leo tincidunt tempor. Nulla id mi id justo eleifend auctor.</p>
            </Content>
            <Portrait src= {portrait} />
            </Fade>
        </Container>
    );
}
export default About;