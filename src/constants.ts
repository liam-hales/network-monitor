/**
 * Describes all database
 * collection names
 */
export const collectionNames = [
  'network_performance',
  'network_uptime',
] as const;

/**
 * Describes the servers used for
 * network uptime monitoring
 */
export const uptimeHosts = [
  '1.1.1.1', // Cloudflare DNS
  '8.8.8.8', // Google DNS
];

/**
 * Describes all app navigation items used to render the
 * navigation buttons and determine the URL path
 */
export const appNavItems = [
  {
    name: 'Overview',
    path: '/overview',
    subItems: [
      {
        name: 'Throughput',
        path: '/overview/throughput',
      },
      {
        name: 'Latency',
        path: '/overview/latency',
      },
      {
        name: 'Jitter',
        path: '/overview/jitter',
      },
    ],
  },
  {
    name: 'Live Test',
    path: '/live-test',
    subItems: [],
  },
  {
    name: 'Devices',
    path: '/devices',
    subItems: [],
  },
] as const;
