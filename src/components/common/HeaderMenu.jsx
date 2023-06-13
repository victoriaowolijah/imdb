import React from 'react'
import {Menu, MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';
import { routhpath } from '../../constants/route';


const HeaderMenu = ({open, handleClose}) => {

    const openMenu = Boolean(open)

  return (
    <Menu
    id = "basic-menu"
    anchorE1 = {open}
    open = {openMenu}
    onclose = {handleClose}
    MenuListProps = {{
        'aria-labelledby' : 'basic-button',
    }}
    >

   <Link to= {`${routhpath.categories}?category=popular`} style={{textDecoration: 'none',color:'inherit'}}>
      <MenuItem onClick = {handleClose}>Popular</MenuItem> 
   </Link>
   <Link to= {`${routhpath.categories}?category=toprated`} style={{textDecoration: 'none',color:'inherit'}}>
      <MenuItem onClick = {handleClose}>Top Rated</MenuItem> 
   </Link>
   <Link to= {`${routhpath.categories}?category=upcoming`} style={{textDecoration: 'none',color:'inherit'}}>
      <MenuItem onClick = {handleClose}>Upcoming</MenuItem> 
   </Link>
   

    </Menu>
  )
}

export default HeaderMenu
