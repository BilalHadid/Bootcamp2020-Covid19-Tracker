import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
   
  }));

export const SearchBox = (props) => {
    const classes = useStyles()
    return (
        <div>
            {/* <form className={classes.root} noValidate autoComplete="off">
                 <TextField id="outlined-basic" label="Country Name" variant="outlined" placeholder={props.placeholder} onChange={props.handleChange}/>

            </form> */}
            <Paper component="form" className={classes.root}>
        
                <InputBase
                    className={classes.input}
                    placeholder={props.placeholder}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={props.handleChange}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                
            </Paper>
        </div>
    )
}
