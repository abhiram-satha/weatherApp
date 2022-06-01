import React from "react";
import { useGeolocated } from "react-geolocated";

const Demo = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 0,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
      // const {longitude, latitude} = coords;
        console.log(coords.longitude)
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Demo;