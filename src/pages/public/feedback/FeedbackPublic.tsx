import React from 'react'
import PinnedFeedback from '../../../components/about/PinnedFeedback';
import { useGetFirstThreePinnedFeedbackQuery } from '../../../services/feedbackApis';
import { FeedbackSection, PinnedFeedbackList } from '../about/components';
import { FeedbackContainer, Banner } from './components';

function FeedbackPublic() {

  const { data } = useGetFirstThreePinnedFeedbackQuery();
  const fetchFeedback = data?.map((feedback) => {
    return <PinnedFeedback feedback={feedback} />
  })
  return (
    <FeedbackContainer>
      <Banner></Banner>
        {
        fetchFeedback?.length! > 0 && <FeedbackSection>
          <h1 className="feedback__h1">Feedbacks</h1>
          <PinnedFeedbackList>
            {fetchFeedback}
          </PinnedFeedbackList>
        </FeedbackSection>
      }
    </FeedbackContainer>
  )
}

export default FeedbackPublic