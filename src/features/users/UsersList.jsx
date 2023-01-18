import React from "react";
import {  useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { selectUsers } from "./usersSlice";
import UserCard from "../../components/UserCard";

const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <ul className="w-[930px]">
      <Swiper grabCursor spaceBetween={10} slidesPerView={"auto"}>
        {users.map((el, i) => (
          <SwiperSlide key={i} className="border w-[300px] h-[450px]">
            <UserCard user={el} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
};

export default UsersList;
