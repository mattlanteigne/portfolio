import styled from 'styled-components';

import portrait from '../assets/portrait.jpg'

const Container = styled.div `
    width: 90%;
    margin: auto;
    clear: both;

    @media only screen and (min-width: 1200px) {
        width: 55%;
        float: right;
        margin: 5% 10%;
    }
`

const Title = styled.h1 `
    
`

const Content = styled.span`
    display: inline-block;
    width: 65%;
`

const Portrait = styled.img `
    float: right;
    display: inline-block;
    width: 30%;
    margin: 0 3% 0 0;
`

export const About = () => {
    return (
        <Container>
            <Title>About <hr /></Title>
            <Content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie, nunc non sollicitudin semper, tellus nulla sollicitudin velit, vitae euismod mauris sapien vel erat. Integer varius lorem sapien, convallis tempor mi faucibus nec. Donec maximus maximus purus. Etiam bibendum ante vel leo semper, non varius massa iaculis. Sed pellentesque volutpat dignissim. Cras lacus augue, placerat ac maximus facilisis, convallis sit amet nisi. Nullam at ante accumsan nisl dictum maximus. Praesent maximus rutrum tincidunt. Maecenas viverra ullamcorper leo tincidunt tempor. Nulla id mi id justo eleifend auctor.</p>
            </Content>
            <Portrait src= {portrait} />

        </Container>
    );
}
export default About;