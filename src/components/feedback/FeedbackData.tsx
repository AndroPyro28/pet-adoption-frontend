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
  // const removedZ = dateTimeRemoveZ(data.createdAt + '');
  // const {date, time} = dateTimeLocalFormatter(removedZ);
   const {date, time} = dateTimeLocalFormatter(data.createdAt + '');
  const populateRate = []
  for(let i = 0; i < data.rate; i++) {
    populateRate.push(i);
  }

  const {togglePin, handleDeleteFeedback} = Logic({ data})
  return (
    <FeedbackDataContainer expand={expand} >
        <Data onClick={() => setExpand(prev => !prev)} className="Rate"> 
          {
            populateRate.map((rate) => <i className="fa-solid fa-star star" key={rate}></i> )
          }
        </Data>
        <Data onClick={() => setExpand(prev => !prev)} className="Comments">
          {data.message}
        </Data>
        <Data onClick={() => setExpand(prev => !prev)} className="Name">
          {data.user.profile.fist_name} {data.user.profile.last_name}
        </Data>
        <Data onClick={() => setExpand(prev => !prev)} className="Created">
          {date} at {time}
        </Data>
        <Data className="Action">

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