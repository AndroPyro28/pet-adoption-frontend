import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { GalleryPageContainer, Dozens, Pics } from "./components";
import Modal from "./Modal";
function Gallery() {

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
    const {pathname} = useLocation();

  return (
    <GalleryPageContainer giveMarginToTop={!pathname.includes('user')}>
        
        {
           displayPicture && <Modal displayPicture={displayPicture} setDisplayPicture={setDisplayPicture} />
        }

      <Dozens>
        <h1>
          Dozens of Pets You Can Adopt
          <br />
        </h1>
        <h5>
          Savin thousands of homeless animals on the streets of the city every
          year, we sincerely hope that <br />
          each on of them will one day be adopted by a loving & caring new
          family of humnas!
        </h5>
      </Dozens>

      <Pics>

          {
              pics.map((pic, index) => {
                  return <img
                  className="myImages"
                  id="myImg"
                  src={pic}
                  alt="Muningningningningning"
                  width="auto"
                  height="250"
                  key={index}
                onClick={() => setDisplayPicture(pic)}
                />
              } )
          }
    
      </Pics>
    </GalleryPageContainer>
  );
}

export default Gallery;