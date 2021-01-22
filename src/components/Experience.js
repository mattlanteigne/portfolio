import styled from 'styled-components';

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
    text-align: right;
`

const Job = styled.div`
`

const Jobtitle = styled.h2 `
    @media only screen and (max-width: 600px) { 
        font-size: 18pt;
    }
`

const Date = styled.p `
`

const Duties = styled.ul`
`



export const Experience = () => {
    return (
        
        <Container>
            <Fade top>
            <Title>Experience</Title>
            <hr />
            <Job>
                <Jobtitle>Keyholder // The Beer Store</Jobtitle>
                <Date>May 2017 to present.</Date>
                <Duties>
                    <ul>
                        <li>Test</li>
                    </ul>
                </Duties>
            </Job>
            <Job>
                <Jobtitle>Keyholder // The Beer Store</Jobtitle>
                <Date>May 2017 to present.</Date>
                <Duties>
                    <ul>
                        <li>Test</li>
                    </ul>
                </Duties>
            </Job>
            <Job>
                <Jobtitle>Keyholder // The Beer Store</Jobtitle>
                <Date>May 2017 to present.</Date>
                <Duties>
                    <ul>
                        <li>Test</li>
                    </ul>
                </Duties>
            </Job>
            </Fade>
        </Container>
    );
}
export default Experience;