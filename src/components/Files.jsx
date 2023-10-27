import { Button, Container, Form, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import JsonData from '../data.json'
import Preloader from './Preloader';

const Body = styled.header`
    margin: 10px 40px;
    width: 95%;
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
const Files = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
    const timer = setTimeout(() => {
        setLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
    }, []);

    const handleSearch = e => {
        const term = e.target.value
        if (term === "") {
            setSearchResult([])
            setSearchTerm('')
        } else {
        setSearchTerm(term)
        const filteredResult = JsonData.filter((item) => {
            const searchValue = item['firstName']+item['lastName']
            // Check if 'firstname' property is defined and not null or undefined
            if (item && item['firstName']) {
                return searchValue.toLowerCase().startsWith(term.toLowerCase());
            }
            return false; // 'firstname' property is undefined or null, so filter it out
            });

        // Limit the filtered results to the first 10 items
        const limitedResult = filteredResult.slice(0, 15);
        setSearchResult(limitedResult);
        }
    } 
    return (
    <Container style={{ width: '100%' }}>
    <Form>
        <Form.Group >
        <FormControl type="text" placeholder="Search by first name" value={searchTerm} onChange={handleSearch} />
        </Form.Group>
    </Form>
        <>
        <Preloader load={load}/>
        {
            !load &&
            <Body>
            {
                searchResult.map((result, index) => (
                    <Section key={index}>
                        <CardOuter>
                            <CardTop>
                                <TefId>{result['_id']}</TefId>
                                <Gender>{result['gender']}</Gender> 
                            </CardTop>
                            <CardInner>
                                <Info>
                                    <Language>{result['language']}</Language>
                                    <div>
                                        <Title>Name</Title>
                                        <Content>{result['lastName']}{result['firstName']}</Content>
                                    </div>
                                </Info>
                                <Info>
                                    <div>
                                        <Title>Email</Title>
                                        <Content>{result['email']}</Content>
                                    </div>
                                </Info>
                                <Info>
                                    <div>
                                        <Title>Phone Number</Title>
                                        <Content>{result['phoneNumber']}</Content>
                                    </div>
                                </Info>
                                <Info>
                                    <div>
                                        <Title>Business Name</Title>
                                        <Content>{result['businessName']}</Content>
                                    </div>
                                </Info>
                                <Info>
                                    <div>
                                        <Title>Address</Title>
                                        <Content>{result['businessAddress']}, {result['businessState']}<br />{result['businessCountry']}</Content>
                                    </div>
                                </Info>
                                <Info>
                                    <div>
                                        <Title>Business Sector - Industry Sub Sector</Title>
                                        <Content>{result['businessSector']} - {result['industrySubSector']}</Content>
                                    </div>
                                </Info>
                                <Info>
                                    <div>
                                        <Title>is Business Registered</Title>
                                        <Content>{result['isBusinessRegistered']}</Content>
                                    </div>
                                </Info>
                            </CardInner>
                        </CardOuter>
                        <ContainOthers>
                            <Media>
                                <Zoom>
                                    <Image src={result['idCard']}  srcSet="" alt="user-id" />
                                </Zoom>
                                    <Video src={result['videoUrl']} style={{width: '320px'}} controls playsInline alt="user-video" />
                            </Media>
                            <RedundantButton>
                                    <Button variant='danger' href={result['businessPlan']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >Business Plan</Button>
                                    <Button variant='danger' href={result['buttonVideoUrl']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >View Video</Button>
                                    <Button variant='danger' href={result['buttonIdCard']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >View ID Card</Button>
                            </RedundantButton>
                        </ContainOthers>
                    </Section>
                ))
            }
            </Body>
        }
        </>
    </Container>
    )
}

export default Files