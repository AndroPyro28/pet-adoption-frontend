import React from 'react'
import {HeaderContainer, Row} from "./components"
function Headers() {
  return (
    <HeaderContainer>
       <Row className='name'>Name</Row>
       <Row className='email'>email</Row>
       <Row className='address'>address</Row>
       <Row className='contact'>contact</Row>
       <Row className='date'>Registered date</Row>
       {/* <Row className='time'>time</Row> */}
    </HeaderContainer>
  )
}

export default Headers