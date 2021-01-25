import styled from 'styled-components';

import Typewriter from 'typewriter-effect';


const Container = styled.div `
    width: 90%;
    height: 40vh;
    margin: 5% auto;
    clear: both;
    text-align: center;
    padding-top: 10%;

    @media only screen and (min-width: 50px) {
        height: 50vh;
    }  

    @media only screen and (min-width: 1200px) {
        width: 60%;
        float: right;
        margin: 10%;
        height: 60vh;
    }  
      
    @media only screen and (min-width: 1500px) {
        margin: 5%;
        height: 70vh;
    }
`
const Hello = styled.h1 `
    font-size: 28pt;
    @media only screen and (min-width: 600px) {
        font-size: 50pt;
    }
`

export const Main = () => {
    return (
        <Container>
            <Hello id="main" className="hello">
                <Typewriter onInit={(typewriter) => {
                    typewriter.typeString('Hello there!')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('Welcome to my personal portfolio.')
                    .start();
                }}
                />
            </Hello>
        </Container>
    );
}
export default Main;