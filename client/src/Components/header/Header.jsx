import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "./header.css"

const pages = ['Home', 'Schedule', 'Input Run'];
const settings = ['Profile', 'Account', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar  sx ={{backgroundColor: "#23419b", position:"sticky", top:"0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <img className="topImage" src="https://cosida.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2020/5/14/Brandeis.png"></img>

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}
          >
          <img className="topImage" src="https://cosida.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2020/5/14/Brandeis.png"></img>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

// import React from 'react'
// import "./header.css"

// export default function Header() {
//     return (
//         <div className="header">
//             <div className="wrapper">
//             <div className="topLeft">

//             </div>
            
//             <div className="topMiddle">
//                 <ul className="mainList">
//                     <li className="mainListItem">
//                         <a href="/">
//                         <i className="top fas fa-home"></i>
//                         Home
//                         </a>
//                     </li>
//                     <li className="mainListItem">
//                         <a href="#">
//                         <i className="top fas fa-calendar-alt"></i>
//                         Schedule
//                         </a>
//                     </li>
//                     <li className="mainListItem">
//                         <a href="#">
//                         <i className="top fas fa-running"></i>
//                         Input Run
//                         </a>
//                     </li>
//                     <li className="mainListItem">
//                         <a href="/test">
//                         <i className="top fas fa-sign-out-alt"></i>
//                         Logout
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//             <div className="topRight">
//                 <a href="#">
//                 <p className='profile'>
//                     Aaron
//                     <i className="fas fa-bars"></i>
                    
//                 </p>
//                 </a>
                
//             </div>
//             </div>
//         </div>
//     )
// }
