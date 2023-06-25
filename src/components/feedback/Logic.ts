import React, { SetStateAction } from 'react'
import { FeedbackReviews } from '../../models/Feedback'
import {useTogglePinFeedbackMutation, useDeleteFeedbackMutation} from "../../services/feedbackApis"
interface Props {
    // setPin: React.Dispatch<React.SetStateAction<boolean>>
    data: FeedbackReviews
}
function Logic({data}: Props) {
    const [togglePinFeedback] = useTogglePinFeedbackMutation()
    const [deleteFeedback] = useDeleteFeedbackMutation()
    const togglePin = async () => {
        try {
            const res = await togglePinFeedback(data.id!)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDeleteFeedback = async () => {
        try {
            const res = await deleteFeedback(data.id!);
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

  return {
    togglePin,
    handleDeleteFeedback
  }
}

export default Logic