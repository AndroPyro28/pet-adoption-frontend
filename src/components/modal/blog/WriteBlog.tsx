import { motion } from 'framer-motion'
import { BlogModalBackdrop, UploadContainer, TextContentUploader, ImageContentUploader, ImageContainer } from "./components"
import ReactQuill from 'react-quill'
import { useEffect, useState } from "react";
import { IconContainer } from '../animal-record/components';
import { popUpModalVariants } from '../animationVariants';
import Logic from './Logic';
import { useLocation } from 'react-router-dom';
interface Props {
  setWriteModalToggle: React.Dispatch<React.SetStateAction<boolean>>
}
function WriteBlog({ setWriteModalToggle }: Props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');
  const [images, setImages] = useState<FileList | null | string[] | any>();
  const [photos, setPhotos] = useState<any[]>([]);
  const {createBlog } = Logic({title, content, photos, setWriteModalToggle})
  
  useEffect(() => {
    try {
      if(images != null && typeof images === 'object') {
       for (let i = 0; i < images.length; i++) {
      const fileReader = new FileReader();
           fileReader.readAsDataURL(images[i]);
           fileReader.onloadend = async () => {
            if(fileReader.result?.toString().includes('image')) {
              setPhotos(prev => [...prev, fileReader.result])

            }
           }
       }
     }
    } catch (error) {
      console.error(error)
    }
  }, [images])
  const deleteImgs = (dataUrl:string) => {
    setPhotos(prev => prev.filter((url) => url != dataUrl))
  }
  return (
    <BlogModalBackdrop>
      <motion.div className='BlogContainer'
        variants={popUpModalVariants}
        initial="initial"
        animate="animate"
      >
        <IconContainer onClick={() => setWriteModalToggle(false)}>
          <i className="fa-solid fa-x closeBtn"></i>
        </IconContainer>
        <UploadContainer>
          <TextContentUploader>
            <input type={'text'} className="title" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} placeholder='Title' spellCheck={true} />
            <ReactQuill theme='snow' onChange={setContent} className='content' placeholder='Content' />
          </TextContentUploader>

          <ImageContentUploader>
            <input type="file" name="photos" id="photos" multiple onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImages(e.target.files)} />
            <ImageContainer>
              {
                photos.map((url, index) => <div onClick={() => deleteImgs(url)}>  <img src={url} /> &nbsp; Click to delete </div>)
              }
            </ImageContainer>
            <label htmlFor="photos" className='photoUploaderBtn'> Upload image </label>
            <button onClick={createBlog}>Upload</button>
          </ImageContentUploader>
        </UploadContainer>

      </motion.div>
    </BlogModalBackdrop>
  )
}

export default WriteBlog