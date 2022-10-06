import React, { useEffect, useState } from 'react'
import { useGetAllAdoptionRequestQuery } from '../../services/adoptionRecordApis';
import AdoptionListBoxData from './AdoptionListBoxData'
import { FirstColContent, ListBox } from "./components"
import {AdoptionRecord} from '../../models/Adoption.ts';

function AdoptionStatus({records}: {records: AdoptionRecord[] | undefined}) {
    // const [maxPage, setMaxPage] = useState<number>()
    // const [currentPage, setCurrentPage] = useState<number>(0)
    // useEffect(() => {
    //     setMaxPage(Math.ceil(data?.length! / 6));
    //   }, [data])
      
    const fetchData = records?.filter((record) => record.adoptee.status !== 'ADOPTED')?.map(record => <AdoptionListBoxData data={record} />)
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