import { Main, AboutPageContainer, PinnedFeedbackList, FeedbackSection, MissionVision, RightContent, LeftContent, Mission, Vision } from "./components"
import { useLocation, useNavigate} from "react-router-dom";
import { useGetAllBlogQuery as PublicQuery } from "../../../services/publicBlog";
import { useGetAllBlogQuery as PrivateQuery } from "../../../services/privateBlog";
import { useEffect, useState } from "react";
import ContentBlog from "../../../components/blog/ContentBlog";
import Modal from "../gallery/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getRefetchFunction } from "../../../redux/refetchSlice";
import { usePageLeave } from "react-use";

function About() {

  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //       return "are you sure you want to leave?"
  //     }
  // }, []);

  // usePageLeave(() => {
  //    const isLeaving = window.confirm('are you sure you want to leave?')
  //    if(isLeaving) {
  //    }
  // });

  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const { user }: any = useSelector(state => state);
  let path = pathname.replaceAll('user', '').replaceAll('/', '')
  const { data: dataPublic, refetch: refetchPublic } = PublicQuery(path === '' ? "HOME" : path.toUpperCase())
  const { data: dataPrivate, refetch: refetchPrivate } = PrivateQuery(path === '' ? "HOME" : path.toUpperCase())

  useEffect(() => {
    if (user.role === 'ADMIN') {
      refetchPrivate()
      dispatch(getRefetchFunction(refetchPrivate))
    } else {
      refetchPublic()
    }
  }, [])
  const [displayPicture, setDisplayPicture] = useState("");


  

  const fetchContent = user.role === 'ADMIN' ? dataPrivate?.map((blog) => {
    return <ContentBlog data={blog} setDisplayPicture={setDisplayPicture} displayPicture={displayPicture} />
  }) : dataPublic?.map((blog) => {
    return <ContentBlog data={blog} setDisplayPicture={setDisplayPicture} displayPicture={displayPicture} />
  })


  return (
    <AboutPageContainer giveMarginToTop={ /* !pathname.includes('user') */ false}>
      <MissionVision>
        <RightContent>
          <Mission>
            <h1>Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum iusto doloremque repellat nulla minus placeat voluptatibus, optio ab vero quibusdam!</p>
          </Mission>

          <Vision>
            <h1>Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum iusto doloremque repellat nulla minus placeat voluptatibus, optio ab vero quibusdam!</p>
          </Vision>
        </RightContent>
        <LeftContent>
          <h1>You can't buy love and happiness but
            You can adopt love.</h1>
        </LeftContent>
      </MissionVision>
      {
        displayPicture && <Modal displayPicture={displayPicture} setDisplayPicture={setDisplayPicture} />
      }
      {fetchContent}


    </AboutPageContainer>
  );
}
export default About;