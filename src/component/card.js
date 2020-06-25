import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import avator from '../icons/TotalCases.png'
import avators from '../icons/TotalDeath.png'
import avatory from '../icons/recovered.png'
import CountUp from 'react-countup'
import '../index.css'


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    justifyContent: "center",
    maxWidth: '50%',
    minWidth: '20rem',
    textAlign: 'center',
    margin: '3rem',
    float: 'left',
    background: "#6900E2",
    overflow: 'auto',
    marginLeft: '2rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',

  },
  cover: {
    width: 100,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  OverAll:{
      display: "inline-block"
  },
  
}));


export const Cards = ({summary,date}) => {
    const classes = useStyles();
    if(!summary){
        return ''
    }
    
    
    return(
        <div className="Card">
        
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Total Cases
                </Typography>
                <Typography  color="textSecondary">
                    <CountUp 
                        start={0}
                        end={summary.TotalConfirmed}
                        duration={2.5}
                        separator=","
                    
                    />
                   
                </Typography>
                <Typography>{new Date(date).toDateString()}</Typography>
                </CardContent>
            
            </div>
            <CardMedia
                className={classes.cover}
                image={avator}
                title="Total Cases"
            />
        </Card>
        <Card className={classes.root} style={{background: '#FF2B74'}}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Total Death
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                <CountUp 
                        start={0}
                        end={summary.TotalDeaths}
                        duration={2.5}
                        separator=","
                    
                    />
                    
                </Typography>
                <Typography>{new Date(date).toDateString()}</Typography>
                </CardContent>
            
            </div>
            <CardMedia
                className={classes.cover}
                image={avators}
                title="Total Cases"
            />
        </Card>
        <Card className={classes.root} style={{background: '#00E1A2'}}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Recovered
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                <CountUp 
                        start={0}
                        end={summary.TotalRecovered}
                        duration={2.5}
                        separator=","
                    
                    />
                    
                </Typography>
                <Typography>{new Date(date).toDateString()}</Typography>
                </CardContent>
            
            </div>
            <CardMedia
                className={classes.cover}
                image={avatory}
                title="Total Cases"
            />
        </Card>
       
       
    </div>
    )

    
}