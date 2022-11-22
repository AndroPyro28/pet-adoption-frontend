import { Main, AboutPageContainer, PinnedFeedbackList, FeedbackSection } from "./components"
import { useLocation } from "react-router-dom";
import { useGetFirstThreePinnedFeedbackQuery } from "../../../services/feedbackApis";
import PinnedFeedback from "../../../components/about/PinnedFeedback";
import { useGetAllBlogQuery as PublicQuery } from "../../../services/publicBlog";
import { useGetAllBlogQuery as PrivateQuery } from "../../../services/privateBlog";
import { useEffect, useState } from "react";
import ContentBlog from "../../../components/blog/ContentBlog";
import Modal from "../gallery/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getRefetchFunction } from "../../../redux/refetchSlice";

function About() {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const { user }: any = useSelector(state => state);
  let path = pathname.replaceAll('user', '').replaceAll('/', '')
  const { data: dataPublic, refetch: refetchPublic } = PublicQuery(path === '' ? "HOME" : path.toUpperCase())
  const { data: dataPrivate, refetch: refetchPrivate } = PrivateQuery(path === '' ? "HOME" : path.toUpperCase())

  useEffect(() => {
    if(user.role === 'ADMIN') {
      refetchPrivate()
      dispatch(getRefetchFunction(refetchPrivate))
    } else {
      refetchPublic()
    }
  }, [])
  const [displayPicture, setDisplayPicture] = useState("");

  const fetchContent = user.role === 'ADMIN' ? dataPrivate?.map((blog) => {
    return <ContentBlog data={blog} setDisplayPicture={setDisplayPicture} displayPicture={displayPicture}/>
  }) : dataPublic?.map((blog) => {
    return <ContentBlog data={blog} setDisplayPicture={setDisplayPicture} displayPicture={displayPicture}/>
  })

  
  return (
    <AboutPageContainer giveMarginToTop={!pathname.includes('user')}>
      {
        displayPicture && <Modal displayPicture={displayPicture} setDisplayPicture={setDisplayPicture} />
      }
      {fetchContent}
      

    </AboutPageContainer>
  );
}
export default About;