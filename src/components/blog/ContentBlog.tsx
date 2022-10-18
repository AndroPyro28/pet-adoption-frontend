import React from 'react'
import { domParser } from '../../helper/DomParser'
import { Blog } from '../../models/Blog'
import { ContentContainer, ContentImageContainer, ContentTextContainer } from './components'

function ContentBlog({ data }: { data: Blog }) {
  const content = domParser(data.content)
  return (
    <ContentContainer>
      {
        data.photos?.length > 0 && <ContentImageContainer >
          {
            data.photos.map((img) => <img src={img.imageUrl} key={img.id} />)
          }
        </ContentImageContainer>
      }

      <ContentTextContainer>
        <h1>{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: `${content.innerHTML}` }}></p>
      </ContentTextContainer>

    </ContentContainer>
  )
}

export default ContentBlog