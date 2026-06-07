import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
	height: "400px",
	width: "100%"
};

function Gmap(data){
	const googleMapsApiKey = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY;
	if (!googleMapsApiKey) {
		return <div>Google Maps API key is not configured.</div>;
	}

	console.log("Im in maps");
	console.log(data);
	let lt = data.data.lat
	let lg = data.data.lng
	console.log(lt)
	console.log(lg)
	const center = { lat: lt, lng: lg };

	return (
		<LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["geometry", "drawing", "places"]}>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={15}
				center={center}>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
}

export default Gmap;
