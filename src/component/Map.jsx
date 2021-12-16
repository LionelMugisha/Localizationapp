import React,{useState} from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery, InputBase  } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import { Autocomplete } from '@react-google-maps/api'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles/MapStyle'

const Map = ({setCoordinate, setBound, coordinate, place}) => {

    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');

    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoCompl) => setAutocomplete(autoCompl);

     const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinate({lat,lng});
     }

    return(
        <>
            <div className="p-2 flex items-center text-sm">
				<div className="flex border-2 rounded">
				    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
						<div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search ..." classes={{ root: classes.inputRoot, input: classes.inputData }} />
                        </div>
					</Autocomplete>
				</div>
			</div>
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDpnChYJc3A40-17cxohdGWldpB2Wmdi3c' }}
                    defaultCenter={coordinate}
                    center={coordinate}
                    defaultZoom={15}
                    margin={[40,40,40,40]}
                    options={''}
                    onChange={(e)=>{
                        setCoordinate({lat: e.center.lat, lng: e.center.lng })
                        setBound({ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                    }}
                >
                {place?.map((places,index) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(places.latitude)}
                        lng={Number(places.longitude)}
                        key={index}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <img 
                                        className={classes.pointer}
                                        src={places.photo ? places.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={places.name}
                                    />
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {places.name}
                                    </Typography>
                                    <Rating size="small" value={Number(places.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
        </>
        
    )
}

export default Map;