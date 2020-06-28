import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export const SearchBox = (props) => {
    const classes = useStyles()
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                 <TextField id="outlined-basic" label="Country Name" variant="outlined" placeholder={props.placeholder} onChange={props.handleChange}/>

            </form>
        </div>
    )
}
