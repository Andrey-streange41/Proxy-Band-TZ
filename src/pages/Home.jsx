import React from "react";
import UsersList from "../features/users/UsersList";

const Home = () => {
  return (
    <div className="min-h-[100vh] bg-[#ECF2F3] w-full flex justify-center items-center flex-col gap-3">
      <h1 className="text-lg font-bold">Users</h1>
      <UsersList />
      <h2>Grab card and swipe</h2>
    </div>
  );
};

export default Home;
