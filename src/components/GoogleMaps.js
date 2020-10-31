import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
    defaultZoom={8}
    defaultCenter={props.showLocation}
    >
        {props.isMarkerShown && <Marker position={props.markerLocation} />}
    </GoogleMap>
))