import React, { useEffect, useState } from 'react'
import { FAQ as FAQContainer } from './components';

interface Props {
    data: {
        question: string,
        answer: string
    }
}
function FAQ({data}: Props) {
    const [toggleAnswer, setToggleAnswer] = useState(false)

    return (
        <FAQContainer onClick={() => setToggleAnswer(prev => !prev)}>
            <span className='q' >
             {data.question}
            </span>
            {
                toggleAnswer && <span className='a'><i className="fa-solid fa-chevron-right"></i> &nbsp; {data.answer}</span>
            }

        </FAQContainer>
    )
}

export default FAQ