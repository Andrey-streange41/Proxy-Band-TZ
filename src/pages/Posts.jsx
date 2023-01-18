import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostsList from "../features/posts/PostsList";
import { getPosts, selectStatus } from "../features/posts/postsSlice";
import { selectUsers } from "../features/users/usersSlice";
import Spinner from "react-bootstrap/esm/Spinner";

const Posts = () => {
  const { id } = useParams();
  const loading = useSelector(selectStatus);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const user = users.find((el) => el.id == id);

  useEffect(() => {
    dispatch(getPosts(id));
  }, []);

  if (loading === "loading") return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Spinner />
    </div>
  );

  return (
    <div className="min-h-[100vh] bg-[#ECF2F3] w-full flex justify-center items-center flex-col gap-3 py-20 relative">
      <h1 className="text-[3.5em] font-bold">Posts user "{user?.name}"</h1>
      <PostsList />
    </div>
  );
};

export default Posts;
