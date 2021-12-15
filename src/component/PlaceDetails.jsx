import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles/DetailStyle'

const PlaceDetails = ({places}) => {

    console.log(places);
    const classes = useStyles();

    return (
        <>
        <Card elevation={6}>
          <CardMedia
            style={{ height: 350 }}
            image={places.photo ? places.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={places.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">{places.name}</Typography>
            <Box display="flex" justifyContent="space-between" my={2}>
              <Rating name="read-only" value={Number(places.rating)} readOnly />
              <Typography component="legend">{places.num_reviews} review{places.num_reviews > 1 && 's'}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography component="legend">Ranking</Typography>
              <Typography gutterBottom variant="subtitle1">
                {places.ranking}
              </Typography>
            </Box>
            {places.address && (
              <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                <LocationOnIcon />{places.address}
              </Typography>
            )}
          </CardContent>
        </Card>
        </>
      );
}

export default PlaceDetails;