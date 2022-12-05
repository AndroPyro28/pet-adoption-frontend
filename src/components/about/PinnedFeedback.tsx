import React from 'react'
import { FeedbackReviews } from '../../models/Feedback'
import { PinnedFeedbackBody, PinnedFeedbackContainer, PinnedFeedbackHead, } from "./components"
interface Props {
    feedback: FeedbackReviews
}
function PinnedFeedback({ feedback }: Props) {

    const ratePopulate = [];

    for (let i = 0; i < feedback.rate; i++) {
        ratePopulate.push(i);
    }
    
    return (
        <PinnedFeedbackContainer>
            <PinnedFeedbackHead>
                <img src='/images/content/1.jpg' />
                 
                <PinnedFeedbackBody>
                    <span>{feedback.user.profile.fist_name} {feedback.user.profile.last_name} {
                        ratePopulate.map((rate) => <i className="fa-solid fa-paw star" key={rate}></i>)
                    }
                    </span>
                    <p>{feedback.message}</p>
                </PinnedFeedbackBody>


            </PinnedFeedbackHead>


        </PinnedFeedbackContainer>
    )
}

export default PinnedFeedback