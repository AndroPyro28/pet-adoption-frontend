import React, { SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { domParser } from '../../helper/DomParser'
import { Blog } from '../../models/Blog'
import { getForUpdateBlog } from '../../redux/blogSlice'
import { ContentContainer, ContentImageContainer, ContentTextContainer, ButtonContainer } from './components'
import Logic from './Logic'

function ContentBlog({ data, setDisplayPicture, displayPicture }: { data: Blog, setDisplayPicture: React.Dispatch<SetStateAction<string>>, displayPicture: string }) {
  const content = domParser(data.content)
  const dispatch = useDispatch()
  const {user}: any = useSelector(state => state);
  const {deleteBlog} = Logic()
  return (
    <ContentContainer>
      {
        data.photos?.length > 0 && <ContentImageContainer >
          {
            data.photos.map((img) => <img src={img.imageUrl} key={img.id} onClick={() => setDisplayPicture(img.imageUrl)} />)
          }
        </ContentImageContainer>
      }
      <ContentTextContainer>
        {
          user.role === 'ADMIN' && <ButtonContainer className='btnContainer'>
            
          <button onClick={() => dispatch(getForUpdateBlog(data))}>
            Edit
          </button>
          <button onClick={() => deleteBlog(data.id)}>
            Delete
          </button>
        </ButtonContainer>
        }
        
        <h1>{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: `${content.innerHTML}` }}></p>
      </ContentTextContainer>

    </ContentContainer>
  )
}

export default ContentBlog