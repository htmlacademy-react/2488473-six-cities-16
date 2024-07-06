import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { TCity, TOffer } from '../../types/global';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import 'leaflet/dist/leaflet.css';

type TMap = {
  city: TCity;
  points: TOffer[];
  selected: TOffer | undefined;
}

function Map ({ city, points, selected }: TMap): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon: leaflet.Icon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon: leaflet.Icon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        let iconTemplate;

        if (typeof selected !== 'undefined') {
          iconTemplate = point.title === selected.title ? currentCustomIcon : defaultCustomIcon;
        } else {
          iconTemplate = defaultCustomIcon;
        }

        leaflet
          .marker({
            lat: point.city.location.latitude,
            lng: point.city.location.longitude,
          }, {
            icon: iconTemplate,
          })
          .addTo(map);
      });
    }
  }, [map, points, selected]);

  return (
    <div style={{ height: '100%' }} ref={mapRef} ></div>
  );
}

export default Map;
