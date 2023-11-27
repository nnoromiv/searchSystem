import { Button, Container, Form, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import JsonData from '../_data.json'
import Preloader from './Preloader';
import LookImage from '../assets/photographer.svg'

const Body = styled.header`
    width: 100%;
    margin: 30px 0 0 0;
`
const Section = styled.section`
    width: 100%;
    display: flex;
    padding: 20px;
    margin: 0 0 20px 0;
    background: rgba( 241, 77, 66, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 8.5px );
    -webkit-backdrop-filter: blur( 8.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media screen and (max-width: 500px){
        display: grid;
        grid-template: repeat(3, 1fr);
    }

    @media screen and (max-width: 340px){
        padding: 10px;
    }
`

const CardOuter = styled.div`
    border-radius: 14px;
    width: 50%;
    height: fit-content;
    background-color: #F14D42;

    @media screen and (max-width: 500px){
        margin: 0 0 10px 0;
        width: 85vw;
    }
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

    @media screen and (max-width: 340px){
        font-size: 18px
    }
`

const Content = styled.h1`
    color: black;
    font-size: 20px;
    font-weight: 700;
    white-space: normal;
    word-wrap: break-word;

    @media screen and (max-width: 500px){
        font-size: 18px
    }

    @media screen and (max-width: 340px){
        font-size: 16px
    }
`


const ContainOthers = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    margin: 0 10px;
`

const Media =  styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1%;

    @media screen and (max-width: 1025px){
        flex-direction: column;
    }
`

const Image = styled.img`
    width: 50%;
    height: 320px;
    border: 1px solid white;
    border-radius: 20px;
    transition: transform 0.3s ease;
    background: white;

    &:hover {
        transform: scale(2) translateX(40%) translateY(40%);
    }

    
    @media screen and (max-width: 1025px){
        margin: 0 0 10px 0;
        width: 100%;
        height: 250px;
    }

    @media screen and (max-width: 769px){        
        &:hover {
            transform: scale(1.3);
        }
    }

    @media screen and (max-width: 500px){
        width: 80vw;
    }
`

const NullImage = styled.img`
    width: 100%;
    height: 600px;
`


const Video = styled.video`
    width: 50%;
    height: 320px;
    border: 1px solid grey;
    border-radius: 20px;
    object-fit: stretch;
    background: black;

    &:hover {
        transform: scale(2) translateX(-40%) translateY(40%);
    }

    @media screen and (max-width: 1025px){
        margin: 0 0 10px 0;
        width: 100% !important;
        height: 250px;
    }

    @media screen and (max-width: 769px){        
        &:hover {
            transform: scale(1.3);
        }
    }

    @media screen and (max-width: 500px){
        width: 80vw !important;
    }
`

const RedundantButton = styled.div`
    display: flex;
    margin: 50px 0;

    @media screen and (max-width: 500px){
        margin: 20px 0;
        width: 80vw;
    }
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
    <Container >
    <Form id="searchBar">
        <Form.Group >
        <FormControl type="text" placeholder="Search with first name and last name" value={searchTerm} onChange={handleSearch} />
        </Form.Group>
    </Form>
        <>
        <Preloader load={load}/>
        {
            !load &&
            <Body >
            {
                searchResult.length === 0 ?
                <NullImage src={LookImage} srcSet="" />
                :
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
                                    <div style={{textAlign: 'right'}}>
                                        <Title>Name</Title>
                                        <Content>{result['lastName']}{' '}{result['firstName']}</Content>
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
                                        <Title>Country</Title>
                                        <Content>{result['businessCountry']}</Content>
                                    </div>
                                </Info>
                                {/* <Info>
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
                                </Info> */}
                            </CardInner>
                        </CardOuter>
                        <ContainOthers>
                            <Media>
                                <Image src={result['idCard']}  srcSet="" alt="userimage" />
                                <Video src={result['videoUrl']} style={{width: '320px'}} controls playsInline alt="user-video" />
                            </Media>
                            <RedundantButton>
                                    <Button variant='danger' href={result['businessPlan']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >Plan</Button>
                                    <Button variant='danger' href={result['buttonVideoUrl']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >Video</Button>
                                    <Button variant='danger' href={result['buttonIdCard']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >ID Card</Button>
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