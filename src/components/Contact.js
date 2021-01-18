import styled from 'styled-components';


const Container = styled.div `
    width: 90%;
    margin: 15% auto;
    clear: both;

    @media only screen and (min-width: 1200px) {
        width: 60%;
        float: right;
        margin: 10% 10%;
    }
`

const Title = styled.h1 `
    text-align: right;
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
    box-shadow: 2px 2px #222222;
`



export const Contact = () => {
    return (
        <Container>
            <Title>Contact <hr /></Title>
            <h2>Thank you.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie, nunc non sollicitudin semper, tellus nulla sollicitudin velit, vitae euismod mauris sapien vel erat. Integer varius lorem sapien, convallis tempor mi faucibus nec. Donec maximus maximus purus. Etiam bibendum ante vel leo semper, non varius massa iaculis. Sed pellentesque volutpat dignissim. Cras lacus augue, placerat ac maximus facilisis, convallis sit amet nisi. Nullam at ante accumsan nisl dictum maximus. Praesent maximus rutrum tincidunt. Maecenas viverra ullamcorper leo tincidunt tempor. Nulla id mi id justo eleifend auctor.</p>
            <Buttongroup>
                <Button>Linkedin</Button>
                <Button>Linkedin</Button>
                <Button>Linkedin</Button>
            </Buttongroup>
        </Container>
    );
}
export default Contact;