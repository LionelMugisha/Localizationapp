import { useEffect, useState } from 'react'
import Map from './Map'
import { CssBaseline, Grid } from '@material-ui/core'
import { getRestaurantData } from './api/MapApi'

const Dashboard = () => {
    
    const [place, setPlace] = useState([]);
    const [coordinate, setCoordinate] = useState({});
    const [bound, setBound] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) => {
            setCoordinate({lat: latitude, lng: longitude});
        })
    },[]);

    useEffect(() => {
        if(bound.sw && bound.ne){
            getRestaurantData(bound.sw, bound.ne)
                .then((data) => {
                    setPlace(data?.filter((places) => places.name && places.num_reviews > 0 ));
                })
        }
    },[bound]);

    return (
        <>
            <CssBaseline />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinate={setCoordinate}
                        setBound={setBound}
                        coordinate={coordinate}
                        place={place}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard;