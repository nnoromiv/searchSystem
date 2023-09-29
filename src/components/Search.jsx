import { useState } from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';
import JsonData from '../data.json'


function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const handleSearch = e => {
    const term = e.target.value
    setSearchTerm(term)

    const filteredResult = JsonData.filter(item => 
      item['First name'].toLowerCase().includes(term.toLowerCase()) || item['Email address'].toLowerCase().includes(term.toLowerCase()
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
      <div>
        {searchResult.map((r,index) => (
          <h1 key={index}>{r['First name']}</h1>
        ))}
      </div>
    </Container>
  );
}

export default Search