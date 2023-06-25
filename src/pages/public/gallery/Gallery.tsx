import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ContentBlog from "../../../components/blog/ContentBlog";
import { useGetAllBlogQuery as PublicQuery } from "../../../services/publicBlog";
import { useGetAllBlogQuery as PrivateQuery } from "../../../services/privateBlog";
import { GalleryPageContainer, Dozens, Pics } from "./components";
import Modal from "./Modal";
import { getRefetchFunction } from "../../../redux/refetchSlice";
import { useGetAllAnimalRecordQuery } from "../../../services/animalRecordApis";

function Gallery() {
  const { user }: any = useSelector(state => state);
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  let path = pathname.replaceAll('user', '').replaceAll('/', '')
  const { data: dataPublic, refetch: refetchPublic } = PublicQuery(path === '' ? "HOME" : path.toUpperCase())
  const { data: dataPrivate, refetch: refetchPrivate } = PrivateQuery(path === '' ? "HOME" : path.toUpperCase())

  useEffect(() => {
    if (user.role === 'ADMIN') {
      dispatch(getRefetchFunction(refetchPrivate))
      refetchPrivate()
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

  const [pics] = useState([
    '/images/img/pusa4.jpg',
    '/images/img/pusa5.jpg',
    '/images/img/pusa3.jpg',
    '/images/img/pusa1.jpg',
    '/images/img/pusa2.jpg',
    '/images/img/dog1.jpg',
    '/images/img/dog2.jpg'
  ])

  const { data: pets } = useGetAllAnimalRecordQuery();

  return (
    <GalleryPageContainer>

      <Dozens>
        <h1>
          List of available pets
        </h1>
        <br />

        <h5>
          Savin thousands of homeless animals on the streets of the city every
          year, we sincerely hope that <br />
          each on of them will one day be adopted by a loving & caring new
          family of humnas!
        </h5>
        <Pics>
          {
            pets?.filter(pet => pet.status === 'READY')?.map((pic, index) => {
              return <img
                className="myImages"
                id="myImg"
                src={pic.imageUrl}
                alt="Muningningningningning"
                width="auto"
                height="250"
                key={index}
                onClick={() => setDisplayPicture(pic.imageUrl)}
              />
            })
          }

        </Pics>

      </Dozens>




      {
        displayPicture && <Modal displayPicture={displayPicture} setDisplayPicture={setDisplayPicture} />
      }

      {fetchContent}
    </GalleryPageContainer>
  );
}

export default Gallery;

