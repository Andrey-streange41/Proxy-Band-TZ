import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { useEffect } from "react";
import Post from "../../components/Post";

const PostsList = () => {
  const posts = useSelector(selectPosts);

  return (
    <ul className="w-full flex flex-col gap-5 mt-5">
      {posts.map((el, i) => (
        <Post key={Math.random().toString(9)} post={el} />
      ))}
    </ul>
  );
};

export default PostsList;
