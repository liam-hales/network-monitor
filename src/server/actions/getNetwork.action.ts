'use server';

import { PublicNetwork } from '../types';

/**
 * Used to resolve the public network information
 * such as the IP address, ISP and location
 *
 * @returns The public network data
 */
const getNetwork = async (): Promise<PublicNetwork> => {

  // Fetch data from the API to resolve network data
  // such as public IP address, ISP and location
  const response = await fetch('https://speed.cloudflare.com/meta');
  const { clientIp, asOrganization, latitude, longitude } = await response.json();

  return {
    ipAddress: clientIp,
    isp: asOrganization,
    latitude: latitude,
    longitude: longitude,
  };
};

export default getNetwork;
