import styled from 'styled-components';

const Container = styled.div `
    width: 100%;
    float: right;
    text-align: center;
`
const Content = styled.p `
    font-size: 10pt;
`

const Footer = () => {
    return(
        <Container>
            <Content>
                <a href="https://github.com/mattlanteigne/portfolio" target="_blank">Designed and coded by Matthew Lanteigne, 2021.</a>
            </Content>
        </Container>
    );
}

export default Footer;