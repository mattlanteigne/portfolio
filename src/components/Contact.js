import styled from 'styled-components';

import Flip from 'react-reveal/Flip';


const Container = styled.div `
    width: 90%;
    margin: 25% auto;
    clear: both;
    text-align: center;

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
    text-align: left;
`

const Buttongroup = styled.div `
    text-align: center;
`

const Button = styled.button `
    background-color: #323232; 
    border: none;
    color: inherit;
    padding: 1%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: inherit;
    margin: 5%;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px #222222,
                2px 2px #222222;
`

export const Contact = () => {
    return (
        <Container>
            <Flip left>
                <Title id="contact">Contact</Title>
                <hr />
                <h2>Thank you.</h2>
                <p>Thank you for visiting my portfolio. If you are interested in a chat please contact me below.</p>
                <Buttongroup>
                    <Button>Email</Button>
                    <Button>Linkedin</Button>
                    <Button>GitHub</Button>
                </Buttongroup>
            </Flip>
        </Container>
    );
}
export default Contact;