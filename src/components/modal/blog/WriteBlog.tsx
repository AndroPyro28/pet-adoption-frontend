import { motion } from 'framer-motion'
import {BlogModalBackdrop, UploadContainer, TextContentUploader, ImageContentUploader, ImageContainer} from "./components"
import ReactQuill from 'react-quill'
import {useState} from "react";
import {Blog} from "../../../models/Blog"
import { IconContainer } from '../animal-record/components';
import { animateModalVariant, popUpModalVariants } from '../animationVariants';
interface Props {
  setWriteModalToggle: React.Dispatch<React.SetStateAction<boolean>>
}
function WriteBlog({setWriteModalToggle}: Props) {
  const [blog, setBlog] = useState<Blog>({} as Blog)
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
            <input type={'text'} className="title" placeholder='Title' spellCheck={true} />
            <ReactQuill theme='snow' className='content' placeholder='Content'  />
          </TextContentUploader>

          <ImageContentUploader>
            <input type="file" id="photos" multiple />
            <ImageContainer>
            </ImageContainer>
            <label htmlFor="photos" className='photoUploaderBtn'>Upload image</label>
            <button>Upload</button>
          </ImageContentUploader>
        </UploadContainer>
        
      </motion.div>
    </BlogModalBackdrop>
  )
}

export default WriteBlog