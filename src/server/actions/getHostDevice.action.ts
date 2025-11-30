'use server';

import os from 'os';
import { HostDevice } from '../types';

/**
 * Used to resolve the host device information
 * such as its IP address and MAC address
 *
 * @returns The host device data
 */
const getHostDevice = async (): Promise<HostDevice> => {
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
  throw new Error('Cannot resolve host device network info');
};

export default getHostDevice;
