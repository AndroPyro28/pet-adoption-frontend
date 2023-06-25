import React from 'react'
import { useDeleteBlogMutation } from '../../services/privateBlog';

function Logic() {
    const [deleteBlogMutation] = useDeleteBlogMutation();
    
    const deleteBlog = async (id: number) => {
        try {
            const res = await deleteBlogMutation(id)
            if ("data" in res) {
                // window.location.reload()
              }
        } catch (error) {
            console.error(error)
        }
    }
  return {
    deleteBlog
  }
}

export default Logic