import React, { useContext } from 'react';
import { AppBar, Badge, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon, AddShoppingCart as AddShoppingCartIcon } from '@mui/icons-material';

import { ProductContext } from '../Root/Root';
import { Link } from 'react-router-dom';
import './styles.css'

const Header = () => {
  const { count } = useContext(ProductContext);

  return (
    <header className='header'>
      <div className='title'>
        <Link to={'/list'}>
          Smartphone-Shop
        </Link>
      </div>
      <div className='shopping-cart'>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={count} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </div>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              Ir
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ flexGrow: 1 }}
            >
              <Typography variant="h6" component="div" >
                News
              </Typography>
            </IconButton>


           

          </Toolbar>
        </AppBar>
      </Box> */}

    </header>
  );
}

export default Header;
