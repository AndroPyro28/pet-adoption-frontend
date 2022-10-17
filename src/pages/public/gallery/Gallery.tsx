import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContentBlog from "../../../components/blog/ContentBlog";
import { useGetAllBlogQuery } from "../../../services/publicBlog";
import { GalleryPageContainer, Dozens, Pics } from "./components";
import Modal from "./Modal";
function Gallery() {
  const {pathname} = useLocation();
  let path = pathname.replaceAll('user', '').replaceAll('/', '')
  const { data, refetch } = useGetAllBlogQuery(path === '' ? "HOME" : path.toUpperCase())
  console.log(path);
  useEffect(() => { 
    refetch()
  }, [])

  const fetchContent = data?.map((blog) => {
    return <ContentBlog data={blog} />
  })
    const [pics] = useState([
        '/images/img/pusa4.jpg',
        '/images/img/pusa5.jpg',
        '/images/img/pusa3.jpg',
        '/images/img/pusa1.jpg',
        '/images/img/pusa2.jpg',
        '/images/img/dog1.jpg',
        '/images/img/dog2.jpg'
    ])

    const [displayPicture, setDisplayPicture] = useState("");

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