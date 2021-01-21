import styled from 'styled-components';

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
        width: 60%;
        float: right;
        margin: 5%;
    }
`
const Hello = styled.h1 `
    font-size: 50pt;
`

const Desc = styled.h2 `
    font-size: 32pt;
`

export const Main = () => {
    return (
        <Container>
            <Hello>Hi there!</Hello>
            <Desc>Welcome to my personal portfolio.</Desc>
        </Container>
    );
}
export default Main;