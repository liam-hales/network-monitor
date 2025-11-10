'use server';

import os, { NetworkInterfaceInfo } from 'os';

/**
 * Used to resolve the
 * host network info
 *
 * @returns The host network info
 */
const getHostNetworkInfo = (): NetworkInterfaceInfo => {
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

      return address;
    }
  }

  // No network info was found,
  // throw an error
  throw new Error('Cannot resolve host network info');
};

export default getHostNetworkInfo;
