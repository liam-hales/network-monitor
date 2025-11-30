'use client';

import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../types';
import { MapContainer, TileLayer } from 'react-leaflet';

/**
 * The `Map` component props
 */
interface Props extends BaseProps {
  readonly latitude: number;
  readonly longitude: number;
  readonly zoom?: number;
}

/**
 * Used to render a map at a specific location using
 * the `react-leaflet` and `leaflet` packages under the hood
 *
 * @param props The component props
 * @returns The `Map` component
 */
const Map: FunctionComponent<Props> = ({ className, latitude, longitude, zoom = 10 }): ReactElement<Props> => {
  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer
      className={className}
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer url="https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default Map;
