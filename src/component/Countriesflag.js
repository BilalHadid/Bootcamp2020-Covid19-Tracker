import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "5rem"
  },
});


export const Countriesflag = ({sumary}) => {
    const classes = useStyles();
    return (
        <div>
            

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={sumary.Country}
                    height="140"
                    image={`https://www.countryflags.io/${sumary.CountryCode}/flat/64.png`}
                    title="Country"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {sumary.Country}
                    </Typography>
                    <Typography vardiant="p">{`Active : ${sumary.Active}`}</Typography>
                    <Typography vardiant="p">{`Confirmed : ${sumary.Confirmed}`}</Typography>
                    <Typography vardiant="p">{`Deaths : ${sumary.Deaths}`}</Typography>
                    <Typography vardiant="p">{`Recovered : ${sumary.Recovered}`}</Typography>
                    </CardContent>
                </CardActionArea>
      
            </Card>
        </div>
    )
}
