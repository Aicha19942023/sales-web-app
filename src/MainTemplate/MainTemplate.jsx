import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Typography,
  Box,
  IconButton,
  Avatar,
  AppBar,
  Container,
  Toolbar,
} from "@mui/material";
import { Footer, Button } from "./styles";

export default function MainTemplate() {
  const { pathname } = useLocation();
  const menu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/counters",
      label: "Counters",
    },
  ];
  return (
    <>
      <header>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: "flex",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Sales
              </Typography>

              <Box sx={{ flexGrow: 1, display: "flex" }}>
                {menu.map(({ to, label }) => (
                  <Button
                    key={label}
                    component={Link}
                    to={to}
                    current={pathname === to}
                  >
                    {label}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton component={Link} onClick={() => {}} sx={{ p: 0 }}>
                  <Avatar>RL</Avatar>
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <main>
        <Button>Click me</Button>
        <Outlet />
      </main>
      <Footer>
        <Typography>2023</Typography>
      </Footer>
    </>
  );
}
