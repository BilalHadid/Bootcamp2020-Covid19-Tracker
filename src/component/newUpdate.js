import React,{Fragment} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    
    background: '#D7E0FB',
    textAlign: 'center',
    display: 'inline-block',
    width: '25%',
    marginLeft: '5%'
  },
  roottwo:{
    textAlign: 'center',
    display: 'inline-block',
    width: '25%',
    marginLeft: '5%',
    background: '#FFD5E3'
  },
  rootthree:{
    textAlign: 'center',
    display: 'inline-block',
    width: '25%',
    marginLeft: '5%',
    background: '#CCF9EC'
  },
  bootomSet:{
      background: '#6900E2',
      color: 'white',
      paddingLeft: '36%',

  },
  bottomtwo:{
    color: 'white',
    paddingLeft: '36%',

    background: '#FF2B74'
  },
  bottomthree:{
      
      color: 'white',
      paddingLeft: '36%',
      background: '#00E1A2'

  }

});


export const Update = () => {

    const classes = useStyles();
    return(
        <Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                        <CardMedia
                        alt="Contemplative Reptile"
                        height="140"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            12,2053
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.bootomSet} >
                        <Typography variant="h6" > Confirmed </Typography>
                </CardActions>
            </Card>

            <Card className={classes.roottwo} >
                <CardActionArea>
                        <CardMedia
                        alt="Contemplative Reptile"
                        height="140"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            12,2053
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.bottomtwo}  >
                        <Typography variant="h6" > Death </Typography>
                </CardActions>
            </Card>

            <Card className={classes.rootthree}>
                <CardActionArea>
                        <CardMedia
                        alt="Contemplative Reptile"
                        height="140"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            12,2053
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.bottomthree} >
                        <Typography variant="h6" > Recovered </Typography>
                </CardActions>
            </Card>
    </Fragment>
        )
}