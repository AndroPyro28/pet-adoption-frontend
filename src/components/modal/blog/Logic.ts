import path from "path";
import React from "react";
import { useLocation } from "react-router-dom";
import { Blog } from "../../../models/Blog";
import { useCreateBlogMutation } from "../../../services/privateBlog";

interface Props {
  title: string;
  content: string;
  photos: any[];
  setWriteModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
function Logic({ title, content, photos, setWriteModalToggle }: Props) {
  const { pathname } = useLocation();
  const [createBlogMutation] = useCreateBlogMutation();
  const createBlog = async () => {
    try {
      const path =
        pathname === "/" ? "HOME" : pathname.replace("/", "").toUpperCase();
      const res = await createBlogMutation({
        title,
        content,
        photos,
        path,
      });
      if ("data" in res) {
        setWriteModalToggle(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { createBlog };
}

export default Logic;
