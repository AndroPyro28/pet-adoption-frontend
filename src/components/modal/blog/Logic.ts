import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../redux/blogSlice";
import { useCreateBlogMutation, useUpdateBlogMutation } from "../../../services/privateBlog";

interface Props {
  title: string;
  content: string;
  photos: any[];
  path: string
  setPhotos?: React.Dispatch<React.SetStateAction<any[]>>
  setWriteModalToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}
function Logic({ title, content, photos, path, setWriteModalToggle, setPhotos }: Props) {
  const dispath = useDispatch()
  const {refetchData}: any = useSelector(state => state)
  const [createBlogMutation] = useCreateBlogMutation();
  console.log(refetchData)
  const createBlog = async () => {
    try {
      if(!title || !content || !path) {
        return;
      }

      const res: any = await createBlogMutation({
        title,
        content,
        photos,
        path,
      })

      if ("data" in res) {
        setTimeout(() => refetchData(), 2500)
        setWriteModalToggle!(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getBase64FromUrl = async (url:string) => {
    const data = await fetch(url);
    const blob = await data.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        setPhotos!(prev => {
          if(!prev.includes(reader.result)) {
            return [...prev, reader.result]
          } else {
            return prev;
          }
        })
      };
  };
  
  const [updateBlogMutation] = useUpdateBlogMutation();
  const updateBlog = async (id: number) => {
    try {
      if(!title || !content || !path) {
        return;
      }
      const res:any = await updateBlogMutation({
        id,
        title,
        content,
        photos,
        path,
      })
      if ("data" in res) {
        setTimeout(() => refetchData(), 2500)
        dispath(remove({}))

      }
    } catch (error) {
      console.error(error);
    }
  };

  return { createBlog, getBase64FromUrl, updateBlog };
}

export default Logic;
