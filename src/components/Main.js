import styled from 'styled-components';

const Container = styled.div `
    width: 90%;
    margin: auto;
    text-align: center; 
    clear: both;
    
    @media only screen and (min-width: 1200px) {
        width: 55%;
        float: right;
        margin: 5% 10%;
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