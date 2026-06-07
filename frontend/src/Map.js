import React from "react";
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from "react-google-maps";

function Gmap(data){
	const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

	function Map() {
		console.log("Im in maps");
		console.log(data);
		let lt = data.data.lat
		let lg = data.data.lng
		console.log(lt)
		console.log(lg)
		return (
			<GoogleMap defaultZoom={15} defaultCenter={{ lat: lt, lng: lg }}>
				<Marker position={{ lat: lt, lng: lg }} />
			</GoogleMap>
		);
	}

	const WrappedMap = withScriptjs(withGoogleMap(Map));
	if (!googleMapsApiKey) {
		return <div>Google Maps API key is not configured.</div>;
	}

	return (
		<div style={{ height: "400px", width: "100%" }}>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleMapsApiKey}`}
				loadingElement={<div style={{ height: "100%" }} />}
				containerElement={<div style={{ height: "100%" }} />}
				mapElement={<div style={{ height: "100%" }} />}
			/>
		</div>
	);
}

export default Gmap;
