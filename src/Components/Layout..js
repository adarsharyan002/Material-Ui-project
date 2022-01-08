import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { useHistory, useLocation } from 'react-router-dom'
import { SubjectOutlined,AddCircleOutlineOutlined } from '@mui/icons-material';
import AppBar from  '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import Avatar from '@mui/material/Avatar'
const drawerWidth=200
const useStyles= makeStyles((theme)=>{
    return{
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
          },
    header:{
        padding:theme.spacing(2)
    },
    root:{
        display:'flex'
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper: {
        width: drawerWidth,
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2)
    }

}
})



const Layout = ({children}) => {

    const classes= useStyles();
    const history=useHistory();
    const links= [
        {
            text:'My notes',
            icon: <SubjectOutlined color="secondary" />, 
            path: '/' 
        },
        { 
            text: 'Create Note', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/create' 
          },
    ]
    return (

      
        <div className={classes.root}>
             <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
         
          <Typography>Mario</Typography>
          <Avatar className={classes.avatar} src="/mario-av.png" />
        </Toolbar>
      </AppBar>
        <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="left"
        elevation={3}>
    <div>
        <Typography className={classes.header} variant='h5'>
            Ninza Notes

        </Typography>

    </div>
    <List>
        {links.map((item)=>{
            return(
                <ListItem 
                button
                onClick={()=>history.push(item.path)}
                
                key={item.text}>
                    <ListItemIcon>
                     {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text}/>
                        
                  

                </ListItem>
            )
        })}
    </List>
        

        </Drawer>
        <div className={classes.page}>
        <div className={classes.toolbar}></div>
            {children}
            </div>
       
        
        </div>

      );
}
 
export default Layout;