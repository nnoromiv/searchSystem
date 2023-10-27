import Files from "../components/Files"
import styled from 'styled-components'
// import Update from "../components/UpdateUi"

const Body = styled.div`
    background-color: #f4f4f4;
    padding: 40px 0;
    height: 100%;
`

const Homepage = () => {
  return (
    <Body>
      <Files />
      {/* <Update /> */}
    </Body>
  )
}

export default Homepage