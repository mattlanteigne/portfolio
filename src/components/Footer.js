import styled from 'styled-components';

const Container = styled.div `
    width: 100%;
    float: right;
    text-align: center;
`
const Content = styled.p `
    font-size: 12pt;
`

const Footer = () => {
    return(
        <Container>
            <Content>Designed and coded by Matthew Lanteigne, 2021.</Content>
        </Container>
    );
}

export default Footer;