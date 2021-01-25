import styled from 'styled-components';

import portrait from '../assets/portrait.jpg';

import Lightspeed from 'react-reveal/LightSpeed';

import { SiReact } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiDart } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiJava } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';


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
        margin-bottom: 10%;
    }
`

const Portrait = styled.img `
    width: 80%;
    display: block;
    margin: 10% auto;
    border: 1px solid #ededed;
    box-shadow: 2px 2px #222222,
                3px 3px #222222;

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

const Technologies = styled.div `
    width: 100%;
    float: left;
    text-align: center;
    margin-bottom: 10%;
    font-size: 40pt;
`

export const About = () => {
    return (
        <Container>
            <Lightspeed right>
                <Title id="about">About</Title>
                <hr />
                <Content>
                    <p>Hi there! My name is Matthew Lanteigne and I am a developer based in Toronto, Canada. I am a motivated individual who is always looking for new technologies to learn and challenges to overcome.</p>
                    <p>I love building all types of applications, especially for the web. I have worked with a variety of different technologies, with one of my favorites being React.</p>
                </Content>
                <Portrait src= {portrait} />
            </Lightspeed>

            <Lightspeed left>
                <Technologies>
                    <SiHtml5 className="tech" />
                    <SiCss3 className="tech" />
                    <SiJavascript className="tech" />
                    <SiDart className="tech" />
                    <SiJava className="tech" />
                    <SiPhp className="tech" />
                    <SiReact className="tech" />
                    <SiFlutter className="tech" />
                    <SiBootstrap className="tech" />
                </Technologies>
            </Lightspeed>
        </Container>
    );
}
export default About;