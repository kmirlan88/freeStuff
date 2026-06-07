This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## FreeStuff

https://free-stuff.herokuapp.com/getstuff

## Configuration

Copy `.env.example` to `.env` for the server and `frontend/.env.example` to
`frontend/.env` for the React app.

- `GEOCODER_API_KEY`: server-side Google Geocoding API key.
- `REACT_APP_GOOGLE_MAPS_API_KEY`: browser Google Maps JavaScript API key.

Restrict both keys in Google Cloud Console. The frontend key is visible in the
built JavaScript bundle, so it must be limited by allowed HTTP referrers and API
scope.
