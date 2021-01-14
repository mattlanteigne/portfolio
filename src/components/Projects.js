import styled from 'styled-components';

import v1 from '../assets/v1.png';


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
const Project = styled.div `
    float: left;
    margin-bottom: 25px;
`

const Imgleft = styled.img `
    float: left;
    display: inline-block;
    width: 400px;
    margin: 0 3% 0 0;
`

const Contentright = styled.div`
    display: inline-block;
    float: right;
    width: 50%;
`

const Imgright = styled.img `
    float: right;
    display: inline-block;
    width: 400px;
    margin: 0 0 3% 0;
`

const Contentleft = styled.span`
    display: inline-block;
    width: 50%;
    float: left;
`

export const Projects = () => {
    return (
        <Container>
            <Title>Projects <hr /></Title>  
            <Project>
                <Imgleft src={v1} />
                <Contentright>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie, nunc non sollicitudin semper, tellus nulla sollicitudin velit, vitae euismod mauris sapien vel erat. Integer varius lorem sapien, convallis tempor mi faucibus nec. Donec maximus maximus purus. Etiam bibendum ante vel leo semper, non varius massa iaculis. Sed pellentesque volutpat dignissim. Cras lacus augue, placerat ac maximus facilisis, convallis sit amet nisi. Nullam at ante accumsan nisl dictum maximus. Praesent maximus rutrum tincidunt. Maecenas viverra ullamcorper leo tincidunt tempor. Nulla id mi id justo eleifend auctor.</p>
                </Contentright>
            </Project>
            <Project>
                <Imgright src={v1} />
                <Contentleft>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie, nunc non sollicitudin semper, tellus nulla sollicitudin velit, vitae euismod mauris sapien vel erat. Integer varius lorem sapien, convallis tempor mi faucibus nec. Donec maximus maximus purus. Etiam bibendum ante vel leo semper, non varius massa iaculis. Sed pellentesque volutpat dignissim. Cras lacus augue, placerat ac maximus facilisis, convallis sit amet nisi. Nullam at ante accumsan nisl dictum maximus. Praesent maximus rutrum tincidunt. Maecenas viverra ullamcorper leo tincidunt tempor. Nulla id mi id justo eleifend auctor.</p>
                </Contentleft>
            </Project>
        </Container>
    );
}
export default Projects;