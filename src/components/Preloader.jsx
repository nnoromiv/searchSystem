import { styled } from 'styled-components'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'

const Preload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 100px;
`

const Preloader = (props) => {
  return (
    <>
        {
            props.load &&
            <Preload>               
                <Spinner animation="grow" style={{ color: 'red'}}/>
            </Preload>
        }
    </>
  )
}

Preloader.propTypes = {
    load: PropTypes.bool.isRequired
}

export default Preloader