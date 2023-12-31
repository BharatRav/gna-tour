import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";
import Footer from "../common/Footer";
import Topbar from "../common/Topbar";
import AuthModal from "../common/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import userApi from "../../api/modules/user.api";
import { setListFavorites, setUser } from "../../redux/features/userSlice";
import { toast } from "react-toastify";
const MainLayout = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const authUser = async () => {
      const { response, err } = await userApi.getInfo();

      if (response) dispatch(setUser(response));

      if (err) dispatch(setUser(null));
    };
    authUser();
  }, [dispatch]);

  return (
    <>
      {/* global loading */}
      <GlobalLoading />
      {/* global loading */}

      {/* login modal */}
      <AuthModal />
      {/* login modal */}
      <Box display="flex" minHeight="100vh">
        {/* header */}
        <Topbar />
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}
        {/* <CirculerRate/> */}
      </Box>

      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
};

export default MainLayout;