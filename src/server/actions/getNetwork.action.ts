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
  const response = await fetch('https://speed.cloudflare.com/meta');
  const { clientIp, asOrganization, latitude, longitude } = await response.json();

  return {
    publicIpAddress: clientIp,
    isp: asOrganization,
    latitude: latitude,
    longitude: longitude,
  };
};

export default getNetwork;
