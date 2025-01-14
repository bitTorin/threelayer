import React, { useRef } from 'react';
import MapboxGL from 'react-mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import { ThreeLayer } from 'threelayer';

const Map = MapboxGL({
	accessToken: 'pk.eyJ1IjoianNjYXN0cm8iLCJhIjoiY2s2YzB6Z25kMDVhejNrbXNpcmtjNGtpbiJ9.28ynPf1Y5Q8EyB_moOHylw',
});

const ReactMapboxGL = () => {
	const mapRef = useRef<mapboxgl.Map>();
	const handleStyleLoad = (map: mapboxgl.Map) => {
		mapRef.current = map;
		addThreeLayer(map);
	};
	const addThreeLayer = (map: mapboxgl.Map) => {
		const threeLayer = new ThreeLayer();
		map.addLayer(threeLayer);
		threeLayer.threebox
			.loadModel({
				url: 'https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf',
				type: 'gltf',
				units: 'meters',
			})
			.then(group => {
				group.setCoords([127.04674407739593, 37.30012673302676]);
				threeLayer.threebox.add(group);
			});
	};
	return (
		<Map
			style="mapbox://styles/mapbox/streets-v11"
			containerStyle={{ width: '100%', height: '100%' }}
			center={[127.04674407739593, 37.30012673302676]}
			pitch={[60]}
			zoom={[16]}
			onStyleLoad={handleStyleLoad}
		/>
	);
};

export default ReactMapboxGL;
