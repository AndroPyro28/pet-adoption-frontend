import React from 'react'
import { Feedback } from '../../models/Feedback'
import {useCreateFeedbackMutation} from "../../services/feedbackApis";
import {toggleLoading} from "../../redux/loaderSlice"
import {useDispatch} from "react-redux";

interface props {
    setOpenFeedback?: React.Dispatch<React.SetStateAction<boolean>>
    setFeedback?: React.Dispatch<React.SetStateAction<Feedback>>
    feedback?: Feedback;
    toast?: any;
    setDisable?: React.Dispatch<React.SetStateAction<boolean>>
}   

function Logic({ feedback, setOpenFeedback, toast, setDisable }: props) {
    const [createFeedback] = useCreateFeedbackMutation();
    const dispatch = useDispatch()


    const openFeedbackModal = () => {
        setOpenFeedback!(true)
    }
    const closeFeedbackModal = () => {
        setOpenFeedback!(false)
    }

    const submitFeedback = async () => {
        try {
            if(!feedback?.rate || !feedback?.message) {
                return toast('Fill up the ratings and message to submit your feedback', {type: 'warning'})
            }
            dispatch(toggleLoading(true))
            const res = await createFeedback(feedback!);
            if('data' in res) {
                 toast('Feedback submitted!', {type:"success"})
                dispatch(toggleLoading(false))
                 return setTimeout(() => closeFeedbackModal() ,2500)
            }
            dispatch(toggleLoading(false))
            throw new Error('something went wrong')
        } catch (error: any) {
            toast(error.message, {type:"error"})
            console.error(error)
        } 
        
    }
    return {openFeedbackModal, submitFeedback, closeFeedbackModal}
}

export default Logic