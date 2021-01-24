import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import v1 from '../assets/v1.png';

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";



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

const Project = styled.div `
    width: 100%;
    display: inline-block;
    margin-bottom: 100px;
`

const Imgleft = styled.img `
    width: 280px;
    display: block;
    margin: 10% auto 3% auto;
    border: 1px solid #ededed;
    box-shadow: 2px 2px #222222,
                3px 3px #222222;

    @media only screen and (min-width: 500px) {
        width: 350px;
    }

    @media only screen and (min-width: 1000px) {
        float: left;
        display: inline-block;
        width: 350px;
        margin: 0 1% 0 0;
    }
    
    @media only screen and (min-width: 1500px) {
        float: left;
        display: inline-block;
        width: 400px;
        margin: 0 1% 0 0;
    }
`

const Contentright = styled.span`
    width: 100%;
    float: right;

    @media only screen and (min-width: 1000px) {
        display: inline-block;
        float: right;
        width: 55%;
    }

    @media only screen and (min-width: 1200px) {
        display: inline-block;
        float: right;
        width: 50%;
    }

    @media only screen and (min-width: 1500px) {
        display: inline-block;
        float: right;
        width: 53%;
    }
`

const Imgright = styled.img `
    width: 280px;
    display: block;
    margin: 10% auto 3% auto;
    border: 1px solid #ededed;
    box-shadow: 2px 2px #222222,
                3px 3px #222222;

    @media only screen and (min-width: 500px) {
        width: 350px;
    }

    @media only screen and (min-width: 1000px) {
        float: right;
        display: inline-block;
        width: 350px;
        margin: 0 0 0 1%;
    }

    @media only screen and (min-width: 1500px) {
        float: right;
        display: inline-block;
        width: 400px;
        margin: 0 0 0 1%;
    }
`

const Contentleft = styled.span`
    width: 100%;
    float: left;

    @media only screen and (min-width: 1000px) {
        display: inline-block;
        float: left;
        width: 55%;
    }

    @media only screen and (min-width: 1200px) {
        display: inline-block;
        float: left;
        width: 50%;
    }

    @media only screen and (min-width: 1500px) {
        display: inline-block;
        float: left;
        width: 53%;
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

const Projecttitle = styled.h3 `
    font-size: 20pt;
`

export const Projects = () => {
    return (
        <Container>
            <Fade right>
                <Title id="projects">Projects</Title>  
                <hr />
                <Project>
                    <Imgleft src={v1} />
                    <Contentright>
                        <Projecttitle>
                            Portfolio v3.0
                            <a href="#" className="projectlink" ><FaGithub /></a>
                            <a href="#" className="projectlink" ><FaExternalLinkAlt /></a>

                        </Projecttitle>
                        <p>Original portfolio webpage, designed and coded from scratch.</p>
                        <Buttongroup>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                        </Buttongroup>
                    </Contentright>
                </Project>
            </Fade>

            <Fade left>
                <Project>
                    <Imgright src={v1} />
                    <Contentleft>
                    <Projecttitle>
                            Portfolio v3.0
                            <a href="#" className="projectlink" ><FaGithub /></a>
                            <a href="#" className="projectlink" ><FaExternalLinkAlt /></a>

                        </Projecttitle>
                        <p>Original portfolio webpage, designed and coded from scratch.</p>
                        <Buttongroup>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                        </Buttongroup>
                    </Contentleft>
                </Project>
            </Fade>

            <Fade right>
                <Project>
                    <Imgleft src={v1} />
                    <Contentright>
                        <Projecttitle>
                            Portfolio v3.0
                            <a href="#" className="projectlink" ><FaGithub /></a>
                            <a href="#" className="projectlink" ><FaExternalLinkAlt /></a>
                            
                        </Projecttitle>
                        <p>Original portfolio webpage, designed and coded from scratch.</p>
                        <Buttongroup>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                            <Button>HTML</Button>
                        </Buttongroup>
                    </Contentright>
                </Project>
            </Fade>
        </Container>
    );
}
export default Projects;