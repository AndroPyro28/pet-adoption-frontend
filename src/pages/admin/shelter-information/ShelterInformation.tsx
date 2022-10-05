import React from 'react'
import { UpperContents } from '../components'
import { ShelterInformationContainer, Information, ShelterTeam, OurEmployees, ShelterImageContainer, EmployeeImageContainer } from "./components"
function ShelterInformation() {
    return (
        <ShelterInformationContainer>
            <UpperContents>
                <h2>Shelter information</h2>
            </UpperContents>

            <Information>

                <ShelterTeam>
                    <h2>Our Animal Shelter Team</h2>

                    <ShelterImageContainer>
                        <img src='/images/shelters/1.jpg' />
                        <img src='/images/shelters/2.jpg' />
                        <img src='/images/shelters/3.jpg' />
                    </ShelterImageContainer>

                </ShelterTeam>

                <OurEmployees>
                    <h2>Our Employees</h2>

                    <EmployeeImageContainer>
                        <img src='/images/shelters/4.jpg' />
                        <img src='/images/shelters/5.jpg' />
                        <img src='/images/shelters/6.jpg' />
                        <img src='/images/shelters/7.jpg' />
                        <img src='/images/shelters/8.jpg' />
                    </EmployeeImageContainer>

                    <EmployeeImageContainer>
                        <img src='/images/shelters/9.jpg' />
                        <img src='/images/shelters/10.jpg' />
                        <img src='/images/content/3.jpg' />
                        <img src='/images/content/2.jpg' />
                        <img src='/images/content/3.jpg' />
                    </EmployeeImageContainer>

                </OurEmployees>

            </Information>
        </ShelterInformationContainer>
    )
}

export default ShelterInformation