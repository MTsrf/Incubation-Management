import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react';
import './ListItem.css'
export const mainListItems = (
  <React.Fragment>
    <ListItemButton >
      <ListItemIcon>
      <PeopleIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <Link className='decoration-changes' to={'/home'}>
      <ListItemText primary="Applicant List" active/>
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <AssignmentIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <Link className='decoration-changes' to={'/home/track'}>
      <ListItemText primary="Record Track" />
      </Link>
      
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <DashboardIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <Link className='decoration-changes' to={'/home/slot'}>
      <ListItemText primary="Booking Slots" />
      </Link>
    </ListItemButton>
   
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);

