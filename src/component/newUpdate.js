import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from 'react-countup'
import '../index.css'


const useStyles = makeStyles({
  root: {
    background: '#D7E0FB',
    textAlign: 'center',
    minWidth: '20rem',
    marginTop: '2rem',
    
  },
  roottwo:{
    textAlign: 'center',
    background: '#FFD5E3',

    marginTop: '2rem',

    minWidth: '20rem'
  },
  rootthree:{
    textAlign: 'center',
    background: '#CCF9EC',
    minWidth: '20rem',
    marginTop: '2rem',
  },
  bootomSet:{
      background: '#6900E2',
      color: 'white',

  },
  bottomtwo:{
    color: 'white',

    background: '#FF2B74'
  },
  bottomthree:{
      
      color: 'white',
      background: '#00E1A2'

  },
  

});


export const Update = ({updation}) => {
    const classes = useStyles();
    
    
    return(
        
        <div className="NewUpdate">
            <Card className={classes.root}>
                <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            {/* {updation.NewConfirmed} */}
                            <CountUp 
                                start={0}
                                end={1253552}
                                duration={2.5}
                                separator=","
                            
                            />
                            
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.bootomSet} >
                        <Typography variant="h6" > Confirmed </Typography>
                </CardActions>
            </Card>

            <Card className={classes.roottwo} >
                <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                        <CountUp 
                                start={0}
                                end={122053}
                                duration={2.5}
                                separator=","
                            
                            />
                            
                            
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.bottomtwo}  >
                        <Typography variant="h6" > Death </Typography>
                </CardActions>
            </Card>

            <Card className={classes.rootthree}>
                <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            <CountUp 
                                    start={0}
                                    end={122053}
                                    duration={1.5}
                                    separator=","
                                
                                />
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.bottomthree} >
                        <Typography variant="h6" > Recovered </Typography>
                </CardActions>
            </Card>
    </div>
        )
}