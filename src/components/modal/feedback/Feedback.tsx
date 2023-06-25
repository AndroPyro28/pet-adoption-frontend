import React from "react";
import {
  FeedbackBackdrop,
  FeedbackContainer,
  RateContainer,
  StarContainer
} from "./components";
import Logic from "../../user_navbar/Logic";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
import { IconContainer } from "../animal-record/components";
import { Feedback as FeedbackInterface } from "../../../models/Feedback";
import { motion } from "framer-motion";
import { animateModalVariant } from "../animationVariants";

interface props {
    setOpenFeedback:  React.Dispatch<React.SetStateAction<boolean>>
}
function Feedback({setOpenFeedback}: props) {

    const [feedback ,setFeedback] = useState<FeedbackInterface>({
        message: '',
        rate: 0
    });
    const [disable, setDisable] = useState(false)
    const { submitFeedback } = Logic({feedback, setFeedback, setOpenFeedback, toast, setDisable})
  return (
    <FeedbackBackdrop>
      <motion.div className="feedbackContainer"
      variants={animateModalVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      >
        <ToastContainer autoClose={1500} />
        <IconContainer onClick={() => setOpenFeedback(false)}  >
        <i className="fa-solid fa-xmark closeBtn"></i>
        </IconContainer>

        <h1>Give us feedback</h1>
        <p className="rateUs">Rate Us</p>
        <RateContainer>
          {
            [1, 2, 3, 4, 5].map((star) => ( // ${feedback?.rate! >= star ? "rated" : ""}
                <StarContainer onClick={() => setFeedback(prev => ({...prev, rate: star}))} rated={feedback?.rate! >= star} >
                    <i className={`fa-solid fa-star star`}></i>
                </StarContainer>
              ))
          }
        </RateContainer>

        <p className="suggestion">Do you have any thoughts you'd like to share?</p>

        <textarea placeholder="Give us feedback" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFeedback((prev) => ({...prev, message: e.target.value}))}></textarea>

        <button onClick={submitFeedback} disabled={disable!}>Submit</button>

      </motion.div>
    </FeedbackBackdrop>
  );
}

export default Feedback;