import React, {useEffect, useState} from 'react';
import ReactMapGL, {
	FullscreenControl,
	GeolocateControl,
	Marker,
	NavigationControl,
	ScaleControl
} from 'react-map-gl';

// import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
import {Room} from "@material-ui/icons";

const MAPBOX_TOKEN = "pk.eyJ1IjoibWVybGlucGFuZWwiLCJhIjoiY2tub3F6YWxzMDF5ejJwbm9kczd3c3drYiJ9.of46le12-gVTvoXzTQ1DgA";

// mapboxgl.workerClass = MapboxWorker;

const geoLocateStyle = {
	top: 0,
	left: 0
};

const fullscreenControlStyle = {
	top: 36,
	left: 0,
	padding: '10px'
};

const navStyle = {
	top: 72,
	left: 0,
	padding: '10px',
	marginTop: 10
};

const scaleControlStyle = {
	bottom: 36,
	left: 0,
	padding: '10px'
};


const MapArea = ({onMarkerMove}) => {
	const location = {
		latitude: 52.0541523,
		longitude: 1.1529685
	}

	const [viewport, setViewport] = useState({
		latitude: location.latitude,
		longitude: location.longitude,
		zoom: 15
	});
	const latitude =
		typeof location?.latitude === 'string'
			? parseFloat(location?.latitude)
			: location?.latitude;
	const longitude =
		typeof location?.longitude === 'string'
			? parseFloat(location?.longitude)
			: location?.longitude;

	useEffect(() => {
		if (typeof location?.latitude === 'number' && typeof location?.longitude === 'number') {
			setViewport({
				latitude: typeof latitude === 'number' ? latitude : 52,
				longitude: typeof longitude === 'number' ? longitude : 1,
				zoom: 15
			});
		}
	}, [location]);

	// const onMarkerDragEnd = useCallback(event => {
	// 	onMarkerMove?.({
	// 		longitude: event.lngLat[0],
	// 		latitude: event.lngLat[1]
	// 	});
	// }, []);

	return (
		<ReactMapGL
			{...viewport}
			// longitude={location?.longitude}
			// latitude={location?.latitude}
			width="100%"
			height="100%"
			mapStyle="mapbox://styles/mapbox/streets-v10"
			mapboxApiAccessToken={MAPBOX_TOKEN}
			onViewportChange={nextViewport => setViewport(nextViewport)}
		>
			<div
				style={{
					maxWidth: 30,
					margin: 10
				}}
			>
				<GeolocateControl style={geoLocateStyle}/>
				<FullscreenControl style={fullscreenControlStyle}/>
				<NavigationControl style={navStyle}/>
				<ScaleControl style={scaleControlStyle}/>
			</div>
			{!!location?.latitude && !!location?.longitude && (
				<Marker
					longitude={location?.longitude}
					latitude={location?.latitude}
					// draggable={!!onMarkerMove}
					// onDragStart={onMarkerDragStart}
					// onDrag={onMarkerDrag}
					// onDragEnd={onMarkerDragEnd}
				>
					<Room
						style={{
							fontSize: 35,
							marginLeft: '-15px',
							marginTop: '-27px',
							display: 'block',
							color: '#254e39'
						}}
					/>
				</Marker>
			)}
		</ReactMapGL>
	);
};

export default MapArea;