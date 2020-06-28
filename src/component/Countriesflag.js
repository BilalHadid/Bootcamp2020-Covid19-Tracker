import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "5rem",
    background: '#FEFCEE',
    

    
    
  },
  
});


export const Countriesflag = ({sumary}) => {
    const classes = useStyles();
    return (
        <div>
            

            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={sumary.Country}
                    height="140"
                    image={`https://www.countryflags.io/${sumary.CountryCode}/flat/64.png`}
                    title="Country"
                    />
                    <CardContent className={classes.Country}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {sumary.Country}
                    </Typography>
                    <Typography vardiant="p">
                        Confirmed :  
                    <CountUp 
                        start={0}
                        end={sumary.Confirmed}
                        duration={3.5}
                        separator=","
                    
                    />
                    </Typography>
                    <Typography vardiant="p">
                    Active :  
                    <CountUp 
                        start={0}
                        end={sumary.Active}
                        duration={3.5}
                        separator=","
                    
                    />
                        </Typography>
                    <Typography vardiant="p">
                    Deaths :  
                    <CountUp 
                        start={0}
                        end={sumary.Deaths}
                        duration={3.5}
                        separator=","
                    
                    />
                      </Typography>
                    <Typography vardiant="p">
                    Recovered :  
                    <CountUp 
                        start={0}
                        end={sumary.Recovered}
                        duration={3.5}
                        separator=","
                    
                    />
                    </Typography>
                    </CardContent>
                </CardActionArea>
      
            </Card>
        </div>
    )
}
