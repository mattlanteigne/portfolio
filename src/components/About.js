import styled from 'styled-components';

import portrait from '../assets/portrait.jpg';

import Lightspeed from 'react-reveal/LightSpeed';

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
    margin: 10% auto;

    @media only screen and (min-width: 550px) {
        width: 50%;
    }

    @media only screen and (min-width: 1000px) {
        float: right;
        display: inline-block;
        width: 30%;
        margin-top: 0;
        margin-right: 3%;
    }
`

const Buttongroup = styled.div `
    text-align: center;
`

const Button = styled.p `
    background-color: #323232; 
    border: none;
    color: inherit;
    padding: 0 5%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: inherit;
    margin: 3%;
    border-radius: 5px;
    box-shadow: 1px 1px #222222,
                2px 2px #222222;
`

export const About = () => {
    return (
        <Container>
            <Lightspeed right>
                <Title id="about">About</Title>
                <hr />
                <Content>
                    <p>Hi there! My name is Matthew Lanteigne and I'm a technology enthusiast.</p>
                    <p>My passion is building applications for the web.</p>
                    <Buttongroup>
                        <Button>HTML</Button>
                        <Button>CSS</Button>
                        <Button>JavaScript</Button>
                        <Button>Dart</Button>
                        <Button>Java</Button>
                        <Button>PHP</Button>
                    </Buttongroup>
                </Content>
                <Portrait src= {portrait} />
            </Lightspeed>
        </Container>
    );
}
export default About;