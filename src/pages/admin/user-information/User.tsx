import React from 'react'
import TableHeaders from '../../../components/table-components/TableHeaders'
import { User as UserInterface } from '../../../models/User'
import {Row, UserContainer} from "./components"
function User({data}: {data: UserInterface}) {
  const {profile} = data;

  return (
    <UserContainer>
       <Row className='name'>{profile.fist_name} {profile.last_name} </Row>
       <Row className='email'>{data.email}</Row>
       <Row className='address'> {profile.address} </Row>
       <Row className='contact'> {profile.contact} </Row>
       <Row className='date-time'>2022-10-02 at 10:00 PM</Row>
       {/* <Row className='time'></Row> */}
    </UserContainer>
  )
}

export default User