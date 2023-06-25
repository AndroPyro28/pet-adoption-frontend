import React from 'react'
import PinnedFeedback from '../../../components/about/PinnedFeedback';
import { useGetAllFeedbackQuery, useGetFirstThreePinnedFeedbackQuery } from '../../../services/feedbackApis';
import { FeedbackSection, PinnedFeedbackList } from '../about/components';
import { FeedbackContainer, Banner, FeedbackAverage, Ratings } from './components';

function FeedbackPublic() {

  const { data, } = useGetFirstThreePinnedFeedbackQuery();
  const fetchFeedback = data
    // ?.filter(feedback => feedback.pin === true)
    ?.map((feedback) => {
      return <PinnedFeedback feedback={feedback} />
    })

  const { data: feedbackData, isLoading } = useGetAllFeedbackQuery();

  if (isLoading) return <></>

  const feedbackTotal = feedbackData?.reduce((totalObj, feedback) => {
    if (feedback.rate == 1) return { ...totalObj, oneStar: totalObj.oneStar + 1 }
    if (feedback.rate == 2) return { ...totalObj, twoStar: totalObj.twoStar + 1 }
    if (feedback.rate == 3) return { ...totalObj, threeStar: totalObj.threeStar + 1 }
    if (feedback.rate == 4) return { ...totalObj, fourStar: totalObj.fourStar + 1 }
    if (feedback.rate == 5) return { ...totalObj, fiveStar: totalObj.fiveStar + 1 }
    return totalObj;
  }, { oneStar: 0, twoStar: 0, threeStar: 0, fourStar: 0, fiveStar: 0 })


  const { oneStar,
    twoStar,
    threeStar,
    fourStar,
    fiveStar } = feedbackTotal!;

  const total = oneStar + twoStar + threeStar + fourStar + fiveStar;
  const feedbackAverage = (1 * oneStar + 2 * twoStar + 3 * threeStar + 4 * fourStar + 5 * fiveStar) / total;

  return (
    <FeedbackContainer>
      <Banner></Banner>
      <FeedbackSection>
        <h1 className="feedback__h1">Feedbacks</h1>

        <FeedbackAverage>
          <h2>Overall feedback ratings</h2>

          <Ratings>
            <i className="fa-solid fa-star star"></i>
            <span>{feedbackAverage.toFixed(2)}</span>
          </Ratings>

        </FeedbackAverage>

        <PinnedFeedbackList>
          {fetchFeedback}
        </PinnedFeedbackList>
      </FeedbackSection>

    </FeedbackContainer>
  )
}

export default FeedbackPublic