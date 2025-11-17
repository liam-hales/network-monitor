'use server';

import { Network } from '../types';

/**
 * Used to resolve network data such as the
 * public IP address, ISP and location
 *
 * @returns The network data
 */
const getNetwork = async (): Promise<Network> => {

  // Fetch data from the API to resolve network data
  // such as public IP address, ISP and location
  const response = await fetch('http://ip-api.com/json');
  const { query, isp, lat, lon } = await response.json();

  return {
    publicIpAddress: query,
    isp: isp,
    latitude: lat,
    longitude: lon,
  };
};

export default getNetwork;
