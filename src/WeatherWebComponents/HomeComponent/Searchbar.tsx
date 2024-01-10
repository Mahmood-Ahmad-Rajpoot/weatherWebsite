// import React from "react";
//  material ui
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Button } from "antd";
 import { useDispatch , useSelector} from "react-redux";
import { setNav } from "../../features/NavController";
// searchBar styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",

  height: "40px",
  margin: "0 5%",
  borderRadius: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#f6f6f6",
  // color: "#bbb",
  "&:hover": {
    backgroundColor: "#f6f6f6",
  },
  marginTop: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    width: "auto",
  },
  "& .css-1oqqzyl-MuiContainer-root": {
    padding: " 0",
  },
}));

const StyledInputBase = styled(InputBase)(() => ({}));

// import './second.scss'
const SearchBar = () => {
  // const [ham, setHam] = useState<boolean>(true);
  const { show } = useSelector((s: any) => s.navController)
  
  const dispatch = useDispatch();
  return (
    <div className="flex md:w-full w-[100%]  justify-between h-auto items-baseline pb-3 pl-3">
      <Button
        onClick={() => dispatch(setNav())}
        shape="circle"
        type="link"
        className={`${show&& 'z-[9999] ml-[150px] ' }  md:hidden bg-[--weather-primary-color] text-[--color-white]  flex justify-center items-center`}
      >
     { !show?  <MenuIcon className="md:hidden flex " />:<CloseIcon/>}
        
      </Button>
      {/* <Search className="px-2 w-1/2">
        <div className=" w-full  flex ">
          <StyledInputBase
            className=""
            placeholder="Search here..."
            inputProps={{ "aria-label": "Search " }}
          />
        </div>
        <div className=" flex justify-center  m-0 p-0 ">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </Search>
      <div className="flex gap-3     ">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div> */}
    </div>
  );
};

export default SearchBar;
