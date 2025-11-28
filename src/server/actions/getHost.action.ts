'use server';

import os from 'os';
import { PrivateHost } from '../types';

/**
 * Used to resolve the private host information
 * such as the IP address and MAC address
 *
 * @returns The private host data
 */
const getHost = async (): Promise<PrivateHost> => {
  const netInterfaces = os.networkInterfaces();

  for (const key of Object.keys(netInterfaces)) {
    const addresses = netInterfaces[key] ?? [];

    for (const address of addresses) {
      // Skip over non-IPv4, internal and
      // link-local addresses
      if (
        address.family !== 'IPv4' ||
        address.internal === true ||
        address.address.startsWith('169.254') === true
      ) {
        continue;
      }

      return {
        ipAddress: address.address,
        macAddress: address.mac,
      };
    }
  }

  // No network info was found,
  // throw an error
  throw new Error('Cannot resolve host network info');
};

export default getHost;
