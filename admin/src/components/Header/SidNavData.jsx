import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton >
      <ListItemIcon>
      <PeopleIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <ListItemText primary="Applicant List" active/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <AssignmentIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <ListItemText primary="Record Track" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <DashboardIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <ListItemText primary="Booking Slots" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <AssignmentIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <ListItemText primary="Schedule Events" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <ListItemText primary="Videos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon style={{color:'#fff'}}/>
      </ListItemIcon>
      <ListItemText primary="Payments" />
    </ListItemButton>
  </React.Fragment>
);

