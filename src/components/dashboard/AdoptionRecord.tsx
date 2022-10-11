import React, { useEffect, useState } from 'react'
import { AdoptionRecord as AdoptionRecordInterface } from '../../models/Adoption.ts';
import { useGetAllAdoptionRequestQuery } from '../../services/adoptionRecordApis';
import AdoptionListBoxData from './AdoptionListBoxData'
import { FirstColContent, ListBox } from "./components"

function AdoptionRecord({records}: {records: AdoptionRecordInterface[] | undefined}) {
      
    const fetchData = records?.filter((record) => record.adoptee.status === 'ADOPTED' && record.status === 'APPROVED')?.map(record => <AdoptionListBoxData data={record} />)
    return (
        <FirstColContent>
            <h1>Adoption Record</h1>
            <ListBox>
                {
                    fetchData
                }
            </ListBox>
        </FirstColContent>
    )
}

export default AdoptionRecord