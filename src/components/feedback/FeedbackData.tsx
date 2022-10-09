import { useEffect, useState } from "react";
import { dateTimeLocalFormatter, dateTimeRemoveZ } from "../../helper/DateTimeFormmater";
import { FeedbackReviews } from "../../models/Feedback";
import { User } from "../../models/User";
import { IconContainer } from "../modal/animal-record/components"
import {FeedbackDataContainer, Data, PinContainer} from "./components"
import Logic from "./Logic";

interface Props {
  data: FeedbackReviews
}
function FeedbackData({data}: Props) {
  const [expand, setExpand] = useState<boolean>(false)
  const removedZ = dateTimeRemoveZ(data.createdAt + '');
  const {date, time} = dateTimeLocalFormatter(removedZ);
  const populateRate = []
  for(let i = 0; i < data.rate; i++) {
    populateRate.push(i);
  }

  const {togglePin, handleDeleteFeedback} = Logic({ data})
  return (
    <FeedbackDataContainer expand={expand} >
        <Data onClick={() => setExpand(prev => !prev)}> 
          {
            populateRate.map((rate) => <i className="fa-solid fa-star star" key={rate}></i> )
          }
        </Data>
        <Data onClick={() => setExpand(prev => !prev)}>
          {data.message}
        </Data>
        <Data onClick={() => setExpand(prev => !prev)}>
          {data.user.profile.fist_name} {data.user.profile.last_name}
        </Data>
        <Data onClick={() => setExpand(prev => !prev)}>
          {date} at {time}
        </Data>
        <Data className="action">

          <PinContainer onClick={togglePin} pin={data.pin}>
            <i className={`fa-solid fa-thumbtack`}></i> 
          </PinContainer>

          <PinContainer onClick={handleDeleteFeedback}>
            <i className="fa-solid fa-eraser delete"></i>
          </PinContainer>
        </Data>
    </FeedbackDataContainer>
  )
}
export default FeedbackData