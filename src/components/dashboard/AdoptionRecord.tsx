import React, { useEffect, useState } from 'react'
import { AdoptionRecord as AdoptionRecordInterface } from '../../models/Adoption.ts';
import { useGetAllAdoptionRequestQuery } from '../../services/adoptionRecordApis';
import AdoptionListBoxData from './AdoptionListBoxData'
import { FirstColContent, ListBox } from "./components"

function AdoptionRecord({records}: {records: AdoptionRecordInterface[] | undefined}) {
    // const { data, isLoading, error } = useGetAllAdoptionRequestQuery();
    // const [maxPage, setMaxPage] = useState<number>()
    // const [currentPage, setCurrentPage] = useState<number>(0)
    // useEffect(() => {
    //     setMaxPage(Math.ceil(data?.length! / 6));
    //   }, [data])
      
    const fetchData = records?.filter((record) => record.adoptee.status === 'ADOPTED')?.map(record => <AdoptionListBoxData data={record} />)
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