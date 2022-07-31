import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 15;
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [10.15382, 56.17153],
      zoom: zoom,
    });
  });

  return <div ref={mapContainer} className="map-wrapper"></div>;
};

export default Map;
