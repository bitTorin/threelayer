import React, { useState, useRef } from 'react';
import ReactMapGl, { MapLoadEvent } from 'react-map-gl';
import * as mapboxgl from 'mapbox-gl';
import { ThreeLayer } from 'threelayer';

const ReactMapGL = () => {
	const mapRef = useRef<mapboxgl.Map>();
	const [viewport, setViewport] = useState<any>({
		width: '100%',
		height: '100%',
		longitude: 127.04674407739593,
		latitude: 37.30012673302676,
		zoom: 16,
		pitch: 60,
	});
	const handleLoad = (event: MapLoadEvent) => {
		const { target } = event;
		mapRef.current = target;
		addThreeLayer(mapRef.current);
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
		<ReactMapGl
			mapboxApiAccessToken="pk.eyJ1IjoianNjYXN0cm8iLCJhIjoiY2s2YzB6Z25kMDVhejNrbXNpcmtjNGtpbiJ9.28ynPf1Y5Q8EyB_moOHylw"
			mapStyle="mapbox://styles/mapbox/streets-v11"
			onViewportChange={viewState => setViewport(viewState)}
			onLoad={handleLoad}
			{...viewport}
		/>
	);
};

export default ReactMapGL;
