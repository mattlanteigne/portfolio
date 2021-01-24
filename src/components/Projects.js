import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import todo from '../assets/todo.png';
import ifa from '../assets/ifa.png';
import v1 from '../assets/v1.png';
import phrase from '../assets/phrase.png';

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
                    <Imgleft src={todo} />
                    <Contentright>
                        <Projecttitle>
                            Todo
                            <a href="#" className="projectlink" ><FaExternalLinkAlt /></a>
                            <a href="#" className="projectlink" ><FaGithub /></a>

                        </Projecttitle>
                        <p>A todo list with the ability to add todo items, complete todo items and remove todo items as needed. This application was created using React.</p>
                        <Buttongroup>
                            <Button>JavaScript</Button>
                            <Button>React</Button>
                        </Buttongroup>
                    </Contentright>
                </Project>
            </Fade>

            <Fade left>
                <Project>
                    <Imgright src={ifa} />
                    <Contentleft>
                    <Projecttitle>
                            Project Gallery

                        </Projecttitle>
                        <p>A Project Gallery created for the INDIGItal program for the Indigenous Friends website. The web application was designed and prototyped using Figma, and developed using Dart and Flutter.</p>
                        <p>Live preview coming soon.</p>
                        <Buttongroup>
                            <Button>Dart</Button>
                            <Button>Flutter</Button>
                        </Buttongroup>
                    </Contentleft>
                </Project>
            </Fade>

            <Fade right>
                <Project>
                    <Imgleft src={v1} />
                    <Contentright>
                        <Projecttitle>
                            Portfolio v2.0
                            <a href="#" className="projectlink" ><FaExternalLinkAlt /></a>
                            <a href="#" className="projectlink" ><FaGithub /></a>
                            
                        </Projecttitle>
                        <p>The second version of my personal portfolio.</p>
                        <Buttongroup>
                            <Button>HTML</Button>
                            <Button>CSS</Button>
                            <Button>JavaScript</Button>
                            <Button>Bootstrap</Button>
                        </Buttongroup>
                    </Contentright>
                </Project>
            </Fade>

            <Fade left>
                <Project>
                    <Imgright src={phrase} />
                    <Contentleft>
                    <Projecttitle>
                            Phrase Parse
                            <a href="#" className="projectlink" ><FaExternalLinkAlt /></a>
                            <a href="#" className="projectlink" ><FaGithub /></a>

                        </Projecttitle>
                        <p>A phase parse web application created for a York University assignment. This application takes an input phrase and separates the words based on three word types:</p>
                        <ol>
                            <li>A word starting with 3 alphabetic characters</li>
                            <li>A Word starting with 3 numeric digits</li>
                            <li>Undefined word type (word is not of type 1 or 2)</li>
                        </ol>
                        <Buttongroup>
                            <Button>HTML</Button>
                            <Button>CSS</Button>
                            <Button>PHP</Button>
                            <Button>JavaScript</Button>
                        </Buttongroup>
                    </Contentleft>
                </Project>
            </Fade>
        
        </Container>
    );
}
export default Projects;