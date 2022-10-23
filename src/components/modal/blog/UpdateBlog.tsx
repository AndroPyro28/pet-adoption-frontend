import { motion } from 'framer-motion'
import { BlogModalBackdrop, UploadContainer, TextContentUploader, ImageContentUploader, ImageContainer } from "./components"
import ReactQuill from 'react-quill'
import { useEffect, useState } from "react";
import { IconContainer } from '../animal-record/components';
import { popUpModalVariants } from '../animationVariants';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../../redux/blogSlice';
import Logic from './Logic';

function Updateblog() {
  const { blog }: any = useSelector(state => state)
  const dispath = useDispatch()
  const [title, setTitle] = useState(blog.title)
  const [content, setContent] = useState(blog.content);
  const [path, setpath] = useState(blog.path);
  const [images, setImages] = useState<FileList | null | string[] | any>();
  const [photos, setPhotos] = useState<any[]>([]);

  const {getBase64FromUrl, updateBlog} = Logic({setPhotos,  title, content, photos, path })

  const getPhotos = () => {
    const blogPhotos = blog?.photos?.map((img:any) => img.imageUrl);
    blogPhotos.forEach(async (imgUrl: any) => await getBase64FromUrl(imgUrl))
  }

  useEffect(() => {
    getPhotos()
  }, [])

  useEffect(() => {
    try {
      if (images != null && typeof images === 'object') {
        for (let i = 0; i < images.length; i++) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(images[i]);
          fileReader.onloadend = async () => {
            if (fileReader.result?.toString().includes('image')) {
              setPhotos(prev => [...prev, fileReader.result])
            }
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
  }, [images])

  const deleteImgs = (dataUrl: string) => {
    setPhotos(prev => prev.filter((url) => url != dataUrl))
  }

  return (
    <BlogModalBackdrop>
      <motion.div className='BlogContainer'
        variants={popUpModalVariants}
        initial="initial"
        animate="animate"
      >
        <IconContainer onClick={() => dispath(remove({}))}>
          <i className="fa-solid fa-x closeBtn"></i>
        </IconContainer>
        <UploadContainer>
          <TextContentUploader>
            <input type={'text'} className="title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} placeholder='Title' spellCheck={true} />
            <ReactQuill theme='snow' value={content} onChange={setContent} className='content' placeholder='Content' />
          </TextContentUploader>

          <ImageContentUploader>
            <select value={path} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setpath(e.target.value)}>
              <option value="">Where do you want to appear?</option>
              <option value="HOME">Home</option>
              <option value="ABOUT">About</option>
              <option value="GALLERY">Gallery</option>
            </select>
            <input type="file" name="photos" id="photos" multiple onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImages(e.target.files)} />
            <ImageContainer>
              {
                photos.map((url, index) => <div onClick={() => deleteImgs(url)}>  <img src={url} className="photo" /> &nbsp; Click to delete </div>)
              }
            </ImageContainer>

            <label htmlFor="photos" className='photoUploaderBtn'> Upload image </label>
            <button onClick={() => updateBlog(blog.id)}>Save changes</button>
          </ImageContentUploader>
        </UploadContainer>

      </motion.div>
    </BlogModalBackdrop>
  )
}

export default Updateblog
