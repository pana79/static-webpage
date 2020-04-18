
import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
       <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false) }
       >
           <List component="nav">
               <ListItem button onClick={()=> console.log('Featured')}>
                   Event Starts In
               </ListItem>
           </List>
           <List component="nav">
               <ListItem button onClick={()=> console.log('Featured')}>
                    Venue NFO
               </ListItem>
           </List>
           <List component="nav">
               <ListItem button onClick={()=> console.log('Featured')}>
                    Highlights
               </ListItem>
           </List>
           <List component="nav">
               <ListItem button onClick={()=> console.log('Featured')}>
                    Pricing
               </ListItem>
           </List>
           <List component="nav">
               <ListItem button onClick={()=> console.log('Featured')}>
                    Lokation
               </ListItem>
           </List>

       </Drawer>
    );
};

export default SideDrawer;