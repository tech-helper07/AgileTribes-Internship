import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Badge,
  InputBase,
  alpha,
} from "@mui/material";
import {
  Search,
  Notifications,
  AccountCircle,
  Menu,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const GradientAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
}));

const Header = ({ onMenuClick }) => {
  return (
    <GradientAppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            fontWeight: 700,
            fontSize: "1.5rem",
          }}
        >
          Analytics Dashboard Pro
        </Typography>

        <SearchContainer sx={{ ml: 3 }}>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search analytics..."
            inputProps={{ "aria-label": "search" }}
          />
        </SearchContainer>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error" sx={{ mr: 2 } }>
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Avatar
              sx={{
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              }}
              src="https://i.pravatar.cc/300"
            >
              <AccountCircle />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </GradientAppBar>
  );
};

export default Header;
