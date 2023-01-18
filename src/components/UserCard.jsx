import React from "react";
import ButtonOutlineBlue from "./ButtonOutlineBlue";
import { Link } from "react-router-dom";
import AlbumsModal from "./AlbumsModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { getAlbums } from "../features/albums/albumsSlice";

const UserCard = ({ user }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();


  const getAlbumsClick = () => {
      dispatch(getAlbums(user.id))
      setModalShow(true);
      
  }

  return (
    <div
      className={
        "w-full h-full  rounded-lg bg-white flex  items-center flex-col p-10 gap-3 relative hover:shadow-lg"
      }
    >
      <img src={`/avatar.jpg`} className="w-[150px] h-[150px] rounded-full " />
      <h2 className="font-bold">{user.name}</h2>
      <h2 className="text-[#9FB3BA] text-center">{user.company.bs}</h2>
      <section className="absolute bottom-10 flex flex-col gap-2">
        <Link className="flex justify-center" to={`/posts/${user.id}`}>
          <ButtonOutlineBlue className="w-[190px]">Posts</ButtonOutlineBlue>
        </Link>
        <div onClick={() => setModalShow(true)}>
          <ButtonOutlineBlue
            onClick={getAlbumsClick}
            className={"w-[190px]"}
          >
            Albums
          </ButtonOutlineBlue>
        </div>

        <AlbumsModal show={modalShow} onHide={()=>setModalShow(false)} />
      </section>
    </div>
  );
};

export default UserCard;
