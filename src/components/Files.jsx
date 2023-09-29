import { Button, Container, Form, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import JsonData from '../data.json'

const IMAGE = styled.img`
    width: 200px !important;
    height: 200px;
    border: 1px solid grey;
    transition: transform 0.3s;
    margin: 0 10px 0 0;

    &:hover {
        transform: scale(2.5) translateX(40%) translateY(40%);
    }
`
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
` 
const EACHUSERINFODIV = styled.div`
    text-align: left;
`

const H2 = styled.h2`
    font-size: 24px;
    font-weight: 800;
`

const VIDEO = styled.video`
    width: 320px !important;
    height: 220px;
    border: 1px solid grey;
    border-radius: 20px;

    &:hover {
        transform: scale(2.5) translateX(-40%) translateY(40%);
    }
`

const Files = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const handleSearch = e => {
        const term = e.target.value
        setSearchTerm(term)

        const filteredResult = JsonData.filter(item => 
        item['firstname'].toLowerCase().includes(term.toLowerCase()) || item['email'].toLowerCase().includes(term.toLowerCase()
        ))

        setSearchResult(filteredResult)
    } 
    return (
    <Container style={{ width: '100%' }}>
    <Form className="mt-4 mb-4">
        <Form.Group >
        <FormControl type="text" placeholder="Search by name or email" value={searchTerm} onChange={handleSearch} />
        </Form.Group>
    </Form>
    <div style={{ margin: '10px 40px ', width: '95%'}}>
        {
            searchResult.map((item, index) => (
                <EACHUSERDIV key={index}>
                    <INNEREACHUSERDIV>
                    <IMAGE src={item['idCard']} srcSet="" alt="user-id" />
                    <EACHUSERINFODIV>
                        <H2>no. {item['S/N']}</H2>
                        <H2>{item['firstname']} {item['lastname']} - {item['gender']}</H2>
                        <H2>{item['country']} - {item['language']}</H2>
                        <H2>{item['phonenumber']} - {item['email']}</H2> 
                        <H2>{item['businessName']} - Of sector {item['sector']}, {item['subSector']}</H2>
                    </EACHUSERINFODIV>
                    </INNEREACHUSERDIV>
                    <Button variant='secondary' href={item['idCardRedundant']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >View Image</Button>
                    <Button variant='secondary' href={item['videoUrlRedundant']} target='_blank' style={{ height: '100%', width: '180px', margin: '0 10px'}} >View Video</Button>
                    <VIDEO src={item['videoUrl']} controls playsInline alt="user-video" />
                </EACHUSERDIV>
            ))
        }
        </div>
    </Container>
    )
}

export default Files