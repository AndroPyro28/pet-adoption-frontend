import React, { useEffect, useState } from 'react'
import { useGetAllAnimalRecordQuery } from '../../services/animalRecordApis';
import { FirstColContent, ListBox } from "./components"
import AnimalListBoxData from './AnimalListBoxData';
function AnimalList() {
    const { data, isLoading, error } = useGetAllAnimalRecordQuery();

    // const [maxPage, setMaxPage] = useState<number>()
    // const [currentPage, setCurrentPage] = useState<number>(0)
    // useEffect(() => {
    //     setMaxPage(Math.ceil(data?.length! / 6));
    // }, [data])

    const fetchData = data?.map((pet) => {
        return <AnimalListBoxData data={pet} />
    })
    
    return (<FirstColContent>
        <h1>Animal List</h1>
            <ListBox>
                {
                    fetchData
                }
            </ListBox>
    </FirstColContent>
    )
}

export default AnimalList