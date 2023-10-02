import Files from "../components/Files"
import styled from 'styled-components'

const Body = styled.div`
    background-color: #f4f4f4;
    padding: 40px 0;
    height: 100%;
`

const Homepage = () => {
  return (
    <Body>
      <Files />
    </Body>
  )
}

export default Homepage