import React from 'react'
import { dateTimeLocalFormatter, dateTimeRemoveZ } from '../../../helper/DateTimeFormmater';
import { User as UserInterface } from '../../../models/User'
import { Row, UserContainer } from "./components"
function User({ data }: { data: UserInterface }) {
  const { profile } = data;
  const newContact = profile?.contact
  .slice(0, profile?.contact.length - 4) // will remove the last 4 digits
  .padEnd(profile?.contact.length, '*')  // will replace '*' to the last 4 digits 

  // const removedZ = dateTimeRemoveZ(data.createdAt + ''); // we remove 000.Z
  const {date, time} = dateTimeLocalFormatter(data?.createdAt + '') // we split and format it to a time
  return (
    <UserContainer>
      <Row className='id'>{data.userId || data.id}</Row>
      <Row className='name'>{profile?.fist_name} {profile?.last_name} </Row>
      <Row className='email'>{data?.email}</Row>
      <Row className='address'> {profile?.address} </Row>
      <Row className='contact'> {newContact} </Row>
      <Row className='date-time'>{date} at {time}</Row>
    </UserContainer>
  )
}

export default User