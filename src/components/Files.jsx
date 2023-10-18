import { Button, Container, Form, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import JsonData from '../data.json'
import Preloader from './Preloader';

// const IMAGEDIV = styled.div`
//     width: 200px !important;
//     height: 200px ;
//     transition: transform 0.3s;
//     margin: 0 10px 0 0;
//     border: 1px solid white;
//     border-radius: 20px;
//     background: white;

//     &:hover {
//         transform: scale(2.5) translateX(40%) translateY(40%);
//         transition: transform 0.3s ease; /* Add a smooth transition effect */
//     }
// `
// const IMAGE = styled.img`
//     width: 100%;
//     height: 100%;
//     border: 1px solid white;
//     border-radius: 20px;
// `

const EACHUSERDIV = styled.div`
    border-bottom: 1px solid grey;
    padding: 10px;
    display: flex;
    justify-content: space-between;
` 
const INNEREACHUSERDIV = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
` 
const EACHUSERINFODIV = styled.div`
    text-align: left;
`

const H2 = styled.h2`
    font-size: 24px;
    font-weight: 800;
`

// const VIDEO = styled.video`
//     height: 100%;
//     border: 1px solid grey;
//     border-radius: 20px;
//     object-fit: stretch;
//     background: black;

//     &:hover {
//         transform: scale(2.5) translateX(-40%) translateY(40%);
//     }
// `

const SNContainer = styled.div`
    width: 50px;
    height: 50px;
    padding: 20px;
    border: 1px solid red;
    border-radius: 50px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
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
            <div style={{ margin: '10px 40px ', width: '95%'}}>
            {
                searchResult.map((item, index) => (
                    <EACHUSERDIV key={index}>
                        <INNEREACHUSERDIV>
                        <SNContainer>{item['s/n']}</SNContainer>
                        <div>
                            <H2 style={{textAlign: 'left'}}>{item['Gender']}</H2>
                            {/* <IMAGEDIV>
                                <IMAGE src={item['idCard']} srcSet="" alt="user-id" />
                            </IMAGEDIV> */}
                            <H2 style={{textAlign: 'left'}}>{item['number']}</H2>
                        </div>
                        <EACHUSERINFODIV>
                            <H2 style={{color: 'red'}}>{item['firstName']} {item['lastName']}</H2>
                            <H2>{item['email']} - {item['businessName']}</H2> 
                            <H2>{item['language']}</H2>
                            <H2> ID: {item['id']}</H2>
                            <H2> Country: {item['country']}</H2>
                            <div>
                                <Button variant='danger' href={item['businessPlan']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >Business Plan</Button>
                                <Button variant='danger' href={item['videoLink']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >View Video</Button>
                            </div>                        
                        </EACHUSERINFODIV>
                        </INNEREACHUSERDIV>
                        {/* <div style={{width: '320px', height: '320px'}}>
                            <VIDEO src={item['videoUrl']} style={{width: '320px'}} controls playsInline alt="user-video" />
                        </div> */}
                    </EACHUSERDIV>
                ))
            }
            </div>
        }
        </>
    </Container>
    )
}

export default Files