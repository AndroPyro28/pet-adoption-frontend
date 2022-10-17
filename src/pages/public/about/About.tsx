import { Main, AboutPageContainer, PinnedFeedbackList, FeedbackSection} from "./components"
import {useLocation} from "react-router-dom";
import { useGetFirstThreePinnedFeedbackQuery } from "../../../services/feedbackApis";
import PinnedFeedback from "../../../components/about/PinnedFeedback";
import { useGetAllBlogQuery } from "../../../services/publicBlog";
import { useEffect } from "react";
import ContentBlog from "../../../components/blog/ContentBlog";
function About() {
  const {pathname} = useLocation();
  let path = pathname.replaceAll('user', '').replaceAll('/', '')
  const {data: blog, refetch} = useGetAllBlogQuery(path === '' ? "HOME" : path.toUpperCase())
  console.log(path);
  useEffect(() => { 
    refetch()
  }, [])
  const fetchContent = blog?.map((blog) => {
    return <ContentBlog data={blog} />
  })
  const {data} = useGetFirstThreePinnedFeedbackQuery();
  const fetchFeedback = data?.map((feedback) => {
    return <PinnedFeedback feedback={feedback} />
  })
  return (
    <AboutPageContainer giveMarginToTop={!pathname.includes('user')}>
      {fetchContent}
    {
      fetchFeedback?.length! > 0 && <FeedbackSection>
      <h1 className="feedback__h1">Feedbacks</h1>
        <PinnedFeedbackList>
            {fetchFeedback}
        </PinnedFeedbackList>
      </FeedbackSection>
    }
    
    </AboutPageContainer>
  );
}

export default About;