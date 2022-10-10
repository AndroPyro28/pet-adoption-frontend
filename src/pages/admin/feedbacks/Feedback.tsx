import { useEffect, useState } from 'react';
import FeedbackData from '../../../components/feedback/FeedbackData';
import TableHeaders from '../../../components/table-components/TableHeaders'
import { FeedbackReviews } from '../../../models/Feedback';
import { useGetAllFeedbackQuery } from '../../../services/feedbackApis'
import { DataList, RecordList, RecordListHeaders, UpperContents } from '../components'
import { FeedbackContainerList, FeedbackListHeaders } from "./components"
function Feedback() {

    const {isLoading, data, error, refetch} = useGetAllFeedbackQuery();
    const [feedbacks, setFeedbacks] = useState<FeedbackReviews[]>([])
    
    useEffect(() => {
    refetch()
    }, [])

    const fetchFeedbacks = data?.length! > 0 ? 
    data?.map((feedback) => <FeedbackData key={feedback.id} data={feedback} />):
    <h1>No animals record found!</h1>
    return (
        <FeedbackContainerList >
            <UpperContents>
                <h2>Feedbacks</h2>
            </UpperContents>

            <RecordList>
                <FeedbackListHeaders>
                    <TableHeaders
                        arrayOfTitles={[
                            "Rate",
                            "Comments",
                            "Name",
                            "Created At",
                            "Action",
                        ]}
                    />
                    
                </FeedbackListHeaders>
                {
                    isLoading ? <h1>loading...</h1> : <DataList> {fetchFeedbacks} </DataList>
                }
            </RecordList>
        </FeedbackContainerList>
    )
}

export default Feedback