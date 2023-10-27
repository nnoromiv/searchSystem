import { Button, Container, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
// import JsonData from '../data.json'

const Body = styled.header`
    margin: 10px 40px;
    width: 95%
`
const Section = styled.section`
    display: flex;
`

const CardOuter = styled.div`
    border-radius: 14px;
    width: fit-content;
    height: fit-content;
    background-color: #F14D42;
`

const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px; 
`

const TefId = styled.h1`
    color: white;
    font-size: 28px;
    text-align: left;
    font-weight: 700;
`

const Gender = styled.h2`
    color: #DC1B21;
    font-size: 28px;
    text-align: right;
    font-weight: 900;
`

const CardInner = styled.div`
    border-radius: 10px;
    margin: 15px;
    border: 1px solid white;
    height: fit-content;
    background-color: #FFFFFF;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2px 10px;
    text-align: left
`

const Language = styled.h1`
    color: #DC1B21;
    font-size: 28px;
    text-align: right;
    font-weight: 900;
`

const Title = styled.h1`
    color: #DC1B21;
    font-size: 20px;
    font-weight: 900;
`

const Content = styled.h1`
    color: black;
    font-size: 20px;
    font-weight: 700;
`


const ContainOthers = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`

const Media =  styled.div`
    display: flex;
    justify-content: space-around;
`

const Zoom = styled.div`
    width: 320px !important;
    height: 320px ;
    transition: transform 0.3s;
    margin: 0 10px 0 0;
    border: 1px solid white;
    border-radius: 20px;
    background: white;

    &:hover {
        transform: scale(2.5) translateX(40%) translateY(40%);
        transition: transform 0.3s ease; /* Add a smooth transition effect */
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 20px;
`


const Video = styled.video`
    height: 320px;
    border: 1px solid grey;
    border-radius: 20px;
    object-fit: stretch;
    background: black;

    &:hover {
        transform: scale(2.5) translateX(-40%) translateY(40%);
    }
`

const RedundantButton = styled.div`
    display: flex;
    margin: 50px 0
`

const Update = () => {
    return (
    <Container style={{ width: '100%' }}>
    <Form>
        <Form.Group >
        <FormControl type="text" placeholder="Search by first name"  />
        </Form.Group>
    </Form>        
    <Body>
        <Section>
            <CardOuter>
                <CardTop>
                    <TefId>TEF23-NG0001</TefId>
                    <Gender>M</Gender> 
                </CardTop>
                <CardInner>
                    <Info>
                        <Language>EN</Language>
                        <div>
                            <Title>Name</Title>
                            <Content>John Doe Janet Jonmathan</Content>
                        </div>
                    </Info>
                    <Info>
                        <div>
                            <Title>Email</Title>
                            <Content>XXXXXXXXXXX.XXX23@gmail.com</Content>
                        </div>
                    </Info>
                    <Info>
                        <div>
                            <Title>Phone Number</Title>
                            <Content>+2340987654321</Content>
                        </div>
                    </Info>
                    <Info>
                        <div>
                            <Title>Business Name</Title>
                            <Content>XXXXXXXXXXX</Content>
                        </div>
                    </Info>
                    <Info>
                        <div>
                            <Title>Address</Title>
                            <Content>204 Sen. Gil Puyat Avenue <br /> Makati City, Metro Manila <br />Philippines</Content>
                        </div>
                    </Info>
                    <Info>
                        <div>
                            <Title>D.O.B</Title>
                            <Content>XXXXXXXXXXX</Content>
                        </div>
                    </Info>
                    <Info>
                        <div>
                            <Title>Business Sector - Industry Sub Sector</Title>
                            <Content>XXXXXXXXXXX</Content>
                        </div>
                    </Info>
                </CardInner>
            </CardOuter>
            <ContainOthers>
                <Media>
                    <Zoom>
                        <Image src='idCard' srcSet="" alt="user-id" />
                    </Zoom>
                        <Video src='videoUrl' style={{width: '320px'}} controls playsInline alt="user-video" />
                </Media>
                <RedundantButton>
                        <Button variant='danger' href='businessPlan' target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >Business Plan</Button>
                        <Button variant='danger' href='videoLink' target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >View Video</Button>
                        <Button variant='danger' href='Id Link' target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >View ID Card</Button>
                </RedundantButton>
            </ContainOthers>
        </Section>
    </Body>
    </Container>
    )
}

export default Update