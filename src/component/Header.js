import React,{Fragment} from 'react'
import {Main} from './Main'
import { makeStyles } from '@material-ui/core/styles'


import {
    AppBar,
    Toolbar,
    Avatar,
    Typography,
    Box
} from "@material-ui/core"

import avator from '../images/tenor.gif'

const useStyles = makeStyles({
    menuContainer:{
        color: 'white',
        // marginLeft: '40%',
        marginTop: '1%',
        
        backgroundAttachment: 'unset',
        display: "flex",
        flexdirection: "column",
        justifycontent: "center",
        alignitems: "center",
        textalign: "center",
        minheight: "100vh",
    },
    main: {
        // background: '#D9FFFF0D',
        background: '#0E0037',
        
        backgroundAttachment: 'initial',
    },
    nine:{
        color: 'red',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: 800,
    },
    Covid:{
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: 800,
        color: "#029CEC"
    },
    navBar:{
        backgroundAttachment: 'unset',
        
    }
})


export const Header = () => {
    const classes = useStyles();
    return(
        <Fragment>
        <Box component= "nav" className={classes.navBar}>
            <AppBar className={classes.main}>
                
                <Toolbar className={classes.menuContainer}>
                    <Avatar src ={avator} alt="Rusel" />
                    <Typography variant="h4" className={classes.Covid} >Covid</Typography>
                    <Typography variant="h4" className={classes.nine} >_19 </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        <Main />
        </Fragment>
       
        
    )
}