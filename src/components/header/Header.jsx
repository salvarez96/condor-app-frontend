import { Card, CardContent, CardMedia, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './header.css';
import { useRef, useState } from 'react';

function Header() {

  const [menu, setMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const menuOpenIcon = useRef(null)

  const handleClose = (close, e = null) => {
    if (close) {
      setMenu(false)
      setAnchorEl(e)
    } else {
      setMenu(true)
      setTimeout(() => {
        console.log(e);
  
        setAnchorEl(e.currentTarget)
      }, 100)
    }
  }

  return (
    <header>
      <div className="header-container">
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            padding: "10px 20px",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "4px",
            backdropFilter: "blur(30px)",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            height="65"
            image="/public/assets/logos/logotipo blanco transparente_1.svg"
            alt="logotipo"
          />
          <CardContent className='hamburger-menu__container'>
            { menu
              ? <MenuOpenIcon ref={menuOpenIcon} className='hamburger-menu hamburger-menu__open' sx={{ fontSize: 40 }} onClick={() => handleClose(true)} />
              : <MenuIcon className='hamburger-menu hamburger-menu__open' sx={{ fontSize: 40 }} onClick={(e) => handleClose(false, e)} />
            }
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={menu}
              onClose={() => handleClose(true)}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem >Profile</MenuItem>
              <MenuItem >My account</MenuItem>
              <MenuItem >Logout</MenuItem>
            </Menu>
          </CardContent>
        </Card>
        {/* <h1>Header</h1> */}
      </div>
    </header>
  );
}

export default Header;