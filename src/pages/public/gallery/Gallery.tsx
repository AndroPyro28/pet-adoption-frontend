import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ContentBlog from "../../../components/blog/ContentBlog";
import { useGetAllBlogQuery as PublicQuery } from "../../../services/publicBlog";
import { useGetAllBlogQuery as PrivateQuery } from "../../../services/privateBlog";
import { GalleryPageContainer, Dozens, Pics } from "./components";
import Modal from "./Modal";
import { getRefetchFunction } from "../../../redux/refetchSlice";

function Gallery() {
  const { user }: any = useSelector(state => state);
  const {pathname} = useLocation();
  const dispatch = useDispatch()
  let path = pathname.replaceAll('user', '').replaceAll('/', '')
  const { data: dataPublic, refetch: refetchPublic } = PublicQuery(path === '' ? "HOME" : path.toUpperCase())
  const { data: dataPrivate, refetch: refetchPrivate } = PrivateQuery(path === '' ? "HOME" : path.toUpperCase())

  useEffect(() => {
    if(user.role === 'ADMIN') {
    dispatch(getRefetchFunction(refetchPrivate))
      refetchPrivate()
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
    <GalleryPageContainer giveMarginToTop={!pathname.includes('user')}>
        
        {
           displayPicture && <Modal displayPicture={displayPicture} setDisplayPicture={setDisplayPicture} />
        }

      {fetchContent}
    </GalleryPageContainer>
  );
}

export default Gallery;

