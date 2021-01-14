import styled from 'styled-components';

const Container = styled.div `
    width: 90%;
    margin: auto;
    clear: both;

    @media only screen and (min-width: 1200px) {
        width: 60%;
        float: right;
        margin: 5% 10%;
    }
`

const Title = styled.h1 `
    text-align: right;
`

const Job = styled.div`
`

const Jobtitle = styled.h2 `
`

const Date = styled.p `
`

const Duties = styled.ul`
`



export const Experience = () => {
    return (
        <Container>
            <Title>Experience <hr /></Title>
            <Job>
                <Jobtitle>Keyholder // The Beer Store</Jobtitle>
                <Date>May 2017 to present.</Date>
                <Duties>
                    <ul>Test</ul>
                    <ul>Test</ul>
                </Duties>
            </Job>
            <Job>
                <Jobtitle>Keyholder // The Beer Store</Jobtitle>
                <Date>May 2017 to present.</Date>
                <Duties>
                    <ul>Test</ul>
                    <ul>Test</ul>
                </Duties>
            </Job>
            <Job>
                <Jobtitle>Keyholder // The Beer Store</Jobtitle>
                <Date>May 2017 to present.</Date>
                <Duties>
                    <ul>Test</ul>
                    <ul>Test</ul>
                </Duties>
            </Job>
        </Container>
    );
}
export default Experience;