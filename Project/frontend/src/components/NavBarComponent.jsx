import { Box, Grid, AppBar,Container, Typography, Paper, IconButton, Avatar, Menu, Divider,
  Tooltip,
} from "@mui/material";
import { useState } from "react";

export default function NavBarComponent() {
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  // handleNotificationClicked
  const open = Boolean(anchorEl);
  const notificationOpen = Boolean(notificationAnchorEl);
  const handleAvatarClicked = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotificationClicked = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const notificationHandleClose = () => {
    setNotificationAnchorEl(null);
  };

  return (
    <div className="bg-black-700">
    <Grid container >
      <Grid item md={12}>
        <Paper elevation={4}>
          <AppBar sx={{ padding: 4 }} position="static"  >
            <Container maxWidth="xxl">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "Black"
                }}
              >
                <Typography
                  variant="h6"
                  component="a"
                  href="/"
                  sx={{
                    mx: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Stock Management
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <Menu >
                  
                    <Divider />
                  </Menu>
                  <IconButton
                    onClick={handleAvatarClicked}
                    size="small"
                    sx={{ mx: 2 }}
                    aria-haspopup="true"
                  >
                    <Tooltip title="account settings">
                      <Avatar sx={{ width: 32, height: 32 }}>TS</Avatar>
                    </Tooltip>
                  </IconButton>
                  <Typography fontFamily={"Inter"}>Tamilselvan Selvaraj</Typography>
                </Box>
              </Box>
            </Container>
          </AppBar>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );

}



