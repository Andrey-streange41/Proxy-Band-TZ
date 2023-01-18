import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { getUsers, selectLoading } from "./features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import "swiper/swiper.min.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading === "loading")
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <Router>
      <header className="w-full h-[100px] bg-slate-700 flex justify-between items-center p-20 text-white">
        <h1 className="text-[2em]">Page title</h1>
        <nav className="w-[600px]   h-[100px] flex justify-center items-center gap-2">
          <Link
            to={"/"}
            className="border p-3  rounded-sm w-[200px] flex justify-center items-center"
          >
            Home
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/posts/:id`} element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
