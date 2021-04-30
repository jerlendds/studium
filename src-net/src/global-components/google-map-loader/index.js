import GoogleMapsApiLoader from "google-maps-api-loader";

const initializeMap = async (mapRef, mapConfig) => {
  const google = await GoogleMapsApiLoader({
    apiKey: mapConfig.apiKey
  });
  const map = new google.maps.Map(mapRef, mapConfig.config(google));

  return {
    map: map,
    google: google
  };
};

export { initializeMap };
