import { Outlet } from "react-router";

export const HomeLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
};
