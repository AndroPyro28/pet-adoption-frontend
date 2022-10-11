import React, { useEffect, useState } from 'react'
import { useGetAllAdoptionRequestQuery } from '../../services/adoptionRecordApis';
import AdoptionListBoxData from './AdoptionListBoxData'
import { FirstColContent, ListBox } from "./components"
import {AdoptionRecord} from '../../models/Adoption.ts';

function AdoptionStatus({records}: {records: AdoptionRecord[] | undefined}) {
   
      
    const fetchData = records?.filter((record) => record.adoptee.status !== 'ADOPTED' && record.status !== 'APPROVED')?.map(record => <AdoptionListBoxData data={record} />)
    return (
        <FirstColContent>
            <h1>Adoption Status</h1>
            <ListBox>
                {
                    fetchData
                }
            </ListBox>
        </FirstColContent>
    )
}

export default AdoptionStatus