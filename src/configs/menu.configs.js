import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

const main = [
  {
    display: "home",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home",
  },
  {
    display: "categories",
    path: "/categories",
    icon: <SlideshowOutlinedIcon />,
    state: "categories",
    endIcon:true
  },
  {
    display: "Destination",
    path: "/destination",
    icon: <LiveTvOutlinedIcon />,
    state: "destination",
  },
  {
    display: "Blog",
    path: "/blog",
    icon: <LiveTvOutlinedIcon />,
    state: "blog",
    endIcon:true
  },
  {
    display: "Pages",
    path: "/pages",
    icon: <LiveTvOutlinedIcon />,
    state: "pages",
    endIcon:true
  },
  {
    display: "Dashboard",
    path: "/dashboard",
    icon: <LiveTvOutlinedIcon />,
    state: "dashboard",
    endIcon:true
  },
  {
    display: "Contact",
    path: "/contact",
    icon: <LiveTvOutlinedIcon />,
    state: "contact",
  },
  {
    display: "search",
    path: "/search",
    icon: <SearchOutlinedIcon />,
    state: "search",
  },
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    state: "favorite",
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: <RateReviewOutlinedIcon />,
    state: "reviews",
  },
  {
    display: "password-update",
    path: "/password-update",
    icon: <LockResetOutlinedIcon />,
    state: "password.update",
  },
];

const menuConfigs = { main, user };

export default menuConfigs;