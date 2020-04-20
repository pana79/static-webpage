
import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroll, scroller} from 'react-scroll'

const SideDrawer = (props) => {
    const scrollToElement= (element) => {
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-130
        })
        props.onClose(false)
    }
    return (
       <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false) }
       >
           <List component="nav">
               <ListItem button onClick={()=> scrollToElement(('featured'))}>
                   Event Starts In
               </ListItem>
           </List>
           <List component="nav">
               <ListItem button onClick={()=> scrollToElement(('venueinfo'))}>
                    Venue NFO
               </ListItem>
           </List>
           <List component="nav">
               <ListItem button onClick={()=> scrollToElement(('highlights'))}>
                    Highlights
               </ListItem>
           </List>
           <List component="nav">
               <ListItem button onClick={()=> scrollToElement(('pricing'))}>
                    Pricing
               </ListItem>
           </List>
           <List component="nav">
               <ListItem button onClick={()=> scrollToElement(('location'))}>
                    Location
               </ListItem>
           </List>

       </Drawer>
    );
};

export default SideDrawer;