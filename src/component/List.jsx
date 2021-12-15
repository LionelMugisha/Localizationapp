import React, { useState } from 'react'
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, CircularProgress } from '@material-ui/core'
import PlaceDetails from './PlaceDetails';

import useStyles from './styles/ListStyle';

const List = ({place, isLoading}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants')

    return(
        <div className={classes.container}>
            <Typography variant="h6">
                Restaurants around you
            </Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <Grid container spacing={3} className={classes.list}>
                        {place?.map((places,id) => (
                            <Grid item key={id} xs={12}>
                                <PlaceDetails places={places} />
                            </Grid>
                        ))}
                    </Grid>
                </>
                )}
            
        </div>
    )
}

export default List;